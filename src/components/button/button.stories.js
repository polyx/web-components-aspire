import { storiesOf } from '@storybook/html';
import { withKnobs, text, button,select,boolean } from '@storybook/addon-knobs';

import readme from './readme.md';

// Create Knobs
const buttonTextKnob = (buttonText = "Some label", buttonLabel = "Name") =>
  text(buttonLabel, buttonText);

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
    "With knobs",
    () => {
        const div = document.createElement('div');
        div.className = 'wrapper';
        
        const buttonKnob = document.createElement('button');
        buttonKnob.value = text('Value', 'value');

        div.appendChild(buttonKnob);
        return div;
    }

    /*
    `
    <p>
      <button class = "buttonknob">${buttonTextKnob("hei"
      )}</button>
    </p>
  `
  */
  );
  

/*const storyOptions = {
    notes: {
      markdown: readme
    }
  };



storiesOf('Buttons', module)
//.addDecorator(withKnobs)
.add(
  'All Buttons', () => { 
      const buttonprimary = document.createElement('my-button');
      return buttonprimary;

  }, storyOptions)
.add('With knobs', () => {
    const buttontwo = document.createElement('my-button');
    return buttontwo;

}, storyOptions);*/
