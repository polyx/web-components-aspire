import { storiesOf } from '@storybook/html';
import { withKnobs, text, button,select,boolean, color} from '@storybook/addon-knobs';

import readme from './readme.md';

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .add(
    "All Buttons",
    () => `
    <p>
      <button class = "buttondefprimary">Primary</button>
      <button class = "buttondefsecondary">Secondary</button>
      <button class = "buttondefdanger">Danger</button>
      <button class = "buttondefdisabled">Disabled</button>
    </p>

    <p>
      <button class = "buttonoutprimary">Primary</button>
      <button class = "buttonoutsecondary">Secondary</button>
      <button class = "buttonoutdanger">Danger</button>
      <button class = "buttonoutdisabled">Disabled</button>
    </p>

    <p>
      <button class = "buttonghoprimary">Primary</button>
      <button class = "buttonghosecondary">Secondary</button>
      <button class = "buttonghodanger">Danger</button>
      <button class = "buttonghodisabled">Disabled</button>
    </p>
  `
  )
   
  .add(
    'With knobs',
    () => {
        const myButton = document.createElement('my-button');
        myButton.value = text('Label','Some label');
        myButton.color = select('Color', ['primary','secondary','danger', 'disabled']);

  return myButton;
  },
  {
  notes: {
        markdown: readme,
    },
  }
  );

