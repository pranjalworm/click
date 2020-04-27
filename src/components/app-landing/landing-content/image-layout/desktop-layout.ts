import { Photograph } from "../../../../global/interfaces";
import { LayoutUtils } from "./layout-utils";
import { ImagesWrapperConfig } from "../../../images-wrapper/images-wrapper";

export default class DesktopLayout {

  private static imagesWrappers: ImagesWrapperConfig[];

  static getLayoutWrappers(landspaceImages: Photograph[], portraitImages: Photograph[]) {

    DesktopLayout.imagesWrappers = [];

    const result = DesktopLayout.createEdgeCasesWrappers(landspaceImages, portraitImages);

    if (result) {
      return DesktopLayout.imagesWrappers;
    }

    const allImages = [...landspaceImages, ...portraitImages];

    DesktopLayout.checkImageArrSize(allImages);

    return DesktopLayout.imagesWrappers;
  }


  private static createEdgeCasesWrappers(landspaceImages: Photograph[],
    portraitImages: Photograph[]) {

    if (landspaceImages.length === 0 && portraitImages.length === 0) {
      return true;
    }

    // check if only landscape orientation images are present
    if (landspaceImages.length !== 0 && portraitImages.length === 0) {

      DesktopLayout.createLandscapeWrappers(landspaceImages);
      return true;
    }

    // check if only portrait orientation images are present
    if (landspaceImages.length === 0 && portraitImages.length !== 0) {

      DesktopLayout.createPortraitWrappers(portraitImages);
      return true;
    }

    // when total count is 4 it doesn't play well with the multiple of 3 approach
    if (landspaceImages.length + portraitImages.length === 4) {

      const mixedImages = [...landspaceImages, ...portraitImages];
      const image1 = LayoutUtils.extractRandomImage(mixedImages);
      const image2 = LayoutUtils.extractRandomImage(mixedImages);
      const image3 = LayoutUtils.extractRandomImage(mixedImages);
      const image4 = mixedImages[0];

      DesktopLayout.createTwoImagesWrapper(image1, image2, true);
      DesktopLayout.createTwoImagesWrapper(image3, image4, false);
      return true;
    }

    return false;
  }


  private static checkImageArrSize(images: Photograph[]) {

    if (images.length % 3 === 0) {
      DesktopLayout.createThreeImagesWrappers(images);

    } else {
      DesktopLayout.adjustSizeForNonMultiple(images);
    }
  }


  private static createThreeImagesWrappers(images: Photograph[]) {

    while (images.length !== 0) {
      const image1 = LayoutUtils.extractRandomImage(images);
      const image2 = LayoutUtils.extractRandomImage(images);
      const image3 = LayoutUtils.extractRandomImage(images);

      DesktopLayout.createThreeImagesWrapper(image1, image2, image3);
    }
  }


  private static adjustSizeForNonMultiple(images: Photograph[]) {

    let i = 0;

    while (images.length % 3 !== 0) {
      const image1 = LayoutUtils.extractRandomImage(images);
      const image2 = LayoutUtils.extractRandomImage(images);

      const reverseFlow = i % 2 === 0;
      i++;

      DesktopLayout.createTwoImagesWrapper(image1, image2, reverseFlow)
    }

    DesktopLayout.createThreeImagesWrappers(images);
  }


  // for landscape images
  private static createLandscapeWrappers(landscapeImages: Photograph[]) {

    if (landscapeImages.length === 1) {

      const wrapperConfig: ImagesWrapperConfig = {
        images: landscapeImages,
        styleClass: 'landscape-1-wrapper'
      }

      DesktopLayout.imagesWrappers.push(wrapperConfig);

    } else if (landscapeImages.length === 2) {

      DesktopLayout.createTwoImagesWrapper(landscapeImages[0], landscapeImages[1], false);

    } else {
      DesktopLayout.checkImageArrSize(landscapeImages);
    }
  }


  // for portrait images
  private static createPortraitWrappers(portraitImages: Photograph[]) {

    if (portraitImages.length === 1) {

      const wrapperConfig: ImagesWrapperConfig = {
        images: portraitImages,
        styleClass: 'portrait-1-wrapper'
      }

      DesktopLayout.imagesWrappers.push(wrapperConfig);

    } else if (portraitImages.length === 2) {

      DesktopLayout.createTwoImagesWrapper(portraitImages[0], portraitImages[1], false);

    } else {
      DesktopLayout.checkImageArrSize(portraitImages);
    }

  }


  // creates wrappers for 2 images per wrapper of same/mixed orientation
  private static createTwoImagesWrapper(image1: Photograph,
    image2: Photograph, reverseFlow: boolean) {

    let styleClass = LayoutUtils.getClassnameForTwoImagesWrapper(image1, image2);

    if (reverseFlow) {
      styleClass += ' flex-direction-reverse-row';
    }

    const wrapperConfig: ImagesWrapperConfig = {
      images: [image1, image2],
      styleClass
    }

    DesktopLayout.imagesWrappers.push(wrapperConfig);

  }


  // creates wrappers for 3 images per wrapper of same/mixed orientation
  private static createThreeImagesWrapper(image1: Photograph,
    image2: Photograph, image3: Photograph) {

    const styleClass = LayoutUtils.getClassNameForThreeImagesWrapper(image1, image2, image3);

    const wrapperConfig: ImagesWrapperConfig = {
      images: [image1, image2, image3],
      styleClass
    }

    DesktopLayout.imagesWrappers.push(wrapperConfig);

  }

}