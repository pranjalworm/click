import {
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter
} from '@stencil/core';
import ImageService from '../../../services/image.service';
import { Image } from '../../../global/interfaces';


@Component({
  tag: 'landing-banner',
  styleUrl: 'landing-banner.scss',
  shadow: true
})
export class LandingBanner implements ComponentInterface {

  @Event({
    eventName: 'banner-loaded'
  }) bannerLoaded: EventEmitter;

  private bannerImage: Image = null;


  componentWillLoad() {

    this.bannerImage = ImageService.getBannerImage();
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
