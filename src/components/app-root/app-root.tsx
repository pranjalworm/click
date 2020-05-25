import {
  h,
  Component,
  ComponentInterface,
  Listen,
  Element
} from '@stencil/core';
import '@stencil/router';
import { Route, RouteService } from '../../services/route.service';

const TOAST_VISIBLE_TIMEOUT = 3000;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot implements ComponentInterface {

  @Element() host: HTMLElement;

  private routes: Route[] = [];
  private appToastRef: HTMLAppToastElement = null;

  constructor() {

    this.routes = RouteService.getAllRoutes();
  }

  @Listen('show-toast')
  showToastHandler(event: CustomEvent) {

    const toastConfig = event.detail;

    if (!toastConfig.message) return;

    this.appToastRef.toastConfig = toastConfig;
    this.appToastRef.style.display = 'flex';

    setTimeout(() => {
      this.appToastRef.style.display = 'none';
    }, TOAST_VISIBLE_TIMEOUT);
  }


  componentDidLoad() {

    this.appToastRef = this.host.shadowRoot.querySelector('app-toast');
  }


  render() {

    return (
      <div id="app-root">

        <app-toast></app-toast>

        <app-header></app-header>

        <main>
          <stencil-router>

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

              <stencil-route component="page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <app-footer></app-footer>

      </div>
    )
  }
}
