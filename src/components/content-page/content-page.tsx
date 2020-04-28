import { h, Component, ComponentInterface, Prop, State } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { ROUTE_NAME } from '../../services/route.service';
import { CardListType, Photograph, GalleryType } from '../../global/interfaces';
import ImageLayout from '../app-landing/landing-content/image-layout/image-layout';
import GalleryService from '../../services/gallery.service';

@Component({
  tag: 'content-page',
  styleUrl: 'content-page.scss',
  shadow: true
})
export class ContentPage implements ComponentInterface {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() content: any; // TODO: State required?

  async componentWillLoad() {

    console.log(`arya > content-page`)
    console.log(this.match);

    const url = (this.match.url).replace('/', '');

    switch (url) {
      case ROUTE_NAME.PORTFOLIO:
        this.content = this.showGalleryCards();
        break;

      case ROUTE_NAME.GALLERY:
        this.content = this.showSpinner();
        this.content = await this.showGalleryImages();
        break;
    }
  }


  showSpinner() {
    return (
      <div id="spinner-wrapper">
        <app-spinner></app-spinner>
      </div>
    )
  }


  showGalleryCards() {
    return (
      <card-list card-list-type={CardListType.Gallery}></card-list>
    )
  }


  async showGalleryImages() {

    const galleryType = this.match.params.id;

    const galleryImages: Photograph[] = GalleryService.getGalleryImages(galleryType as GalleryType);

    const wrapperConfigs = await ImageLayout.getImageWrapperConfigs(galleryImages);

    return wrapperConfigs.map(config => {
      return (
        <images-wrapper
          images={config.images}
          style-class={config.styleClass}>
        </images-wrapper>
      )
    });
  }


  render() {
    return (
      <div id="content-page-root">
        {this.content}
      </div>
    )
  }
}