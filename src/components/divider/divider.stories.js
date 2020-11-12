import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Variant small', () => '<my-divider color="lighter" variant="small"></my-divider> <my-divider color="light" variant="small"></my-divider> <my-divider color="medium" variant="small"></my-divider>')
  .add('Variant medium', () => '<my-divider color="lighter" variant="medium"></my-divider> <my-divider color="light" variant="medium"></my-divider><my-divider color="medium" variant="medium"></my-divider>')
  .add('Knobs',() => {
  const knobTest = document.createElement('my-divider');
  knobTest.variant = text('variant', 'medium');
  knobTest.color = text('color', 'medium');

  return knobTest;
}
);
