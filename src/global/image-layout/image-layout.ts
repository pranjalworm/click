/**
 * Service to figure out the best possible way of laying out images for a
 * responsive photo grid
 */

import { Photograph, ImageOrientation } from '../interfaces';
import MobileLayout from './mobile-layout';
import DesktopLayout from './desktop-layout';
import { Utils } from '../utils';
import { ImagesWrapperConfig } from '../../components/images-wrapper/images-wrapper';

export default class ImageLayout {

  private allImagesSet: Set<string> = new Set();
  private imagesWrappers: ImagesWrapperConfig[] = [];

  private imagePromises: Promise<any>[] = [];

  private landscapeImages: Photograph[] = [];
  private portraitImages: Photograph[] = [];

  constructor() { }


  async getImageWrapperConfigs(images: Photograph[]) {

    const freshImages = this.filterFreshImages(images);

    if (!freshImages.length) {
      return this.imagesWrappers;
    }

    await this.segregateImages(freshImages);

    let newImagesWrappers;

    if (Utils.isMobileScreen()) {
      newImagesWrappers = MobileLayout.getLayoutWrappers(this.landscapeImages, this.portraitImages);

    } else {
      newImagesWrappers = DesktopLayout.getLayoutWrappers(this.landscapeImages, this.portraitImages);
    }

    this.imagesWrappers.push(...newImagesWrappers);

    return this.imagesWrappers;
  }


  // filter out fresh images; layout will be calculated only for them
  private filterFreshImages(images: Photograph[]): Photograph[] {

    let freshImages = [];

    for (const image of images) {

      const isFreshImage = !this.allImagesSet.has(image.url);

      if (isFreshImage) {
        this.allImagesSet.add(image.url);
        freshImages.push(image);
      }
    }

    return freshImages;
  }


  // segregate images into landscapes and portraits (orientations)
  private async segregateImages(allImages: Photograph[]) {

    for (const image of allImages) {

      const img = new Image();

      const promise = this.loadImage(img, image);
      this.imagePromises.push(promise);
    }

    return await Promise.all(this.imagePromises);
  }


  private async loadImage(img: HTMLImageElement, image: Photograph) {

    const url = image.url;

    return new Promise((resolve, reject) => {

      img.onload = () => {

        const height = img.height;
        const width = img.width;

        if (width > height) { // landscape orientation image
          image.orientation = ImageOrientation.Landscape;
          this.landscapeImages.push(image);

        } else { // portrait orientation image
          image.orientation = ImageOrientation.Portrait;
          this.portraitImages.push(image);
        }

        return resolve(img);
      }

      img.onerror = reject;
      img.src = url;
    });
  }

}