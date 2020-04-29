import {
  h,
  Component,
  ComponentInterface,
} from '@stencil/core';
import { CardListType } from '../../../global/interfaces';

@Component({
  tag: 'landing-content',
  styleUrl: 'landing-content.scss',
  shadow: true
})
export class LandingContent implements ComponentInterface {

  private cardListType = CardListType.Gallery;


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
