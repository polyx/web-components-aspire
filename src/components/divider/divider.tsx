import {Component, Prop, h} from '@stencil/core'

@Component({
tag:'eds-divider',
styleUrl: 'divider.css',
shadow: true
})
export class Divider{

  private colors =  ['lighter', 'light', 'medium'];
  private variants = ['small', 'medium'];
  @Prop() color: string = 'medium';
  @Prop() variant: string = 'medium';

  private generateClassName():string{
    if(this.variants.indexOf(this.variant)<0){
    this.variant = 'medium';
    }
    if(this.colors.indexOf(this.color)<0){
      console.log('changed size')
        this.color = 'medium';
        }
    return this.variant + '-divider-color-' + this.color
  }
  render(){
    return(
      <div class = 'container'>
      <hr class={this.generateClassName()} />
      </div>
    )
  }
}
