import { h, Component, ComponentInterface, Prop, State, Listen, getAssetPath } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { Photograph, GalleryType } from '../../global/interfaces';
import ImageLayout from '../../global/image-layout/image-layout';
import GalleryService from '../../services/gallery.service';
import { ImagesWrapperConfigsMap } from '../../global/image-layout/wrapper-configs-map';

@Component({
  tag: 'gallery-page',
  styleUrl: 'gallery-page.scss',
  shadow: true,
  assetsDirs: ['../../assets']
})
export class GalleryPage implements ComponentInterface {

  private galleryType: GalleryType;

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() content: any; // TODO: state required? any better way?

  @Listen('wrapper-image-clicked')
  imageClickHandler(event: CustomEvent) {

    const id = event.detail;
    const index = GalleryService.getIndexById(this.galleryType, id);

    this.history.push(`/view-image/${this.galleryType}/${index}`);
  }


  async componentWillLoad() {

    this.content = this.showSpinner();
    this.content = await this.showGalleryImages();
  }


  showSpinner() {
    return (
      <div id="spinner-wrapper">
        <app-spinner></app-spinner>
      </div>
    )
  }

  async fetchImageWrapperConfigs(galleryType: GalleryType, images: Photograph[]) {

    // see if configs are already calculated for this galleryType
    let wrapperConfigs = ImagesWrapperConfigsMap.getConfigs(galleryType);

    if (!wrapperConfigs) {

      const imageLayout = new ImageLayout();
      wrapperConfigs = await imageLayout.getImageWrapperConfigs(images);
      ImagesWrapperConfigsMap.saveConfigs(galleryType, wrapperConfigs);
    }

    return wrapperConfigs;

  }


  processImageUrls(images: Photograph[]) {

    const imagesCopy: Photograph[] = JSON.parse(JSON.stringify(images));

    for (const image of imagesCopy) {

      image.url = getAssetPath(`../../assets/images/${image.url}`);
    }

    return imagesCopy;
  }


  async showGalleryImages() {

    this.galleryType = this.match.params.galleryType as GalleryType;

    const images = GalleryService.getGalleryImages(this.galleryType);
    const galleryImages = this.processImageUrls(images);
    const galleryTitle = GalleryService.getGalleryTitle(this.galleryType);
    const galleryDescription = GalleryService.getGalleryDescription(this.galleryType);

    const wrapperConfigs = await this.fetchImageWrapperConfigs(this.galleryType, galleryImages);

    return (
      <div id="gallery-content">
        <div id="gallery-text">
          <div id="gallery-title">
            {galleryTitle}
          </div>
          <div id="gallery-description">
            {galleryDescription}
          </div>
        </div>
        <div id="gallery-images-wrapper">
          {
            wrapperConfigs.map(config => {
              return (
                <images-wrapper
                  images={config.images}
                  style-class={config.styleClass}>
                </images-wrapper>
              )
            })
          }
        </div>
      </div>
    )
  }


  render() {

    return (
      <div id="gallery-page-root">
        {this.content}
      </div>
    )
  }
}