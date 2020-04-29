import { h, Component, ComponentInterface, Prop } from '@stencil/core';
import { CardListType, CardListMode } from '../../global/interfaces';
import GalleryService from '../../services/gallery.service';
import { CardLinkConfig } from '../card-link/card-link';

export interface CardListConfig {
  cardListType: CardListType;
  cardListMode: CardListMode;
}

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.scss',
  shadow: true
})
export class CardList implements ComponentInterface {

  @Prop() config: CardListConfig;

  private cardLinkConfigs: CardLinkConfig[];

  componentWillLoad() {

    let cardCount = null;

    if (this.config.cardListMode === CardListMode.Section) {
      cardCount = 4;
    }

    switch (this.config.cardListType) {

      case CardListType.Gallery:
        this.getGalleryCards(cardCount)
        break;

      case CardListType.Blog:
        this.getBlogCards(cardCount);
        break;
    }
  }


  getGalleryCards(cardCount: number) {

    this.cardLinkConfigs = GalleryService.getGalleryCards(this.config.cardListMode, cardCount);
  }


  // TODO: pending
  getBlogCards(_cardCount: number) {


  }


  render() {

    const styleClass = this.config.cardListMode === CardListMode.Page ?
      'page-styling' : 'section-styling';

    return (
      <div id="card-list-root" class={styleClass}>
        {
          this.cardLinkConfigs.map(cardLinkConfig => {
            return <card-link cardLinkConfig={cardLinkConfig}></card-link>
          })
        }
      </div>
    )
  }
}