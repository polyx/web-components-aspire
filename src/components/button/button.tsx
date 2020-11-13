import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {


  private colors =  ['primary', 'secondary', 'danger', 'disabled'];

  @Prop() color: string = 'primary';
  @Prop() value: string = 'Some Label'
  

  private generateColor():string{
    if(this.colors.indexOf(this.color)<0){
        this.color = 'primary';
        }
    
    return this.color + '-button-color'
  }

  render() {

    return(
      <div class = 'container'>
      <button class={this.generateColor()}
      >{this.value}</button>
      </div>
      
    )
  }
}
