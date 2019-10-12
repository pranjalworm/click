import { h, Component, ComponentInterface } from '@stencil/core';
import { ROUTE_NAMES, RouteService } from '../../services/routes.service';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true
})
export class AppFooter implements ComponentInterface {

  render() {

    const bookAShootRoute = RouteService.getRoute(ROUTE_NAMES.bookAShoot);
    const aboutMeRoute = RouteService.getRoute(ROUTE_NAMES.aboutMe);

    return (
      <div id="app-footer-root">

        <div class="section copyright-container">
          © Pranjal Dubey Photography
        </div>

        <div class="section">

          <a target="_blank" href="https://www.instagram.com/pranjalworm" class="link">
            instagram
          </a>

          <stencil-route-link
            url={aboutMeRoute.url}
            exact={true}>
            <span class="link">
              about me
            </span>
          </stencil-route-link>

          <stencil-route-link
            url={bookAShootRoute.url}
            exact={true}>
            <span id="book-a-shoot-button" class="link">
              book a shoot
            </span>
          </stencil-route-link>


        </div>

      </div>
    )
  }
}