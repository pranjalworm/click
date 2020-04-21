import {
  h,
  Component,
  ComponentInterface,
  State,
} from '@stencil/core';
import { RouteService, Route, ROUTE_NAME } from '../../services/route.service';
import { StoreService, StoreProps } from '../../services/store.service';


@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
})
export class AppHeader implements ComponentInterface {

  @State() displayHeader = true;

  private siteHeading = 'pranjal dubey';
  private menuOptions = null;


  componentWillLoad() {
    this.menuOptions = RouteService.getHeaderRoutes();
    this.registerListener();
  }

  registerListener() {

    StoreService.store.onChange(StoreProps.ViewingImage, (value: boolean) => {

      this.displayHeader = !value;
    })
  }


  render() {

    const landingPageRoute = RouteService.getRoute(ROUTE_NAME.HOME);

    return (
      <header id='app-header-root' style={{ 'display': this.displayHeader ? 'flex' : 'none' }}>
        <stencil-route-link url={landingPageRoute.url[0]}>
          <div id='app-heading'>{this.siteHeading}</div>
        </stencil-route-link>

        <div id='menu'>
          {this.menuOptions.map((menuOption: Route) => {
            return (
              <stencil-route-link
                url={(Array.isArray(menuOption.url)
                  ? menuOption.url[0]
                  : menuOption.url) as string}
                urlMatch={menuOption.urlMatch}
                exact={true}>
                <span class='menu-option'>{menuOption.title}</span>
              </stencil-route-link>
            );
          })}
        </div>
      </header>
    )
  }
}
