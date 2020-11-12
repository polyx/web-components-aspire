import { storiesOf } from '@storybook/html';
import { withKnobs,  select} from '@storybook/addon-knobs';


storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Variant small', () => '<my-divider color="lighter" variant="small"></my-divider> <my-divider color="light" variant="small"></my-divider> <my-divider color="medium" variant="small"></my-divider>')
  .add('Variant medium', () => '<my-divider color="lighter" variant="medium"></my-divider> <my-divider color="light" variant="medium"></my-divider><my-divider color="medium" variant="medium"></my-divider>')
  .add('Knobs',() => {
  const knobTest = document.createElement('my-divider');
  knobTest.variant = select('Variant', ['small', 'medium']);
  knobTest.color = select('Color', ['medium','light','lighter']);

  return knobTest;
}
);
