import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

import readme from './readme.md';

storiesOf('My Component', module)
.addDecorator(withKnobs)
.add(
  'Default',
  () =>
    '<my-component first="Millie" middle="Bobby" last="Brown"></my-component>',
  {
    notes: {
      markdown: readme,
    },
  }
)
.add('Knobs',
() => {
  const knobTest = document.createElement('my-component');
  knobTest.first = text('first', 'Ola');
  knobTest.middle = text('middle', 'Test');
  knobTest.last = text('last', 'Nordman');

  return knobTest;
}
);
