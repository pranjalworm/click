import {
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter, getAssetPath
} from '@stencil/core';
import { CardListType, CardListMode } from '../../../global/interfaces';
import { CardListConfig } from '../../card-list/card-list';
import { ROUTE_NAME } from '../../../services/route.service';
import { AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../../global/analytics';
import AnalyticsService from '../../../services/analytics.service';

@Component({
  tag: 'landing-content',
  styleUrl: 'landing-content.scss',
  shadow: true,
  assetsDirs: ['../../../assets']
})
export class LandingContent implements ComponentInterface {

  @Event({
    eventName: 'section-title-clicked'
  }) sectionTitleClicked: EventEmitter;

  sectionTitleClickHandler(route: string) {

    this.sectionTitleClicked.emit(route);

    AnalyticsService.logEvent(AnalyticsEvent.SELECT_CONTENT, {
      content_type: AnalyticsEventProp.IN_APP_LINK,
      content_id: AnalyticsEventValue.VIEW_ALL_GALLERIES
    });
  }


  render() {

    const galleryCardListConfig: CardListConfig = {
      cardListMode: CardListMode.Section,
      cardListType: CardListType.Gallery
    }

    const arrowIconSrc = getAssetPath(`../../../assets/icon/right-arrow.svg`);

    return (

      <div id="landing-content-root">
        <div class="section-wrapper">
          <div class="section-title">
            galleries
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
            view all galleries&nbsp;
            <img src={arrowIconSrc} alt="right arrow" class="right-arrow-icon" />
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
