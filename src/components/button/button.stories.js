import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';
import { withKnobs, text, button,select,boolean, color} from '@storybook/addon-knobs';

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
    'With knobs',
    () => {
        const myButton = document.createElement('button');
        myButton.innerHTML = text('Label','Some label');
        myButton.style.cssText = `
          background-color: #007079;
          height: 2.5em;
          width: 7em;
          color: white;
          font-size: 0.875rem;
          border-radius: 0.25rem;
          border: none;
          margin-left: 2rem;
          margin-bottom: 2rem;
        `;


  return myButton;
    });
     /*()=> {
        const buttonKnob = document.createElement('button');
        buttonKnob.value = text('Value', '');
     
        return buttonKnob;
     })
*/
    /*
    `
    <p>
      <button class = "buttonknob">${buttonTextKnob("hei"
      )}</button>
    </p>
  `
  */
  
  

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
