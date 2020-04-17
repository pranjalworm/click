import { h, Component, ComponentInterface } from '@stencil/core';
import { ROUTE_NAME, RouteService } from '../../services/route.service';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true
})
export class AppFooter implements ComponentInterface {

  render() {

    // const bookAShootRoute = RouteService.getRoute(ROUTE_NAME.BOOK_A_SHOOT);
    const aboutMeRoute = RouteService.getRoute(ROUTE_NAME.ABOUT_ME);

    return (
      <div id="app-footer-root">

        <div class="section copyright-div">
          © Pranjal Dubey Photography
        </div>

        <div class="section">

          <a target="_blank" href="https://www.instagram.com/pranjalworm" class="link">
            instagram
          </a>

          <stencil-route-link
            url={aboutMeRoute.url as string}
            exact={true}>
            <span class="link">
              about me
            </span>
          </stencil-route-link>

          {/* <stencil-route-link
            url={bookAShootRoute.url}
            exact={true}>
            <span id="book-a-shoot-button" class="link">
              book a shoot
            </span>
          </stencil-route-link> */}


        </div>

      </div>
    )
  }
}