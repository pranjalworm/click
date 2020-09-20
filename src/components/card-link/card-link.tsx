import { h, Component, ComponentInterface, Prop, EventEmitter, Event, getAssetPath } from '@stencil/core';
import { Utils } from '../../global/utils';
import { Photograph, CardListMode } from '../../global/interfaces';
import { AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../global/analytics';
import AnalyticsService from '../../services/analytics.service';

export interface CardLinkConfig {
  contentId: string;
  image: Photograph;
  title: string;
  description?: string;
  mode: CardListMode;
}

@Component({
  tag: 'card-link',
  styleUrl: 'card-link.scss',
  shadow: true,
  assetsDirs: ['../../assets']
})
export class CardLink implements ComponentInterface {

  @Prop() cardLinkConfig: CardLinkConfig;


  @Event({
    eventName: 'card-link-clicked'
  }) cardLinkClicked: EventEmitter;


  cardClickHandler() {

    this.cardLinkClicked.emit(this.cardLinkConfig.contentId)

    AnalyticsService.logEvent(AnalyticsEvent.SELECT_CONTENT, {
      content_type: AnalyticsEventProp.IN_APP_LINK,
      content_id: AnalyticsEventValue.CARD_CLICK,
      item: this.cardLinkConfig.contentId
    });
  }


  render() {

    let styleClass = Utils.isMobileScreen() ? 'mobile-style' : 'desktop-style';

    styleClass += this.cardLinkConfig.mode === CardListMode.Page ? ' page-styling' : ' section-styling';

    const imageSrc = getAssetPath(`../../assets/images/${this.cardLinkConfig?.image.url}`);

    return (
      <div class={`card-link-root ${styleClass}`} onClick={() => this.cardClickHandler()}>
        <div class="image-wrapper">
          <img src={imageSrc} alt={this.cardLinkConfig?.image.alt} />
        </div>

        <div class="info-wrapper">

          <div class="title-wrapper">
            {this.cardLinkConfig?.title}
          </div>

          <div class="description-wrapper">
            {this.cardLinkConfig?.description}
          </div>

        </div>

      </div>
    )
  }
}