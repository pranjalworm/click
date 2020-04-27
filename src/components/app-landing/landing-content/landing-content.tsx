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
import ImageLayout from './image-layout/image-layout';
import { ImagesWrapperConfig } from '../../images-wrapper/images-wrapper';

@Component({
  tag: 'landing-content',
  styleUrl: 'landing-content.scss',
  shadow: true
})
export class LandingContent implements ComponentInterface {

  private imagesWrapperConfigs: ImagesWrapperConfig[] = [];

  @State() imagesLoaded = false;

  @Element() host: HTMLElement;


  @Event({
    eventName: 'content-loaded'
  }) contentLoaded: EventEmitter;


  constructor() {

    this.imagesLoaded = false;
    this.getLandingImages();
  }


  componentDidLoad() {

    this.contentLoaded.emit();
  }


  async getLandingImages() {

    const images = await PhotographService.getLandingImages();
    this.imagesWrapperConfigs = await ImageLayout.getImageWrapperConfigs(images);

    this.imagesLoaded = true;
  }


  showImages() {

    return this.imagesWrapperConfigs.map(config => {
      return (
        <images-wrapper
          images={config.images}
          style-class={config.styleClass}>
        </images-wrapper>
      )
    });
  }


  showSpinner() {
    return (
      <div id="spinner-wrapper">
        <app-spinner></app-spinner>
      </div>
    )
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
