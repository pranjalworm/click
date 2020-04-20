import {
  h,
  Component,
  ComponentInterface,
  Listen,
  Element,
  Prop,
} from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'app-landing',
  styleUrl: 'app-landing.scss',
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
  loadContent() {

    const landingContentRef = document.createElement('landing-content');
    this.landingRootRef.appendChild(landingContentRef);
  }

  @Listen('image-clicked')
  imageClickHandler(event: CustomEvent) {

    const index = event.detail;

    this.history.push(`/view-image/${index}`);
  }


  componentDidLoad() {

    this.landingRootRef = this.host.shadowRoot.getElementById('landing-root');
    const landingBannerRef = document.createElement('landing-banner');
    this.landingRootRef.appendChild(landingBannerRef);
  }


  render() {

    return (
      <div id="landing-root">
        {/* landing-banner will be loaded first */}

        {/* landing-content will be loaded after landing-banner has been loaded */}
      </div>
    );
  }
}
