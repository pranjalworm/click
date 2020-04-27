import {
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter
} from '@stencil/core';
import PhotographService from '../../../services/photograph.service';
import { Photograph } from '../../../global/interfaces';
import { Utils } from '../../../global/utils';


@Component({
  tag: 'landing-banner',
  styleUrl: 'landing-banner.scss',
  shadow: true
})
export class LandingBanner implements ComponentInterface {

  @Event({
    eventName: 'banner-loaded'
  }) bannerLoaded: EventEmitter;

  private bannerImage: Photograph = null;


  componentWillLoad() {

    const viewingOnMobile = Utils.isMobileScreen();

    const imageIndex = Utils.getRandomNumber(0, 4);

    this.bannerImage = PhotographService.getBannerImage(viewingOnMobile, imageIndex);
  }


  componentDidLoad() {

    // tells the app-landing component that it has finished loading
    this.bannerLoaded.emit();
  }


  render() {

    return (

      <div id="landing-section">

        <div id="banner-image">
          <img src={this.bannerImage.url} alt={this.bannerImage.alt} />
        </div>

        <div id="banner-caption">
          <span>{this.bannerImage.caption}</span>
        </div>

      </div>

    );
  }
}
