import { storiesOf } from '@storybook/html';

storiesOf('Divider', module)

  .add('Variant small', () => '<my-divider color="lighter" variant="small"></my-divider> <my-divider color="light" variant="small"></my-divider> <my-divider color="medium" variant="small"></my-divider>'
  )
  .add('Variant medium', () => '<my-divider color="lighter" variant="medium"></my-divider> <my-divider color="light" variant="medium"></my-divider><my-divider color="medium" variant="medium"></my-divider>');
