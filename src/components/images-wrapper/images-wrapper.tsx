import { h, Component, ComponentInterface, Prop, Event, EventEmitter, State } from '@stencil/core';
import { Photograph } from '../../global/interfaces';


const IntersectionOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '400px',
  threshold: 0
};


@Component({
  tag: 'images-wrapper',
  shadow: false,
  assetsDirs: ['../../assets'],
  styleUrl: 'images-wrapper.scss',
})
export class ImagesWrapper implements ComponentInterface {


  private intersectionObserver: IntersectionObserver;

  private imagesContainer: HTMLElement;

  @State() content: any = this.getSpinnerTemplate()


  @Prop() images: Photograph[] = [];
  @Prop() styleClass: string;


  @Event({
    eventName: 'wrapper-image-clicked',
  }) wrapperImageClicked: EventEmitter;


  componentWillLoad() {

    this.intersectionObserver = new IntersectionObserver(this.intersectionHandler.bind(this), IntersectionOptions);
  }


  componentDidLoad() {

    this.intersectionObserver.observe(this.imagesContainer);
  }


  intersectionHandler(entries: any, _observer: HTMLElement) {

    entries.forEach(entry => {

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        this.content = this.getImagesTemplate();
        this.intersectionObserver.disconnect();
      }
    });
  }


  imageClickHandler(id: number) {

    this.wrapperImageClicked.emit(id);

  }


  getSpinnerTemplate() {

    return (
      <div id="spinner-container">
        <app-spinner></app-spinner>
      </div>
    )
  }


  getImagesTemplate() {

    return (
      this.images.map((image: Photograph) => {

        return <img onClick={() => { this.imageClickHandler(image.id) }}
          src={image.url}
          alt={image.alt}
          class={image.orientation} />
      })
    )
  }


  render() {

    return (
      <div id="images-wrapper-root" class={this.styleClass}
        ref={(el) => this.imagesContainer = el as HTMLElement}>
        {
          this.content
        }
      </div>
    )
  }
}