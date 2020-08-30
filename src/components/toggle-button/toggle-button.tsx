import { h, Component, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';

export interface ToggleEvent {
  buttonId: string;
  value: boolean;
}

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.scss',
  shadow: true,
})
export class ToggleButton implements ComponentInterface {

  @Prop() buttonId: string;

  @Prop() label: string = 'Label text';

  @Prop() checked = false;

  @Event({
    eventName: 'toggle-clicked'
  }) toggleClicked: EventEmitter;

  componentWillLoad() {
    if (!this.buttonId) {
      throw new Error('ToggleButton: buttonId not provided!');
    }
  }

  private toggleChangeHandler(event: any) {

    const value = event.target.checked;

    const toggleEvent: ToggleEvent = {
      buttonId: this.buttonId,
      value
    }

    this.toggleClicked.emit(toggleEvent);
  }

  render() {

    let radioButton = <input type="checkbox" id="toggleButton" onChange={(event) => this.toggleChangeHandler(event)} />;

    if (this.checked) {
      radioButton = <input type="checkbox" checked id="toggleButton" onChange={(event) => this.toggleChangeHandler(event)} />;
    }

    return (
      <div class="control">
        <span>{this.label}</span>
        <label class="switch">
          {radioButton}
          <div class="slider round"></div>
        </label>
      </div>
    )
  }
}