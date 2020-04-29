import { h, Component, ComponentInterface, Prop, EventEmitter, Event } from '@stencil/core';
import { Utils } from '../../global/utils';
import { Photograph, CardListMode } from '../../global/interfaces';

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
  shadow: true
})
export class CardLink implements ComponentInterface {

  @Prop() cardLinkConfig: CardLinkConfig;


  @Event({
    eventName: 'card-link-clicked'
  }) cardLinkClicked: EventEmitter;


  cardClickHandler() {
    this.cardLinkClicked.emit(this.cardLinkConfig.contentId)
  }


  render() {

    let styleClass = Utils.isMobileScreen() ? 'mobile-style' : 'desktop-style';

    styleClass += this.cardLinkConfig.mode === CardListMode.Page ? ' page-styling' : ' section-styling';

    return (
      <div class={`card-link-root ${styleClass}`} onClick={() => this.cardClickHandler()}>
        <div class="image-wrapper">
          <img src={this.cardLinkConfig?.image.url} alt={this.cardLinkConfig?.image.alt} />
        </div>

        <div class="text-wrapper">
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