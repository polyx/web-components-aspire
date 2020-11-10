import { storiesOf } from '@storybook/html';
import { withKnobs, text, button } from '@storybook/addon-knobs';

import readme from './readme.md';

storiesOf('Buttons', module)
//.addDecorator(withKnobs)
.add(
  'All Buttons', () => { 
      const buttonprimary = document.createElement('my-button');
      return buttonprimary;
  /*{
    notes: {
      markdown: readme,
    },
  }*/
  });
/*.add('Button 2', () => 
    `<my-button>Voila</my-button>`
  //const knobTest = document.createElement('button');
  //knobTest.first = text('first', 'Ola');
  //knobTest.middle = text('middle', 'Test');
  //knobTest.last = text('last', 'Nordman');

 // return knobTest;*/

