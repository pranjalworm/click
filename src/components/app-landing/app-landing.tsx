import {
  h,
  Component,
  ComponentInterface,
  Listen,
  Element,
  Prop,
  Event,
  EventEmitter
} from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { ROUTES, ROUTE_NAME } from '../../services/route.service';


@Component({
  tag: 'app-landing',
  shadow: true
})
export class AppLanding implements ComponentInterface {

  @Prop() history: RouterHistory;
  @Element() host: HTMLElement;

  @Event({
    eventName: 'banner-loaded',
    composed: true,
    bubbles: true,
  }) bannerLoaded: EventEmitter<boolean>;

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
    this.history.push(`/gallery/${galleryType}`);
  }


  @Listen('section-title-clicked')
  sectionTitleClickHandler(event: CustomEvent) {

    const route = event.detail;

    if (route === ROUTE_NAME.PORTFOLIO) {
      this.openPortfolio();
    }
  }

  openPortfolio() {
    this.history.push(`/portfolio`);
  }


  render() {

    return [
      <stencil-route-title pageTitle={ROUTES[ROUTE_NAME.HOME].title}></stencil-route-title>,
      <div id="landing-root">
        <landing-banner></landing-banner>

        {/* landing-content will be loaded here after landing-banner has been loaded */}
      </div>
    ];
  }
}
