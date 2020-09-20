import { h, Component, State, Prop, Listen, getAssetPath, Event, EventEmitter } from '@stencil/core';
import { Photograph, GalleryType, ToastMessageType } from '../../global/interfaces';
import '@stencil/router';
import { RouterHistory, MatchResults } from '@stencil/router';
import { StoreService, StoreProps } from '../../services/store.service';
import GalleryService from '../../services/gallery.service';
import { ToastConfig } from '../app-toast/app-toast';
import { analytics, AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../global/analytics';

const TOAST_SUCCESS_MESSAGE = 'Image link copied!';
const TOAST_FAILURE_MESSAGE = 'Could not copy image link!'

@Component({
  tag: 'view-image',
  styleUrl: 'view-image.scss',
  shadow: true,
  assetsDirs: ['../../assets']
})
export class ViewImage {

  private currentIndex = 0;
  private totalImagesCount: number;
  private galleryType: GalleryType;

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() currentImage: Photograph = null;

  @Event({
    eventName: 'show-toast'
  }) showToast: EventEmitter;


  @Listen('keyup', {
    target: 'body',
    passive: true
  })
  handleKeyUp(event: KeyboardEvent) {

    const key = event.key;

    switch (key) {
      case 'Escape':
        this.exit();
        break;

      case 'ArrowLeft':
        this.getImage(false);
        break;

      case 'ArrowRight':
        this.getImage(true);
        break;
    }
  }


  componentWillLoad() {

    StoreService.store.set(StoreProps.ViewingImage, true);

    this.galleryType = this.match.params.galleryType as GalleryType;
    this.currentIndex = Number(this.match.params.index);
    this.currentImage = GalleryService.getGalleryImage(this.galleryType, this.currentIndex);
    this.totalImagesCount = GalleryService.getGalleryImagesCount(this.galleryType)
  }


  disconnectedCallback() {

    StoreService.store.set(StoreProps.ViewingImage, false);
  }

  copyTextToClipboard(text: string) {

    const textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0px';
    textArea.style.left = '0px';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0px';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');

      this.showToastMessage(successful);

    } catch (err) {

      this.showToastMessage(false)
    }

    document.body.removeChild(textArea);
  }


  showToastMessage(successful: boolean) {

    let toastConfig: ToastConfig;

    if (successful) {
      toastConfig = {
        message: successful ? TOAST_SUCCESS_MESSAGE : TOAST_FAILURE_MESSAGE,
        toastMessageType: successful ? ToastMessageType.Success : ToastMessageType.Failure
      }
    } else {

      toastConfig = {
        message: TOAST_FAILURE_MESSAGE,
        toastMessageType: ToastMessageType.Failure
      }
    }

    this.showToast.emit(toastConfig);
  }


  getIndex(index: number, navigateToNext: boolean) {

    navigateToNext ? index++ : index--;

    if (index < 0) {
      index = this.totalImagesCount - 1;
    } else if (index >= this.totalImagesCount) {
      index = 0;
    }

    return index;
  }


  getImage(navigateToNext: boolean) {

    const currentIndexCopy = this.currentIndex;

    this.currentIndex = this.getIndex(this.currentIndex, navigateToNext);

    this.currentImage = GalleryService.getGalleryImage(this.galleryType,
      this.currentIndex);

    const url = this.history.location.pathname.replace(`${currentIndexCopy}`, `${this.currentIndex}`);

    this.history.replace(url);

    analytics.logEvent(AnalyticsEvent.SELECT_ITEM, {
      content_type: AnalyticsEventProp.IN_APP_CLICK,
      content_id: navigateToNext ? AnalyticsEventValue.NEXT_IMAGE_CLICK : AnalyticsEventValue.PREV_IMAGE_CLICK
    });
  }


  exit() {

    this.history.goBack();

    analytics.logEvent(AnalyticsEvent.SELECT_ITEM, {
      content_type: AnalyticsEventProp.IN_APP_CLICK,
      content_id: AnalyticsEventValue.EXIT_IMAGE_CLICK
    });
  }

  getImageShareUrl(): string {

    const shareUrl = `https://pranjaldubey.photography${this.history.location.pathname}`;
    return shareUrl;
  }


  render() {

    let imageContent = (
      <div id="spinner-wrapper">
        <app-spinner></app-spinner>
      </div>

    )

    if (this.currentImage) {

      const imageSrc = getAssetPath(`../../assets/images/${this.currentImage.url}`);
      // const imageShareUrl = this.getImageShareUrl();
      // const filename = `pranjal-dubey-photography-${this.currentImage.id}`;

      imageContent = (
        <div>
          <div id="image-div">
            <img src={imageSrc} alt={this.currentImage.alt} id="image" />
          </div>

          <div id="image-controls">

            {/* <div class="control-section">
              <a href={imageDownloadUrl} download={filename}>
                <span class="control">download</span>
              </a>
            </div> */}

            <div class="control-section">
              <span class="control" onClick={() => this.getImage(false)}>
                prev
              </span>
              /
              <span class="control" onClick={() => this.getImage(true)}>
                next
              </span>
            </div>

            {/* <div class="control-section">
              <span class="control" onClick={() => this.copyTextToClipboard(imageShareUrl)}>
                share image
              </span>
            </div> */}
          </div>
        </div>
      )
    }

    return (
      <div id="view-image-root">

        <div id="image-section">

          <div id="exit-view-wrapper">
            <div id="exit-view-icon" onClick={() => { this.exit() }}>
              &#10006;
            </div>
          </div>

          {imageContent}

        </div>

        {/* <div id="image-text">
          <div id="image-caption">
            {this.currentImage ? this.currentImage.caption : ''}
          </div>

          <div id="image-description">
            {this.currentImage ? this.currentImage.description : ''}
          </div>
        </div> */}

      </div>
    );
  }
}
