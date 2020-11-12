import { Component, State, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'text-field',
  styleUrl: 'text-field.css',
  shadow: true,
})
export class TextField {
  @State() focus: boolean;

  @Prop() label: string = '';
  @Prop() meta: string = '';
  @Prop() placeholder: string = '';
  @Prop() helpertext: string = '';
  @Prop() variant: string = 'default';
  @Prop() type: string = 'text';
  @Prop() multiline: boolean = false;
  @Prop({ reflectToAttr: true }) disabled: boolean = false;
  @Prop() helpericon: string = undefined;

  render() {
    return (
      <Host>
        <div class={`main ${this.variant}`}>
          <label class="label">
            <p>{this.label}</p>
            <p>{this.meta}</p>
          </label>
          <div class="input-wrapper">
            {this.multiline ? (
              <textarea
                class={this.focus ? 'input focus' : 'input'}
                placeholder={this.placeholder}
                disabled={this.disabled}
                onFocus={() => (this.focus = true)}
                onBlur={() => (this.focus = false)}
              />
            ) : (
              <input
                class={this.focus ? 'input focus' : 'input'}
                placeholder={this.placeholder}
                disabled={this.disabled}
                type={this.type}
                onFocus={() => (this.focus = true)}
                onBlur={() => (this.focus = false)}
              />
            )}
          </div>
          <div class={this.focus ? 'helper focus' : 'helper'}>
            {this.helpericon && (
              <div
                class="svg"
                innerHTML={this.helpericon}
              />
            )}
            <p class={`helper-text${this.disabled ? ' disabled' : ''}`}>{this.helpertext}</p>
            {/* {this.helpericon && this.helpericon} <p class={`helper-text${this.disabled ? ' disabled' : ''}`}>{this.helpertext}</p> */}
          </div>
        </div>
      </Host>
    );
  }
}
