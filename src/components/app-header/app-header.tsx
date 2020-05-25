import {
  h,
  Component,
  ComponentInterface,
  State,
  Element,
  getAssetPath
} from '@stencil/core';
import { RouteService, Route, ROUTE_NAME } from '../../services/route.service';
import { StoreService, StoreProps } from '../../services/store.service';
import { Utils } from '../../global/utils';
import { ThemeService } from '../../services/theme.service';

const landingPageRoute = RouteService.getRoute(ROUTE_NAME.HOME);

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
  assetsDir: '../../assets'
})
export class AppHeader implements ComponentInterface {

  @Element() host: HTMLElement;

  @State() displayHeader = true;

  @State() openMobileMenu = false;

  private siteHeading = 'pranjal dubey';
  private menuOptions = null;
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


  menuButtonClickHandler() {

    this.openMobileMenu = !this.openMobileMenu;
  }


  menuItemClickHandler() {

    this.openMobileMenu = false;
  }

  toggleTheme() {

    ThemeService.toggleTheme();
  }


  getMenuItems() {

    const currentTheme = ThemeService.getCurrentTheme();
    let toggleButton = <input type="checkbox" id="toggleButton" onChange={() => this.toggleTheme()} />;

    if (currentTheme === ThemeService.ThemeClass.DarkTheme) {
      toggleButton = <input checked type="checkbox" id="toggleButton" onChange={() => this.toggleTheme()} />
    }

    const mobileMenuControls = this.viewingOnMobile ? (
      <div id="controls-wrapper">
        <div class="control">
          <span>night mode</span>
          <label class="switch">
            {toggleButton}
            <div class="slider round"></div>
          </label>
        </div>
      </div>) : '';

    return (
      <div id="menu-wrapper" class="fade-in">
        <div id="menu">
          {this.menuOptions.map((menuOption: Route) => {
            return (
              <div class="menu-option-link">
                <stencil-route-link
                  url={(Array.isArray(menuOption.url)
                    ? menuOption.url[0]
                    : menuOption.url) as string}
                  urlMatch={menuOption.urlMatch}
                  exact={true}>
                  <span class='menu-option'
                    onClick={() => { this.menuButtonClickHandler() }}>
                    {menuOption.title}
                  </span>
                </stencil-route-link>
              </div>
            );
          })}
        </div>

        {mobileMenuControls}

      </div>
    )
  }


  getDesktopMenu() {

    return (
      <header id='app-header-root' class="desktop"
        style={{ 'display': this.displayHeader ? 'flex' : 'none' }}>
        <stencil-route-link url={landingPageRoute.url[0]}>
          <div id='app-heading'>{this.siteHeading}</div>
        </stencil-route-link>

        {this.getMenuItems()}

      </header>
    )
  }


  getMobileMenu() {

    const menuLineSrc = getAssetPath('../../assets/icon/menu-line.svg');
    const menuStyle = this.openMobileMenu ? 'opened-menu' : 'closed-menu';
    const styleClass = 'mobile ' + menuStyle;

    return (
      <header id='app-header-root' class={styleClass}
        style={{ 'display': this.displayHeader ? 'flex' : 'none' }}>

        <div id="menu-header">

          {/* SITE HEADING */}
          <stencil-route-link url={landingPageRoute.url[0]}>
            <div id='app-heading'>{this.siteHeading}</div>
          </stencil-route-link>

          {/* MENU BUTTON */}
          <div id="mobile-menu-button" onClick={() => { this.menuButtonClickHandler() }}>
            <img src={menuLineSrc} id="menu-line-1" class="menu-line" />
            <img src={menuLineSrc} id="menu-line-2" class="menu-line" />
          </div>
        </div>

        {this.getMenuItems()}

      </header>
    )
  }


  render() {

    {
      return this.viewingOnMobile ? this.getMobileMenu() : this.getDesktopMenu()
    }

  }
}
