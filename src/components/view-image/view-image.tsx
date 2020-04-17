import { h, Component, State, Prop } from '@stencil/core';
import ImageService from '../../services/image.service';
import { Image } from '../../global/interfaces';
import '@stencil/router';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'view-image',
  styleUrl: 'view-image.scss',
  shadow: true
})
export class ViewImage {

  @Prop() history: RouterHistory;

  @State() currentImage: Image = null;

  private currentIndex = 0;
  private totalImagesCount = ImageService.getTotalImagesCount();


  componentWillLoad() {

    this.fetchImage(this.currentIndex);
  }


  fetchImage(index: number) {

    if (index < 0) {
      this.currentIndex = index = this.totalImagesCount - 1;
    } else if (index === this.totalImagesCount) {
      this.currentIndex = index = 0;
    }

    this.currentImage = ImageService.getImage(index);
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

    return (
      <div id="view-image-root">

        <div id="exit-view-image" onClick={() => { this.exit() }}>
          <img src="../assets/icon/close.svg" alt="close" />
        </div>

        <div id="image-div">
          <img src={this.currentImage.url} alt={this.currentImage.alt} id="image" />
        </div>

        <div id="image-controls">
          <span class="control" onClick={() => this.getPreviousImage()}>prev</span>
            /
          <span class="control" onClick={() => this.getNextImage()}>next</span>
        </div>

        <div id="image-text">
          <div id="image-caption">
            {this.currentImage.caption}
          </div>

          <div id="image-description">
            {this.currentImage.description}
          </div>
        </div>

      </div>
    );
  }
}
