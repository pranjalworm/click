import { h, Component, ComponentInterface } from '@stencil/core';
import { RouteService, ROUTE_NAME } from '../../services/route.service';

@Component({
  tag: 'page-not-found',
  styleUrl: 'page-not-found.scss',
  shadow: true
})
export class PageNotFound implements ComponentInterface {

  render() {

    const landingPageRoute = RouteService.getRoute(ROUTE_NAME.HOME);

    return (
      <div id='page-not-found-root'>

        <div id='banner404'>
          <div id='oops'>Oops!</div>
          <div id='page-not-found'>Page not found</div>

          <div id='home-link'>
            <stencil-route-link
              url={landingPageRoute.url[0]}
              exact={true}>
              <span>Go to home >></span>
            </stencil-route-link>
          </div>
        </div>

      </div>
    )
  }
}