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
    const svgError = `
      <svg viewBox="0 0 24 24" width="16px" height="16px">
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z"
        ></path>
      </svg>`;

    const svgWarning = `
      <svg viewBox="0 0 24 24" width="16px" height="16px">
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M23 21.5l-11-19-11 19h22zm-12-3v-2h2v2h-2zm0-4h2v-4h-2v4z"
        ></path>
      </svg>`;

    const svgSuccess = `
      <svg viewBox="0 0 24 24" width="16px" height="16px">
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M9 22h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.58 8.59C7.22 8.95 7 9.45 7 10v10c0 1.1.9 2 2 2zm0-12l4.34-4.34L12 11h9v2l-3 7H9V10zm-4 0H1v12h4V10z"
        ></path>
      </svg>`;

    const div = document.createElement('div');
    div.className = 'wrapper';

    const error = document.createElement('text-field');
    error.placeholder = 'Placeholder text Placeholder text Placeholder text';
    error.label = 'Error';
    error.meta = 'Meta';
    error.helpertext = 'Helper Text';
    error.variant = 'error';
    error.helpericon = svgError;

    div.appendChild(error);

    const warning = document.createElement('text-field');
    warning.placeholder = 'Placeholder text Placeholder text Placeholder text';
    warning.label = 'Warning';
    warning.meta = 'Meta';
    warning.helpertext = 'Helper Text';
    warning.variant = 'warning';
    warning.helpericon = svgWarning;

    div.appendChild(warning);

    const success = document.createElement('text-field');
    success.placeholder = 'Placeholder text Placeholder text Placeholder text';
    success.label = 'Success';
    success.meta = 'Meta';
    success.helpertext = 'Helper Text';
    success.variant = 'success';
    success.helpericon = svgSuccess;

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
