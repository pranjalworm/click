import {
  h,
  Component,
  ComponentInterface,
  State,
} from '@stencil/core';
import { AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../global/analytics';
import AnalyticsService from '../../services/analytics.service';
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


  sectionLinkClickHandler() {

    AnalyticsService.logEvent(AnalyticsEvent.SELECT_ITEM, {
      content_type: AnalyticsEventProp.IN_APP_LINK,
      content_id: AnalyticsEventValue.INSTAGRAM_CLICK
    });
  }


  render() {

    return (
      <div id='app-footer-root' style={{ 'display': this.displayFooter ? 'flex' : 'none' }}>

        <div class='section copyright-div'>© Pranjal Dubey Photography</div>

        <div class='section'>
          <a href='https://www.instagram.com/pranjalworm'
            target='_blank'
            class="link"
            onClick={() => this.sectionLinkClickHandler()}>
            instagram
          </a>
        </div>
      </div>
    );
  }
}
