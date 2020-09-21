/**
 * BUGS:-
 * - scenario where the first imageswrapper component has been attached, but the spinner is still visible in the viewport; it's possible the loaded content is not scrollable, hence intersection ratio wouldn't change
 * - hide the spinner once all of the imageswrapper components have been attached
 */

import { h, Component, ComponentInterface, Prop } from '@stencil/core';
import { Photograph } from '../../global/interfaces';
import { ImagesWrapperConfig } from '../images-wrapper/images-wrapper';

const IntersectionOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0
};

@Component({
  tag: 'lazy-loader',
  shadow: false,
  styleUrl: 'lazy-loader.scss',
})
export class LazyLoader implements ComponentInterface {

  private intersectionObserver: IntersectionObserver;

  private imagesWrappersContainer: HTMLElement;
  private spinnerContainer: HTMLElement;

  // keeps a count of ImagesWrappers already attached to the DOM
  private attachedCount = 0;

  @Prop() imagesWrapperConfigs: ImagesWrapperConfig[];

  componentWillLoad() {

    this.intersectionObserver = new IntersectionObserver(this.attachImagesWrapper.bind(this), IntersectionOptions);

    if (!this.imagesWrapperConfigs || !this.imagesWrapperConfigs.length) {
      console.error(`LazyLoader: did not receive imagesWrapperConfigs`)
    }
  }

  componentDidLoad() {

    this.intersectionObserver.observe(this.spinnerContainer);
  }

  attachImagesWrapper() {

    const imagesWrapperConfig = this.getNewImagesWrapperConfig();

    console.log(`wasp > imagesWrapperConfig`)
    console.log(imagesWrapperConfig);

    if (!imagesWrapperConfig) {
      // TODO: hide spinner at this point
      return;
    };

    const { images, styleClass } = imagesWrapperConfig;
    const imagesWrapper = this.createImagesWrapper(images, styleClass);

    this.imagesWrappersContainer.appendChild(imagesWrapper);
  }

  getNewImagesWrapperConfig() {

    return this.imagesWrapperConfigs[this.attachedCount++] || null;
  }

  createImagesWrapper(images: Photograph[], styleClass: string) {

    const imagesWrapper = document.createElement('images-wrapper');
    imagesWrapper.images = images;
    imagesWrapper.styleClass = styleClass;

    return imagesWrapper;
  }

  render() {

    return (
      <div id="lazy-loader-root">

        {/* container for all the ImagesWrapper components which will be attached dynamically */}
        <div id="images-wrappers-container" ref={(el) => this.imagesWrappersContainer = el as HTMLElement}>
        </div>

        <div id="spinner-container" ref={(el) => this.spinnerContainer = el as HTMLElement}>
          <app-spinner></app-spinner>
        </div>

      </div>
    )
  }
}