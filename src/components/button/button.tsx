import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {

  render() {
    return (
    <div id = "containermain">
      <div id = "containercontained">
       <button class="buttondefprimary"> Primary </button>
       <button class="buttondefsecondary"> Secondary </button>
       <button class="buttondefdanger"> Danger </button>
       <button class="buttondefdisabled"> Disabled </button>
      </div>
      
      <div id = "containeroutlined">
        <button class="buttonoutprimary"> Primary</button>
      </div>

      <div id = "containerghost">
        <button class="buttonghoprimary"> Primary</button>
      </div>
    </div>
    
    );
  }

}
