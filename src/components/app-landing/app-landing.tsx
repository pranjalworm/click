import {
  h,
  Component,
  ComponentInterface,
  Listen,
  Element,
  Prop,
} from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { GalleryType } from '../../global/interfaces';


@Component({
  tag: 'app-landing',
  shadow: true
})
export class AppLanding implements ComponentInterface {

  @Prop() history: RouterHistory;
  @Element() host: HTMLElement;
  private landingRootRef: HTMLElement = null;

  /**
   * waiting for the banner-loaded event, only after that the rest of the 
   * content will be loaded
   */
  @Listen('banner-loaded')
  bannerLoadedHandler() {

    this.landingRootRef = this.host.shadowRoot.getElementById('landing-root');

    const landingContentRef = document.createElement('landing-content');
    this.landingRootRef.appendChild(landingContentRef);
  }


  @Listen('card-link-clicked')
  cardLinkClickedHandler(event: CustomEvent) {

    const galleryType = event.detail;
    this.openGallery(galleryType);
  }


  openGallery(galleryType: GalleryType) {

    this.history.push(`/gallery/${galleryType}`);
  }

  render() {

    return (
      <div id="landing-root">
        <landing-banner></landing-banner>

        {/* landing-content will be loaded here after landing-banner has been loaded */}
      </div>
    );
  }
}
