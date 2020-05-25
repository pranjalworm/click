import {
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  getAssetPath
} from '@stencil/core';
import PhotographService from '../../../services/photograph.service';
import { Photograph, StorageKeys } from '../../../global/interfaces';
import { Utils } from '../../../global/utils';
import StorageService from '../../../services/storage.service';


@Component({
  tag: 'landing-banner',
  styleUrl: 'landing-banner.scss',
  shadow: true,
  assetsDir: '../../../assets'
})
export class LandingBanner implements ComponentInterface {

  @Event({
    eventName: 'banner-loaded',
    bubbles: true,
    composed: true
  }) bannerLoaded: EventEmitter;

  private bannerImage: Photograph = null;


  componentWillLoad() {

    this.getBannerImage();
  }


  // tells the app-landing component that it has finished loading
  componentDidLoad() {

    this.bannerLoaded.emit();
  }


  private getBannerImage() {

    const viewingOnMobile = Utils.isMobileScreen();

    let imageIndex: any = StorageService.getItem(StorageKeys.LandingBannerIndex);

    if (imageIndex === undefined) {
      StorageService.setItem(StorageKeys.LandingBannerIndex, 0);
      imageIndex = 0;

    } else {

      if (++imageIndex > 4) {
        imageIndex = 0;
      }

      StorageService.setItem(StorageKeys.LandingBannerIndex, imageIndex);
    }

    this.bannerImage = PhotographService.getLandingBannerImage(viewingOnMobile, imageIndex);
  }


  render() {

    const imageSrc = getAssetPath(`../../../assets/images/${this.bannerImage.url}`);

    return (

      <div id="landing-section">

        <div id="banner-image">
          <img src={imageSrc} alt={this.bannerImage.alt} />
        </div>

        <div id="banner-caption">
          <span>{this.bannerImage.caption}</span>
        </div>

      </div>

    );
  }
}
