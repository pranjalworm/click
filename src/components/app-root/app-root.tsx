import { h, Component, ComponentInterface } from '@stencil/core';
import '@stencil/router';
import { Route, RouteService } from '../../services/routes.service';

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
    return (
      <div id="app-root">

        <app-header></app-header>

        <main>
          <stencil-router titleSuffix=" - Pranjal Dubey Photography">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route component="catch-all" />
            </stencil-route-switch>

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
            </stencil-route-switch>
          </stencil-router>
        </main>

        <app-footer></app-footer>
      </div>
    )
  }
}
