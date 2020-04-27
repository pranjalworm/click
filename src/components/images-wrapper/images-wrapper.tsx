import { h, Component, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';
import { Photograph } from '../../global/interfaces';

export interface ImagesWrapperConfig {
  images: Photograph[];
  styleClass: string;
}

@Component({
  tag: 'images-wrapper',
  shadow: false
})
export class ImagesWrapper implements ComponentInterface {

  @Prop() images: Photograph[] = [];
  @Prop() styleClass: string;

  @Event({
    eventName: 'wrapper-image-clicked',
  }) wrapperImageClicked: EventEmitter;

  imageClickHandler(url: string) {

    this.wrapperImageClicked.emit(url);
  }


  render() {

    return (
      <div class={this.styleClass}>
        {
          this.images.map((image: Photograph) => {
            return <img onClick={() => { this.imageClickHandler(image.url) }}
              src={image.url}
              alt={image.alt}
              class={image.orientation} />
          })
        }
      </div>
    )
  }
}