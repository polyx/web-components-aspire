import { storiesOf } from '@storybook/html';
import { withKnobs,  select} from '@storybook/addon-knobs';

import readme from './readme.md';

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Variant small', () => 'text <eds-divider color="lighter" variant="small"></eds-divider> text <eds-divider color="light" variant="small"></eds-divider> text <eds-divider color="medium" variant="small"></eds-divider> text',
  {
      notes: {
        markdown: readme,
      },
    })
  .add('Variant medium', () => 'text <eds-divider color="lighter" variant="medium"></eds-divider> text <eds-divider color="light" variant="medium"></eds-divider> text <eds-divider color="medium" variant="medium"></eds-divider> text',
  {
      notes: {
        markdown: readme,
      },
    })
  .add('Knobs',() => {
  const knobTest = document.createElement('div');
  const myDivider = document.createElement('eds-divider');
  myDivider.variant = select('Variant', ['small', 'medium']);
  myDivider.color = select('Color', ['medium','light','lighter']);
  const text1 = document.createTextNode("This is some text");
  const text2 = document.createTextNode("This is some more text");
  knobTest.appendChild(text1);
  knobTest.appendChild(myDivider);
  knobTest.appendChild(text2);

  return knobTest;
},
{
      notes: {
        markdown: readme,
      },
    }

);
