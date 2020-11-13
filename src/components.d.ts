/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
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
  interface MyDivider {
    'color': string;
    'variant': string;
  }
  interface TestComponent {}
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyDividerElement extends Components.MyDivider, HTMLStencilElement {}
  var HTMLMyDividerElement: {
    prototype: HTMLMyDividerElement;
    new (): HTMLMyDividerElement;
  };

  interface HTMLTestComponentElement extends Components.TestComponent, HTMLStencilElement {}
  var HTMLTestComponentElement: {
    prototype: HTMLTestComponentElement;
    new (): HTMLTestComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'my-divider': HTMLMyDividerElement;
    'test-component': HTMLTestComponentElement;
  }
}

declare namespace LocalJSX {
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
  interface MyDivider {
    'color'?: string;
    'variant'?: string;
  }
  interface TestComponent {}

  interface IntrinsicElements {
    'my-component': MyComponent;
    'my-divider': MyDivider;
    'test-component': TestComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'my-divider': LocalJSX.MyDivider & JSXBase.HTMLAttributes<HTMLMyDividerElement>;
      'test-component': LocalJSX.TestComponent & JSXBase.HTMLAttributes<HTMLTestComponentElement>;
    }
  }
}


