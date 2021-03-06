const pkg = require('../package.json');

const loadScript = function(src, id) {
  if (id) {
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }
  }

  const tag = document.createElement('script');
  tag.id = id;
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName('body')[0].appendChild(tag);
};

exports.onRouteUpdate = () => {
  /**
   * Since gatsby loads pages with js after first load, we need to re-instantiate
   * the framework bundle on route change so it can look for DOM elements it needs to run its widgets.
   * Example would be Toggler looking for `data-toggle-target` elements.
   * We could move this to doc-template.js componentDidMount if we want to clean this up.
   * Another thing we may want to do is check if the framework component on page requires JS before reloading the file.
   *
   * Also adds cache busting based on framework version.
   */

  // get the bundle from unpkg since there are issues with building it while deploying the site
  // TODO: store path in some sort of vars since it's used in installation docs
  const jsUrl =
    process.env.NODE_ENV === 'production'
      ? `https://unpkg.com/middlebury-design-system@${
          pkg.version
        }/dist/js/mds.min.js`
      : `/mds.js?v=${pkg.version}`;

  loadScript(jsUrl, 'mds');
};
