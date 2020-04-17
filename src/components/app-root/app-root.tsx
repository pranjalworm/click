import { h, Component, ComponentInterface } from '@stencil/core';
import '@stencil/router';
import { Route, RouteService, ROUTE_NAME } from '../../services/route.service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot implements ComponentInterface {

  private routes: Route[] = [];

  constructor() {
    this.routes = RouteService.getAllRoutes();
  }


  render() {

    const currentPathname = window.location.pathname;

    let appHeader = null;
    let appFooter = null;

    if (currentPathname !== '/' + ROUTE_NAME.VIEW_IMAGE) {
      appHeader = <app-header></app-header>;
      appFooter = <app-footer></app-footer>;
    }

    return (
      <div id="app-root">

        {appHeader}

        <main>
          <stencil-router titleSuffix=" - Pranjal Dubey Photography">

            <stencil-route-switch scrollTopOffset={0}>
              {
                this.routes.map((route: Route) => {
                  if (route.exact === true) {
                    return (
                      <stencil-route
                        url={route.url}
                        component={route.component}
                        exact={true} />)
                  }

                  return (
                    <stencil-route
                      url={route.url}
                      component={route.component}>
                    </stencil-route>
                  )
                })
              }

              <stencil-route component="catch-all" />
            </stencil-route-switch>
          </stencil-router>
        </main>

        {appFooter}
      </div>
    )
  }
}
