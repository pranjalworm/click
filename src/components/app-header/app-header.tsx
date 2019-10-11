import { h, Component, ComponentInterface } from '@stencil/core';
import { RouteService, Route } from '../../services/routes.service';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true
})
export class AppHeader implements ComponentInterface {

  private siteHeading = 'pranjal dubey';
  private menuOptions = null;

  constructor() {
    this.menuOptions = RouteService.getHeaderRoutes();
  }

  render() {
    return (
      <header id="site-header">

        <div id="site-heading">
          {this.siteHeading}
        </div>

        <div id="menu">
          {
            this.menuOptions.map((menuOption: Route) => {

              if (menuOption.exact === true) {
                return (
                  <stencil-route-link
                    url={menuOption.url}
                    exact={true}>
                    <span class="menu-option">{menuOption.title}</span>
                  </stencil-route-link>
                )
              }

              return (
                <stencil-route-link
                  url={menuOption.url}
                  urlMatch={menuOption.urlMatch}>
                  <span class="menu-option">{menuOption.title}</span>
                </stencil-route-link>
              )
            })
          }
        </div>

      </header>
    );
  }
}