import { h, Component, ComponentInterface, Prop, EventEmitter, Event } from '@stencil/core';
import { Utils } from '../../global/utils';
import { Photograph } from '../../global/interfaces';

export interface CardLinkConfig {
  contentId: string;
  image: Photograph;
  title: string;
  description?: string;
}

@Component({
  tag: 'card-link',
  styleUrl: 'card-link.scss',
  shadow: true
})
export class CardLink implements ComponentInterface {

  private viewingOnMobile = Utils.isMobileScreen();

  @Prop() cardLinkConfig: CardLinkConfig = null;


  @Event({
    eventName: 'card-clicked'
  }) cardClicked: EventEmitter;


  cardClickHandler() {
    this.cardClicked.emit(this.cardLinkConfig.contentId)
  }


  render() {

    const styleClass = this.viewingOnMobile ? 'mobile-style' : 'desktop-style';

    return (
      <div id="card-link-root" class={styleClass} onClick={() => this.cardClickHandler()}>
        <div id="image-wrapper">
          <img src={this.cardLinkConfig?.image.url} alt={this.cardLinkConfig?.image.alt} />
        </div>

        <div id="text-wrapper">
          <div id="title-wrapper">
            {this.cardLinkConfig?.title}
          </div>
          <div id="description-wrapper">
            {this.cardLinkConfig?.description}
          </div>
        </div>

      </div>
    )
  }
}