/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyButton {
    'disabled': boolean;
    /**
    * The button or input type (usually submit)
    */
    'value': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface TestComponent {}
}

declare global {


  interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {}
  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement;
    new (): HTMLMyButtonElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLTestComponentElement extends Components.TestComponent, HTMLStencilElement {}
  var HTMLTestComponentElement: {
    prototype: HTMLTestComponentElement;
    new (): HTMLTestComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-button': HTMLMyButtonElement;
    'my-component': HTMLMyComponentElement;
    'test-component': HTMLTestComponentElement;
  }
}

declare namespace LocalJSX {
  interface MyButton {
    'disabled'?: boolean;
    /**
    * The button or input type (usually submit)
    */
    'value'?: string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface TestComponent {}

  interface IntrinsicElements {
    'my-button': MyButton;
    'my-component': MyComponent;
    'test-component': TestComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-button': LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'test-component': LocalJSX.TestComponent & JSXBase.HTMLAttributes<HTMLTestComponentElement>;
    }
  }
}


