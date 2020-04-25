/**
 * Service to figure out the best possible way of laying out images for a
 * responsive photo grid
 */

import { Photograph } from '../../../global/interfaces';

export default class ImageLayout {

  private static imagePromises: Promise<any>[] = [];

  private static imageWrappers: HTMLElement[] = [];
  private static landscapeWrappers: HTMLElement[] = [];
  private static portraitWrappers: HTMLElement[] = [];

  private static landscapeImages: Photograph[] = [];
  private static portraitImages: Photograph[] = [];


  static async getImageWrapperDivs(images: Photograph[]) {

    await ImageLayout.segregateImages(images);
    ImageLayout.createLandscapeWrappers();
    ImageLayout.createPortraitWrappers();
    ImageLayout.arrangeWrappers();

    return ImageLayout.imageWrappers;
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


  // create divs to hold a single landscape image per div
  private static createLandscapeWrappers() {

    for (const image of ImageLayout.landscapeImages) {

      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'landscape-wrapper');

      const img = new Image();
      img.src = image.url;

      wrapper.appendChild(img);

      ImageLayout.landscapeWrappers.push(wrapper);
    }

  }


  // create divs to hold two portrait images per div
  private static createPortraitWrappers() {

    // if odd number of portrait images, take the last one out and put it in its
    // own separate wrapper
    if (ImageLayout.portraitImages.length % 2 !== 0) {

      const lastImage = ImageLayout.portraitImages.splice(-1, 1)[0];
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'single-portrait-wrapper');
      const img = new Image();
      img.src = lastImage.url;
      wrapper.appendChild(img);
      ImageLayout.portraitWrappers.push(wrapper);
    }

    // put two portrait images in one wrapper
    for (let i = 0; i < ImageLayout.portraitImages.length; i += 2) {

      const image1 = ImageLayout.portraitImages[i];
      const image2 = ImageLayout.portraitImages[i + 1];

      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'portrait-wrapper');

      const img1 = new Image();
      const img2 = new Image();

      img1.src = image1.url;
      img2.src = image2.url;

      wrapper.appendChild(img1);
      wrapper.appendChild(img2);

      ImageLayout.portraitWrappers.push(wrapper);
    }

  }


  // arrange landscape & portrait wrappers in alternation
  private static arrangeWrappers() {

    const landscapeWrappers = ImageLayout.landscapeWrappers;
    const portraitWrappers = ImageLayout.portraitWrappers;

    const totalCount = landscapeWrappers.length + portraitWrappers.length;

    for (let l = 0, p = 0, k = 0; k < totalCount; k++) {

      if (k % 2 === 0) {

        if (l < landscapeWrappers.length) {
          const wrapper = landscapeWrappers[l];
          ImageLayout.imageWrappers.push(wrapper);
          l++;

        } else {
          const wrapper = portraitWrappers[p];
          ImageLayout.imageWrappers.push(wrapper);
          p++;
        }

      } else {

        if (p < portraitWrappers.length) {
          const wrapper = portraitWrappers[p];
          ImageLayout.imageWrappers.push(wrapper);
          p++;

        } else {
          const wrapper = landscapeWrappers[l];
          ImageLayout.imageWrappers.push(wrapper);
          l++
        }
      }
    }
  }

}