import {
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter
} from '@stencil/core';
import { CardListType } from '../../../global/interfaces';

@Component({
  tag: 'landing-content',
  styleUrl: 'landing-content.scss',
  shadow: true
})
export class LandingContent implements ComponentInterface {

  private cardListType = CardListType.Gallery;


  @Event({
    eventName: 'content-loaded'
  }) contentLoaded: EventEmitter;


  componentDidLoad() {

    this.contentLoaded.emit();
  }


  render() {

    return (

      <div id="landing-content-root">
        {
          <card-list card-list-type={this.cardListType}></card-list>
        }
      </div>

    );
  }
}
