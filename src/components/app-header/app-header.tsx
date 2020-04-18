import {
  h,
  Component,
  ComponentInterface,
  Element,
  Prop,
  Watch,
  State,
} from '@stencil/core';
import { RouteService, Route, ROUTE_NAME } from '../../services/route.service';
import {
  RouterHistory,
  LocationSegments,
  injectHistory,
} from '@stencil/router';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
})
export class AppHeader implements ComponentInterface {

  @Element() el: HTMLStencilElement;
  @Prop() history: RouterHistory;
  @Prop() location: LocationSegments;

  @State() displayHeader: boolean = true;

  private siteHeading = 'pranjal dubey';
  private menuOptions = null;

  @Watch('location')
  locationChanged(newValue: LocationSegments, _oldValue: LocationSegments) {

    const showingImages = newValue.pathname.includes(ROUTE_NAME.VIEW_IMAGE);

    if (showingImages && this.displayHeader) {
      this.displayHeader = false;

    } else if (!this.displayHeader) {
      this.displayHeader = true;
    }
  }


  constructor() {
    this.menuOptions = RouteService.getHeaderRoutes();
  }


  getHeaderHTML() {

    let headerHTML = null;

    if (!this.displayHeader) {
      return headerHTML;
    }

    const landingPageRoute = RouteService.getRoute(ROUTE_NAME.HOME);

    headerHTML = (
      <header id='app-header-root'>
        <stencil-route-link url={landingPageRoute.url[0]}>
          <div id='app-heading'>{this.siteHeading}</div>
        </stencil-route-link>

        <div id='menu'>
          {this.menuOptions.map((menuOption: Route) => {
            return (
              <stencil-route-link
                url={
                  (Array.isArray(menuOption.url)
                    ? menuOption.url[0]
                    : menuOption.url) as string
                }
                urlMatch={menuOption.urlMatch}
                exact={true}>
                <span class='menu-option'>{menuOption.title}</span>
              </stencil-route-link>
            );
          })}
        </div>
      </header>
    );

    return headerHTML;
  }


  render() {
    return this.getHeaderHTML();
  }
}


injectHistory(AppHeader);
