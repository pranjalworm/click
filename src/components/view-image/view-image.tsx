import { h, Component, State, Prop, Listen } from '@stencil/core';
import { Photograph, GalleryType } from '../../global/interfaces';
import '@stencil/router';
import { RouterHistory, MatchResults } from '@stencil/router';
import { StoreService, StoreProps } from '../../services/store.service';
import GalleryService from '../../services/gallery.service';

@Component({
  tag: 'view-image',
  styleUrl: 'view-image.scss',
  shadow: true
})
export class ViewImage {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() currentImage: Photograph = null;

  private currentIndex = 0;
  private totalImagesCount: number;
  private galleryType: GalleryType;

  @Listen('keydown', {
    target: 'body',
    passive: true
  })
  handleKeyDown(event: KeyboardEvent) {

    const key = event.key;

    switch (key) {
      case 'Escape':
        this.exit();
        break;

      case 'ArrowLeft':
        this.getPreviousImage();
        break;

      case 'ArrowRight':
        this.getNextImage();
        break;
    }
  }


  componentWillLoad() {

    StoreService.store.set(StoreProps.ViewingImage, true);

    this.galleryType = this.match.params.galleryType as GalleryType;
    this.currentIndex = Number(this.match.params.index) || 0;
    this.totalImagesCount = GalleryService.getGalleryImagesCount(this.galleryType)

    this.currentImage = GalleryService.getGalleryImage(this.galleryType,
      this.currentIndex);
  }


  componentDidUnload() {

    StoreService.store.set(StoreProps.ViewingImage, false);
  }


  fetchImage(index: number) {

    if (index < 0) {
      this.currentIndex = index = this.totalImagesCount - 1;
    } else if (index === this.totalImagesCount) {
      this.currentIndex = index = 0;
    }

    this.currentImage = GalleryService.getGalleryImage(this.galleryType,
      this.currentIndex);
  }


  getNextImage() {

    this.fetchImage(++this.currentIndex);
  }


  getPreviousImage() {

    this.fetchImage(--this.currentIndex);
  }

  exit() {

    this.history.goBack();
  }


  render() {

    let imageContent = (
      <div id="spinner-wrapper">
        <app-spinner></app-spinner>
      </div>

    )

    if (this.currentImage) {

      imageContent = (
        <div>
          <div id="image-div">
            <img src={this.currentImage?.url} alt={this.currentImage?.alt} id="image" />
          </div>

          <div id="image-controls">
            <span class="control" onClick={() => this.getPreviousImage()}>prev</span>
            /
            <span class="control" onClick={() => this.getNextImage()}>next</span>
          </div>
        </div>
      )
    }

    return (
      <div id="view-image-root">

        <div id="image-section">

          <div id="exit-view-wrapper">
            <div id="exit-view-image" onClick={() => { this.exit() }}>
              <img src="./assets/icon/close.svg" alt="close" />
            </div>
          </div>

          {imageContent}

        </div>

        <div id="image-text">
          <div id="image-caption">
            {this.currentImage ? this.currentImage.caption : ''}
          </div>

          <div id="image-description">
            {this.currentImage ? this.currentImage.description : ''}
          </div>
        </div>

      </div>
    );
  }
}
