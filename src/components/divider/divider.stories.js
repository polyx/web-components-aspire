import { storiesOf } from '@storybook/html';
import { withKnobs,  select} from '@storybook/addon-knobs';


storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Variant small', () => 'text <my-divider color="lighter" variant="small"></my-divider> text <my-divider color="light" variant="small"></my-divider> text <my-divider color="medium" variant="small"></my-divider> text')
  .add('Variant medium', () => 'text <my-divider color="lighter" variant="medium"></my-divider> text <my-divider color="light" variant="medium"></my-divider> text <my-divider color="medium" variant="medium"></my-divider> text')
  .add('Knobs',() => {
  const knobTest = document.createElement('div');
  const myDivider = document.createElement('my-divider');
  myDivider.variant = select('Variant', ['small', 'medium']);
  myDivider.color = select('Color', ['medium','light','lighter']);
  const text1 = document.createTextNode("This is some text");
  const text2 = document.createTextNode("This is some more text");
  knobTest.appendChild(text1);
  knobTest.appendChild(myDivider);
  knobTest.appendChild(text2);

  return knobTest;
}
);
