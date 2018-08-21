import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('quote', module)
  .add('quote', () => (
    <figure class="quote">
      <blockquote class="quote__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore
        dolores adipisci neque qui modi aliquam voluptates asperiores pariatur
        autem, eligendi sunt dolor voluptatum assumenda, soluta laborum nobis,
        harum, est.
      </blockquote>
      <figcaption class="quote__cite">&mdash; Michael Green</figcaption>
    </figure>
  ))
  .add('quote--marks', () => (
    <figure class="quote quote--marks">
      <blockquote class="quote__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore
        dolores adipisci neque qui modi aliquam voluptates asperiores pariatur
        autem, eligendi sunt dolor voluptatum assumenda, soluta laborum nobis,
        harum, est.
      </blockquote>
      <figcaption class="quote__cite">&mdash; Michael Green</figcaption>
    </figure>
  ));
