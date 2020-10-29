import { Component, h } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {

  render() {
    return (
      <p>I'm testing.....</p>
    );
  }

}
