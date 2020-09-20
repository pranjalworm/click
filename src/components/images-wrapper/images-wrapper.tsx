import { h, Component, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';
import { AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../global/analytics';
import { Photograph } from '../../global/interfaces';
import AnalyticsService from '../../services/analytics.service';

export interface ImagesWrapperConfig {
  images: Photograph[];
  styleClass: string;
}

@Component({
  tag: 'images-wrapper',
  shadow: false,
  assetsDirs: ['../../assets']
})
export class ImagesWrapper implements ComponentInterface {

  @Prop() images: Photograph[] = [];
  @Prop() styleClass: string;

  @Event({
    eventName: 'wrapper-image-clicked',
  }) wrapperImageClicked: EventEmitter;

  imageClickHandler(id: number) {

    this.wrapperImageClicked.emit(id);

    AnalyticsService.logEvent(AnalyticsEvent.SELECT_ITEM, {
      content_type: AnalyticsEventProp.IN_APP_CLICK,
      content_id: AnalyticsEventValue.IMAGE_CLICK,
      item: id
    });
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