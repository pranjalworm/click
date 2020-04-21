import {
  h,
  Component,
  ComponentInterface,
  State,
} from '@stencil/core';
import { RouteService, ROUTE_NAME } from '../../services/route.service';
import { StoreService, StoreProps } from '../../services/store.service';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true,
})
export class AppFooter implements ComponentInterface {

  @State() displayFooter = true;


  componentWillLoad() {

    this.registerListener();
  }


  registerListener() {

    StoreService.store.onChange(StoreProps.ViewingImage, (value: boolean) => {

      this.displayFooter = !value;
    })
  }


  render() {

    const aboutMeRoute = RouteService.getRoute(ROUTE_NAME.ABOUT_ME);

    return (
      <div id='app-footer-root' style={{ 'display': this.displayFooter ? 'flex' : 'none' }}>
        <div class='section copyright-div'>© Pranjal Dubey Photography</div>

        <div class='section'>
          <a href='https://www.instagram.com/pranjalworm'
            target='_blank'
            class='link'>
            instagram
          </a>

          <stencil-route-link url={aboutMeRoute.url as string} exact={true}>
            <span class='link'>about me</span>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
