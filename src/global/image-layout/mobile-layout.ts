import { Photograph } from "../interfaces";
import { ImagesWrapperConfig } from "../../components/images-wrapper/images-wrapper";

export default class MobileLayout {


  static getLayoutWrappers(landspaceImages: Photograph[], portraitImages: Photograph[]) {

    const landscapeWrappers = MobileLayout.createLandscapeWrappers(landspaceImages);
    const portraitWrappers = MobileLayout.createPortraitWrappers(portraitImages);

    return MobileLayout.arrangeWrappers(landscapeWrappers, portraitWrappers);
  }


  // create divs to hold a single landscape image per div
  private static createLandscapeWrappers(landscapeImages: Photograph[]) {

    const landscapeWrappers: ImagesWrapperConfig[] = [];

    for (const image of landscapeImages) {

      const wrapperConfig: ImagesWrapperConfig = {
        images: [image],
        styleClass: 'landscape-wrapper'
      }

      landscapeWrappers.push(wrapperConfig);
    }

    return landscapeWrappers;

  }


  // create divs to hold two portrait images per div
  private static createPortraitWrappers(portraitImages: Photograph[]) {

    const portraitWrappers: ImagesWrapperConfig[] = [];

    // if odd number of portrait images, take the last one out and put it in its
    // own separate wrapper
    if (portraitImages.length % 2 !== 0) {

      const lastImage = portraitImages.splice(-1, 1)[0];

      const wrapperConfig: ImagesWrapperConfig = {
        images: [lastImage],
        styleClass: 'single-portrait-wrapper'
      }

      portraitWrappers.push(wrapperConfig);
    }

    // put two portrait images in one wrapper
    for (let i = 0; i < portraitImages.length; i += 2) {

      const image1 = portraitImages[i];
      const image2 = portraitImages[i + 1];

      const wrapperConfig: ImagesWrapperConfig = {
        images: [image1, image2],
        styleClass: 'portrait-wrapper'
      }

      portraitWrappers.push(wrapperConfig);
    }

    return portraitWrappers;

  }


  // arrange landscape & portrait wrappers in alternation
  private static arrangeWrappers(landscapeWrappers: ImagesWrapperConfig[],
    portraitWrappers: ImagesWrapperConfig[]) {

    const totalCount = landscapeWrappers.length + portraitWrappers.length;

    const imageWrappers = [];

    for (let l = 0, p = 0, k = 0; k < totalCount; k++) {

      if (k % 2 === 0) {

        if (l < landscapeWrappers.length) {
          const wrapper = landscapeWrappers[l];
          imageWrappers.push(wrapper);
          l++;

        } else {
          const wrapper = portraitWrappers[p];
          imageWrappers.push(wrapper);
          p++;
        }

      } else {

        if (p < portraitWrappers.length) {
          const wrapper = portraitWrappers[p];
          imageWrappers.push(wrapper);
          p++;

        } else {
          const wrapper = landscapeWrappers[l];
          imageWrappers.push(wrapper);
          l++
        }
      }
    }

    return imageWrappers;
  }

}