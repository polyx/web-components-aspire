import { storiesOf } from '@storybook/html';
import { withKnobs,  select} from '@storybook/addon-knobs';

import readme from './readme.md';

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Variant small', () => 'text <esp-divider color="lighter" variant="small"></esp-divider> text <esp-divider color="light" variant="small"></esp-divider> text <esp-divider color="medium" variant="small"></esp-divider> text',
  {
      notes: {
        markdown: readme,
      },
    })
  .add('Variant medium', () => 'text <esp-divider color="lighter" variant="medium"></esp-divider> text <esp-divider color="light" variant="medium"></esp-divider> text <esp-divider color="medium" variant="medium"></esp-divider> text',
  {
      notes: {
        markdown: readme,
      },
    })
  .add('Knobs',() => {
  const knobTest = document.createElement('div');
  const myDivider = document.createElement('esp-divider');
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
