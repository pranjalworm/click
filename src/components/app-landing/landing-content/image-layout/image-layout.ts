/**
 * Service to figure out the best possible way of laying out images for a
 * responsive photo grid
 */

import { Photograph } from '../../../../global/interfaces';
import MobileLayout from './mobile-layout';
import DesktopLayout from './desktop-layout';

export default class ImageLayout {

  private static imageMap: Map<string, Photograph> = new Map();
  private static imageWrappers: HTMLElement[] = [];

  private static imagePromises: Promise<any>[];

  private static landscapeImages: Photograph[];
  private static portraitImages: Photograph[];


  static async getImageWrapperDivs(allImages: Photograph[]) {

    console.log(`arya > image-layout > images:`)
    console.log(allImages);

    ImageLayout.resetValues();

    const freshImages = this.filterFreshImages(allImages);

    const imageWrappers = ImageLayout.imageWrappers;
    const landscapeImages = ImageLayout.landscapeImages;
    const portraitImages = ImageLayout.portraitImages;

    console.log(`arya > image-layout > freshImages:`)
    console.log(freshImages);

    if (!freshImages.length) {
      console.log(`arya > image-layout > returning same imageWrappers`)
      console.log(imageWrappers);

      return imageWrappers
    }

    await ImageLayout.segregateImages(freshImages);


    if (ImageLayout.isMobileScreen()) {
      MobileLayout.getLayoutWrappers(imageWrappers, landscapeImages, portraitImages);

    } else {
      DesktopLayout.getLayoutWrappers(imageWrappers, landscapeImages, portraitImages);
    }

    console.log(`arya > image-layout > imageWrappers`)
    console.log(imageWrappers);

    return imageWrappers;
  }


  // filter out fresh images; layout will be calculated only for them
  private static filterFreshImages(images: Photograph[]): Photograph[] {

    let freshImages = [];

    for (const image of images) {

      const isFreshImage = !ImageLayout.imageMap.get(image.url);

      if (isFreshImage) {
        ImageLayout.imageMap.set(image.url, image);
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
          ImageLayout.landscapeImages.push(image);

        } else { // portrait orientation image
          ImageLayout.portraitImages.push(image);
        }

        return resolve(img);
      }

      img.onerror = reject;
      img.src = url;
    });
  }


  private static isMobileScreen() {

    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    return width < 780;
  }

}