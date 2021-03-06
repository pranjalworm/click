import { h, Component, ComponentInterface } from '@stencil/core';
import { ROUTES, RouteService, ROUTE_NAME } from '../../services/route.service';

@Component({
  tag: 'page-not-found',
  styleUrl: 'page-not-found.scss',
  shadow: true
})
export class PageNotFound implements ComponentInterface {

  render() {

    const landingPageRoute = RouteService.getRoute(ROUTE_NAME.HOME);

    return [
      <stencil-route-title pageTitle={ROUTES[ROUTE_NAME.PAGE_NOT_FOUND].title}></stencil-route-title>,
      <div id='page-not-found-root'>

        <div id='banner404'>
          <div id='oops'>Oops!</div>
          <div id='page-not-found'>Page not found</div>

          <div id='home-link'>
            <stencil-route-link
              url={landingPageRoute.url[0]}
              exact={true}>
              <span>Go to home &gt;&gt;</span>
            </stencil-route-link>
          </div>
        </div>

      </div>
    ]
  }
}