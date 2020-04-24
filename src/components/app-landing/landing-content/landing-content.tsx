import {
  h,
  Component,
  ComponentInterface,
  State,
  Event,
  EventEmitter
} from '@stencil/core';
import ImageService from '../../../services/image.service';
import { Image } from '../../../global/interfaces';

@Component({
  tag: 'landing-content',
  styleUrl: 'landing-content.scss',
  shadow: true
})
export class LandingContent implements ComponentInterface {

  @State() imagesLoaded = false;
  private landingImages: Image[] = [];

  @Event({
    eventName: 'image-clicked'
  }) imageClicked: EventEmitter;

  @Event({
    eventName: 'content-loaded'
  }) contentLoaded: EventEmitter;

  // TODO: fix this
  // @Element() host: HTMLElement;
  // private timerRef: number;
  // @Listen('scroll', {
  //   target: 'body',
  //   passive: true
  // })
  // handleScroll(_event: any) {

  //   clearTimeout(this.timerRef);
  //   this.timerRef = null;

  //   if (!this.host.classList.contains('disable-hover')) {
  //     this.host.classList.add('disable-hover')
  //   }

  //   this.timerRef = setTimeout(() => {
  //     this.host.classList.remove('disable-hover')
  //   }, 1000);
  // }


  componentWillLoad() {

    this.getLandingImages();
  }


  componentDidLoad() {

    this.contentLoaded.emit();
  }


  async getLandingImages() {

    this.landingImages = await ImageService.getLandingImages();
    this.imagesLoaded = true;
  }


  showImages() {

    return (
      <div id="landing-images-root">
        {
          this.landingImages.map((image: Image, index: number) => {
            return (
              <img onClick={() => this.handleImageClick(index)}
                src={image.url}
                alt={image.alt} />
            )
          })
        }
      </div>
    )
  }


  showSpinner() {
    return (
      <div id="spinner-wrapper">
        <app-spinner></app-spinner>
      </div>
    )
  }


  handleImageClick(index: number) {

    this.imageClicked.emit(index);
  }


  render() {

    return (

      this.imagesLoaded ? this.showImages() : this.showSpinner()
    );
  }
}
