import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

const types = ['text', 'search', 'password', 'email', 'number'];
const variants = ['error', 'warning', 'success', 'default'];

storiesOf('Text field', module)
  .addDecorator(withKnobs)
  .add('Types', () => {
    const div = document.createElement('div');
    div.className = 'wrapper';

    const text = document.createElement('text-field');
    text.placeholder = 'Placeholder text';
    text.label = 'Text';
    text.helpertext = 'Helper text';

    div.appendChild(text);

    const number = document.createElement('text-field');
    number.type = 'number';
    number.placeholder = 'Placeholder text';
    number.label = 'Number';
    number.meta = 'pt. tonn';
    number.helpertext = 'Helper text';

    div.appendChild(number);

    const search = document.createElement('text-field');
    search.type = 'search';
    search.placeholder = 'Placeholder text';
    search.label = 'Search';
    search.meta = 'Meta';
    search.helpertext = 'Helper Text';

    div.appendChild(search);

    const password = document.createElement('text-field');
    password.type = 'password';
    password.placeholder = 'Placeholder text';
    password.label = 'Password';
    password.meta = 'Meta';
    password.helpertext = 'Helper Text';

    div.appendChild(password);

    const email = document.createElement('text-field');
    email.type = 'email';
    email.placeholder = 'Placeholder text';
    email.label = 'Email';
    email.meta = 'Meta';
    email.helpertext = 'Helper Text';

    div.appendChild(email);

    return div;
  })
  .add('Other', () => {
    const div = document.createElement('div');
    div.className = 'wrapper';

    const multiline = document.createElement('text-field');
    multiline.placeholder = 'Placeholder text';
    multiline.label = 'Multline';
    multiline.meta = 'Meta';
    multiline.helpertext = 'Helper Text';
    multiline.multiline = true;

    div.appendChild(multiline);

    const disabled = document.createElement('text-field');

    disabled.placeholder = 'Placeholder text';
    disabled.label = 'Disabled';
    disabled.meta = 'Meta';
    disabled.helpertext = 'Helper Text';
    disabled.disabled = true;

    div.appendChild(disabled);

    return div;
  })
  .add('Variants', () => {

    const div = document.createElement('div');
    div.className = 'wrapper';

    const error = document.createElement('text-field');
    error.placeholder = 'Placeholder text Placeholder text Placeholder text';
    error.label = 'Error';
    error.meta = 'Meta';
    error.helpertext = 'Helper Text';
    error.variant = 'error';

    div.appendChild(error);

    const warning = document.createElement('text-field');
    warning.placeholder = 'Placeholder text Placeholder text Placeholder text';
    warning.label = 'Warning';
    warning.meta = 'Meta';
    warning.helpertext = 'Helper Text';
    warning.variant = 'warning';

    div.appendChild(warning);

    const success = document.createElement('text-field');
    success.placeholder = 'Placeholder text Placeholder text Placeholder text';
    success.label = 'Success';
    success.meta = 'Meta';
    success.helpertext = 'Helper Text';
    success.variant = 'success';

    div.appendChild(success);

    return div;
  })
  .add(
    'With knobs',
    () => {
      const div = document.createElement('div');
      div.className = 'wrapper';

      const withKnobs = document.createElement('text-field');
      withKnobs.variant = select('Variant', variants, variants[0]);
      withKnobs.type = select('Type', types, types[0]);
      withKnobs.label = text('Label', 'label');
      withKnobs.meta = text('Meta', 'meta');
      withKnobs.placeholder = text('Placeholder', 'placeholder');
      withKnobs.helpertext = text('Helper text', 'Helper text');
      withKnobs.multiline = boolean('Multiline', false);
      withKnobs.disabled = boolean('Disabled', false);

      div.appendChild(withKnobs);
      return div;
    },
    {
      notes: {
        markdown: readme,
      },
    },
  );
