import { Photograph, ImageOrientation } from "../../../../global/interfaces";
import { Utils } from "../../../../global/utils";

export namespace LayoutUtils {

  export const getClassnameForTwoImagesWrapper = (image1: Photograph, image2: Photograph) => {

    const sameOrientation = image1.orientation === image2.orientation;

    if (sameOrientation) {

      return `${image1.orientation}-2-wrapper`;
    }

    return `${ImageOrientation.Landscape}-${ImageOrientation.Portrait}-wrapper`;

  }

  export const getClassNameForThreeImagesWrapper = (...images: Photograph[]) => {

    let portraitCount = 0, landscapeCount = 0;
    let classname: string = null;

    for (const image of images) {

      if (image.orientation === ImageOrientation.Portrait) {
        portraitCount++;
      } else {
        landscapeCount++;
      }
    }

    if (portraitCount === 0) {
      classname = 'landscape-3-wrapper';
    }

    if (landscapeCount === 0) {
      classname = 'portrait-3-wrapper';
    }

    if (portraitCount === 1 && landscapeCount === 2) {
      classname = 'landscape-2-portrait-1-wrapper';
    }

    if (portraitCount === 2 && landscapeCount === 1) {
      classname = 'landscape-1-portrait-2-wrapper';
    }

    return classname;

  }


  // extracts a random image from a given array and deletes the image entry
  export const extractRandomImage = (images: Photograph[]) => {

    if (images.length === 0) return null;

    const index = Utils.getRandomNumber(0, images.length - 1);

    const image = images.splice(index, 1)[0];

    return image;
  }


}