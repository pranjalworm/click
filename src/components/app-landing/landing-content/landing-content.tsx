import {
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter
} from '@stencil/core';
import { CardListType, CardListMode } from '../../../global/interfaces';
import { CardListConfig } from '../../card-list/card-list';
import { ROUTE_NAME } from '../../../services/route.service';
import { analytics, AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../../global/analytics';

@Component({
  tag: 'landing-content',
  styleUrl: 'landing-content.scss',
  shadow: true
})
export class LandingContent implements ComponentInterface {

  @Event({
    eventName: 'section-title-clicked'
  }) sectionTitleClicked: EventEmitter;

  sectionTitleClickHandler(route: string) {

    this.sectionTitleClicked.emit(route);

    analytics.logEvent(AnalyticsEvent.SELECT_CONTENT, {
      content_type: AnalyticsEventProp.IN_APP_LINK,
      content_id: AnalyticsEventValue.VIEW_ALL_GALLERIES
    });
  }


  render() {

    const galleryCardListConfig: CardListConfig = {
      cardListMode: CardListMode.Section,
      cardListType: CardListType.Gallery
    }

    return (

      <div id="landing-content-root">
        <div class="section-wrapper">
          <div class="section-title">
            portfolio
          </div>
          <div class="section-content">
            {
              <card-list config={galleryCardListConfig}></card-list>
            }
          </div>
          <div class="section-footer" onClick={() => {
            const route = ROUTE_NAME.PORTFOLIO;
            this.sectionTitleClickHandler(route)
          }}>
            view all...
          </div>
        </div>

        {/* TODO */}
        {/* <div id="blog-preview-wrapper">
          {
            <card-list card-list-type={CardListType.Blog}></card-list>
          }
        </div> */}

      </div>

    );
  }
}
