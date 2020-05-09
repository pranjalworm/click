import {
  h,
  Component,
  ComponentInterface,
  State,
  Element
} from '@stencil/core';
import { RouteService, Route, ROUTE_NAME } from '../../services/route.service';
import { StoreService, StoreProps } from '../../services/store.service';
import { Utils } from '../../global/utils';


@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
})
export class AppHeader implements ComponentInterface {

  @Element() host: HTMLElement;

  @State() displayHeader = true;

  private siteHeading = 'pranjal dubey';
  private menuOptions = null;
  private showMobileMenu = false;
  private menuRef: HTMLElement = null;
  private viewingOnMobile: boolean;


  componentWillLoad() {
    this.menuOptions = RouteService.getHeaderRoutes();
    this.registerListener();
    this.viewingOnMobile = Utils.isMobileScreen();
  }


  registerListener() {

    StoreService.store.onChange(StoreProps.ViewingImage, (value: boolean) => {

      this.displayHeader = !value;
    });
  }

  componentDidLoad() {
    this.menuRef = this.host.shadowRoot.getElementById('menu');
  }


  mobileMenuClickHandler() {

    if (!this.viewingOnMobile) return;

    this.showMobileMenu = !this.showMobileMenu;

    if (this.showMobileMenu) {
      this.menuRef.style.display = 'flex';
    } else {
      this.menuRef.style.display = 'none';
    }

  }


  menuItemClickHandler() {

    this.showMobileMenu = false;
  }


  render() {

    const landingPageRoute = RouteService.getRoute(ROUTE_NAME.HOME);

    return (
      <header id='app-header-root' style={{ 'display': this.displayHeader ? 'flex' : 'none' }}>
        <stencil-route-link url={landingPageRoute.url[0]}>
          <div id='app-heading'>{this.siteHeading}</div>
        </stencil-route-link>

        <div id="mobile-menu-link" onClick={() => { this.mobileMenuClickHandler() }}>
          menu
        </div>

        <div id='menu'>
          {this.menuOptions.map((menuOption: Route) => {
            return (
              <div class="menu-option-link">
                <stencil-route-link
                  url={(Array.isArray(menuOption.url)
                    ? menuOption.url[0]
                    : menuOption.url) as string}
                  urlMatch={menuOption.urlMatch}
                  exact={true}>
                  <span class='menu-option' onClick={() => { this.mobileMenuClickHandler() }}>
                    {menuOption.title}
                  </span>
                </stencil-route-link>
              </div>
            );
          })}
        </div>
      </header>
    )
  }
}
