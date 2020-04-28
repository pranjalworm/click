/**
 * Service to figure out the best possible way of laying out images for a
 * responsive photo grid
 */

import { Photograph, ImageOrientation } from '../../../../global/interfaces';
import MobileLayout from './mobile-layout';
import DesktopLayout from './desktop-layout';
import { Utils } from '../../../../global/utils';
import { ImagesWrapperConfig } from '../../../images-wrapper/images-wrapper';

export default class ImageLayout {

  private static allImagesSet: Set<string> = new Set();
  private static imagesWrappers: ImagesWrapperConfig[] = [];

  private static imagePromises: Promise<any>[];

  private static landscapeImages: Photograph[];
  private static portraitImages: Photograph[];


  static async getImageWrapperConfigs(allImages: Photograph[]) {

    ImageLayout.resetValues();

    const freshImages = this.filterFreshImages(allImages);

    const landscapeImages = ImageLayout.landscapeImages;
    const portraitImages = ImageLayout.portraitImages;

    if (!freshImages.length) {
      return ImageLayout.imagesWrappers;
    }

    await ImageLayout.segregateImages(freshImages);

    let imagesWrappers;

    if (Utils.isMobileScreen()) {
      imagesWrappers = MobileLayout.getLayoutWrappers(landscapeImages, portraitImages);

    } else {
      imagesWrappers = DesktopLayout.getLayoutWrappers(landscapeImages, portraitImages);
    }

    ImageLayout.imagesWrappers.push(...imagesWrappers);

    return ImageLayout.imagesWrappers;
  }


  // filter out fresh images; layout will be calculated only for them
  private static filterFreshImages(images: Photograph[]): Photograph[] {

    let freshImages = [];

    for (const image of images) {

      const isFreshImage = !ImageLayout.allImagesSet.has(image.url);

      if (isFreshImage) {
        ImageLayout.allImagesSet.add(image.url);
        freshImages.push(image);
      }
    }

    return freshImages;
  }


  // resets all variables except imageWrappers
  private static resetValues() {

    ImageLayout.imagePromises = [];
    ImageLayout.landscapeImages = [];
    ImageLayout.portraitImages = [];
  }


  // segregate images into landscapes and portraits (orientations)
  private static async segregateImages(allImages: Photograph[]) {

    for (const image of allImages) {

      const img = new Image();

      const promise = ImageLayout.loadImage(img, image);
      ImageLayout.imagePromises.push(promise);
    }

    return await Promise.all(ImageLayout.imagePromises);
  }


  private static async loadImage(img: HTMLImageElement, image: Photograph) {

    const url = image.url;

    return new Promise((resolve, reject) => {

      img.onload = () => {

        const height = img.height;
        const width = img.width;

        if (width > height) { // landscape orientation image
          image.orientation = ImageOrientation.Landscape;
          ImageLayout.landscapeImages.push(image);

        } else { // portrait orientation image
          image.orientation = ImageOrientation.Portrait;
          ImageLayout.portraitImages.push(image);
        }

        return resolve(img);
      }

      img.onerror = reject;
      img.src = url;
    });
  }

}