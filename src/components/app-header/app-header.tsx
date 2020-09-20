import {
  h,
  Component,
  ComponentInterface,
  State,
  Element,
  getAssetPath,
  Listen
} from '@stencil/core';
import { RouteService, Route, ROUTE_NAME } from '../../services/route.service';
import { StoreService, StoreProps } from '../../services/store.service';
import { Utils } from '../../global/utils';
import { ThemeService } from '../../services/theme.service';
import { AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../global/analytics';
import AnalyticsService from '../../services/analytics.service';

const LandingPageRoute = RouteService.getRoute(ROUTE_NAME.HOME);
const Label = 'night mode';
const NightModeButtonId = 'night-mode-button';


@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
  assetsDirs: ['../../assets']
})
export class AppHeader implements ComponentInterface {

  private siteHeading = 'pranjal dubey';
  private menuOptions = null;
  private viewingOnMobile: boolean;

  @Element() host: HTMLElement;

  @State() displayHeader = true;

  @State() openMobileMenu = false;

  @Listen('toggle-clicked')
  toggleClickListener(event: CustomEvent) {

    const buttonId = event.detail.buttonId;

    switch (buttonId) {
      case NightModeButtonId:
        ThemeService.toggleTheme();
        break;

      default:
        console.error(`AppHeader: No handler attached for: ${buttonId}`)
    }

    AnalyticsService.logEvent(AnalyticsEvent.SELECT_ITEM, {
      content_type: AnalyticsEventProp.IN_APP_CLICK,
      content_id: AnalyticsEventValue.NIGHT_MODE_CLICK,
      item: ThemeService.getCurrentTheme()
    });
  }

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


  menuButtonClickHandler(title?: string) {

    this.openMobileMenu = !this.openMobileMenu;

    this.logClickEvent(title);
  }


  logClickEvent(title?: string) {

    AnalyticsService.logEvent(AnalyticsEvent.SELECT_ITEM, {
      content_type: title ? AnalyticsEventProp.IN_APP_LINK : AnalyticsEventProp.IN_APP_CLICK,
      content_id: title ? AnalyticsEventValue.MENU_ITEM_CLICK : AnalyticsEventValue.MENU_TOGGLE_CLICK,
      item: title ? title : this.openMobileMenu
    });
  }

  toggleTheme() {

    ThemeService.toggleTheme();
  }


  getMenuItems() {

    const currentTheme = ThemeService.getCurrentTheme();
    const nightModeApplied = currentTheme === ThemeService.ThemeClass.DarkTheme;

    const mobileMenuControls = this.viewingOnMobile ? (
      <div id="controls-wrapper">
        <toggle-button
          buttonId={NightModeButtonId}
          label={Label}
          checked={nightModeApplied}>
        </toggle-button>
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
                    onClick={() => { this.menuButtonClickHandler(menuOption.title) }}>
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
        <stencil-route-link url={LandingPageRoute.url[0]}>
          <div id='app-heading' onClick={() => this.logClickEvent(this.siteHeading)}>
            {this.siteHeading}
          </div>
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
          <stencil-route-link url={LandingPageRoute.url[0]}>
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
