import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {


 // @Prop() color: string;

  @Prop() disabled: boolean;

  /**
   * The button or input type (usually submit)
   */

  @Prop() value: string;
  //@Prop() variant: string = 'default';



  render() {

    return
  }
}
