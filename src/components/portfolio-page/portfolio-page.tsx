/**
 * Page to display all galleries' card links
 */

import { h, Component, ComponentInterface, Prop, Listen } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { CardListType, GalleryType, CardListMode } from '../../global/interfaces';
import { CardListConfig } from '../card-list/card-list';


@Component({
  tag: 'portfolio-page',
  styleUrl: 'portfolio-page.scss',
  shadow: true
})
export class PortfolioPage implements ComponentInterface {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;


  @Listen('card-link-clicked')
  cardLinkClickedHandler(event: CustomEvent) {

    const galleryType = event.detail;
    this.openGallery(galleryType);
  }


  openGallery(galleryType: GalleryType) {

    this.history.push(`/gallery/${galleryType}`);
  }


  render() {

    const cardListConfig: CardListConfig = {
      cardListType: CardListType.Gallery,
      cardListMode: CardListMode.Page
    }

    return (
      <div id="portfolio-page-root">
        <card-list config={cardListConfig}></card-list>
      </div>
    )
  }
}