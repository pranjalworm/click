import {
  h,
  Component,
  ComponentInterface,
  State,
  Event,
  EventEmitter,
  Element
} from '@stencil/core';
import PhotographService from '../../../services/photograph.service';
import ImageLayout from './image-layout';

@Component({
  tag: 'landing-content',
  styleUrl: 'landing-content.scss',
  shadow: true
})
export class LandingContent implements ComponentInterface {

  @Element() host: HTMLElement;
  @State() imagesLoaded = false;
  private imageWrapperDivs: HTMLElement[] = [];

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

  constructor() {

    this.getLandingImages();
  }


  componentDidLoad() {

    this.contentLoaded.emit();
  }


  async getLandingImages() {

    const images = await PhotographService.getLandingImages();
    this.imageWrapperDivs = await ImageLayout.getImageWrapperDivs(images);

    this.imagesLoaded = true;
  }


  showImages() {

    const rootRef = this.host.shadowRoot.getElementById('landing-images-root');

    this.imageWrapperDivs.map((wrapper: HTMLElement) => {

      rootRef.appendChild(wrapper);
    })

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

      <div id="landing-images-root">
        {
          this.imagesLoaded ? this.showImages() : this.showSpinner()
        }
      </div>

    );
  }
}
