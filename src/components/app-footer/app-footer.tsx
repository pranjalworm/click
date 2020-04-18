import {
  h,
  Component,
  ComponentInterface,
  Element,
  Prop,
  Watch,
  State,
} from '@stencil/core';
import { RouteService, ROUTE_NAME } from '../../services/route.service';
import {
  RouterHistory,
  LocationSegments,
  injectHistory,
} from '@stencil/router';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true,
})
export class AppFooter implements ComponentInterface {

  @Element() el: HTMLStencilElement;
  @Prop() history: RouterHistory;
  @Prop() location: LocationSegments;

  @State() displayFooter: boolean = true;

  @Watch('location')
  locationChanged(newValue: LocationSegments, _oldValue: LocationSegments) {

    const showingImages = newValue.pathname.includes(ROUTE_NAME.VIEW_IMAGE);

    if (showingImages && this.displayFooter) {
      this.displayFooter = false;

    } else if (!this.displayFooter) {
      this.displayFooter = true;
    }
  }

  getFooterHTML() {

    let footerHTML = null;

    if (!this.displayFooter) {
      return footerHTML;
    }

    const aboutMeRoute = RouteService.getRoute(ROUTE_NAME.ABOUT_ME);

    footerHTML = (
      <div id='app-footer-root'>
        <div class='section copyright-div'>© Pranjal Dubey Photography</div>

        <div class='section'>
          <a href='https://www.instagram.com/pranjalworm'
            target='_blank'
            class='link'>
            instagram
          </a>

          <stencil-route-link url={aboutMeRoute.url as string} exact={true}>
            <span class='link'>about me</span>
          </stencil-route-link>
        </div>
      </div>
    );

    return footerHTML;
  }

  render() {

    return this.getFooterHTML();
  }
}

injectHistory(AppFooter);
