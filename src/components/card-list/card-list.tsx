import { h, Component, ComponentInterface, Prop } from '@stencil/core';
import { CardListType } from '../../global/interfaces';
import GalleryService from '../../services/gallery.service';
import { CardLinkConfig } from '../card-link/card-link';

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.scss',
  shadow: true
})
export class CardList implements ComponentInterface {

  @Prop() cardListType: CardListType = null;

  private cardLinkConfigs: CardLinkConfig[];

  componentWillLoad() {

    switch (this.cardListType) {

      case CardListType.Gallery:
        this.getGalleryCards()
        break;

      case CardListType.Blog:
        this.getBlogCards();
        break;
    }
  }

  getGalleryCards() {

    this.cardLinkConfigs = GalleryService.getGalleryCards();
  }


  getBlogCards() {

    // TODO: pending
  }


  render() {
    return (
      <div id="card-list-root">
        {
          this.cardLinkConfigs.map(cardLinkConfig => {
            return <card-link cardLinkConfig={cardLinkConfig}></card-link>
          })
        }
      </div>
    )
  }
}