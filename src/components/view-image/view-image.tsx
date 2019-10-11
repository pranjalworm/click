import { h, Component, State } from '@stencil/core';
import ImageService from '../../services/image.service';
import { Image } from '../../interfaces/Image';
import '@stencil/router';

@Component({
  tag: 'view-image',
  styleUrl: 'view-image.scss',
  shadow: true
})
export class ViewImage {

  @State() currentImage: Image = null;

  private currentIndex = 0;
  private imageElem: Element;

  componentWillLoad() {
    this.fetchImage(0);
  }

  componentDidLoad() {
    this.imageElem = document.getElementById('image-elem');
  }


  fetchImage(index: number) {
    this.currentImage = ImageService.getImage(index);
    console.log(`arya > currentImage: ${JSON.stringify(this.currentImage)}`);
  }


  getNextImage() {

    this.fetchImage(++this.currentIndex);
  }


  getPreviousImage() {

    this.fetchImage(--this.currentIndex);
  }


  viewInFullScreen() {
    if (this.imageElem.requestFullscreen) {
      this.imageElem.requestFullscreen();
    }

  }


  render() {

    return (
      <div class="page-root">
        <div class="image-meta">
          {this.currentImage.location.city}, {this.currentImage.date}
        </div>

        <div class="image-container">
          <img src={this.currentImage.url} alt={this.currentImage.alt} id="image-elem" />
        </div>

        <div class="image-controls">
          <div class="control" onClick={() => this.viewInFullScreen()}>
            <i class="fas fa-expand"></i>
          </div>
          <div class="control" onClick={() => this.getPreviousImage()}>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div class="control" onClick={() => this.getNextImage()}>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="control">
            <a href={this.currentImage.url} download class="download-href">
              <i class="fas fa-file-download"></i>
            </a>
          </div>
        </div>

        <div class="image-caption">
          {this.currentImage.caption}
        </div>

        <div class="image-description">
          {this.currentImage.description}
        </div>
      </div>
    );
  }
}
