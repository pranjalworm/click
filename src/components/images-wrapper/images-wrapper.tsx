import { h, Component, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';
import { Photograph } from '../../global/interfaces';

export interface ImagesWrapperConfig {
  images: Photograph[];
  styleClass: string;
}

@Component({
  tag: 'images-wrapper',
  shadow: false,
  assetsDir: '../../assets'
})
export class ImagesWrapper implements ComponentInterface {

  @Prop() images: Photograph[] = [];
  @Prop() styleClass: string;

  @Event({
    eventName: 'wrapper-image-clicked',
  }) wrapperImageClicked: EventEmitter;

  imageClickHandler(id: number) {

    this.wrapperImageClicked.emit(id);
  }


  render() {

    return (
      <div class={this.styleClass}>
        {
          this.images.map((image: Photograph) => {

            return <img onClick={() => { this.imageClickHandler(image.id) }}
              src={image.url}
              alt={image.alt}
              class={image.orientation} />
          })
        }
      </div>
    )
  }
}