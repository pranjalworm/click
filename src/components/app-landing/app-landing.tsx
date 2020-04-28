import {
  h,
  Component,
  ComponentInterface,
  Listen,
  Element,
  Prop,
} from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { RouteService } from '../../services/route.service';


@Component({
  tag: 'app-landing',
  shadow: true
})
export class AppLanding implements ComponentInterface {

  @Prop() history: RouterHistory;
  @Element() host: HTMLElement;
  private landingRootRef: HTMLElement = null;
  private bodyRef: HTMLElement = null;

  /**
   * waiting for the banner-loaded event, only after that the rest of the 
   * content will be loaded
   */
  @Listen('banner-loaded')
  bannerLoadedHandler() {

    const landingContentRef = document.createElement('landing-content');
    this.landingRootRef.appendChild(landingContentRef);
  }

  @Listen('content-loaded')
  contentLoadedHandler() {
    this.scrollToLastPosition();
  }


  // TODO: write logic to extract image index on the basis of image URL
  @Listen('wrapper-image-clicked')
  imageClickHandler(event: CustomEvent) {

    const scrollTop = this.bodyRef.scrollTop;

    // console.log(`arya > app-landing > scrollTop: ${scrollTop}`)

    RouteService.lastScrollTop = scrollTop;

    const index = event.detail;

    this.history.push(`/view-image/${index}`);
  }


  // scroll to the last position at which the user navigated to another page
  scrollToLastPosition() {

    const scrollTop = RouteService.lastScrollTop;

    // console.log(`arya > app-landing > scrollToLastPosition > scrollTop: ${scrollTop}`)

    if (scrollTop === undefined || scrollTop === null) return;

    this.bodyRef.scrollTo(0, scrollTop);
  }


  componentDidLoad() {

    this.bodyRef = document.querySelector('body');
    this.landingRootRef = this.host.shadowRoot.getElementById('landing-root');
  }


  render() {

    return (
      <div id="landing-root">
        {/* landing-banner will be loaded first */}
        <landing-banner></landing-banner>

        {/* landing-content will be loaded after landing-banner has been loaded */}
      </div>
    );
  }
}
