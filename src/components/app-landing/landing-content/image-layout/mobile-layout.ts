import { Photograph } from "../../../../global/interfaces";

export default class MobileLayout {


  static getLayoutWrappers(landspaceImages: Photograph[], portraitImages: Photograph[]) {

    const landscapeWrappers = MobileLayout.createLandscapeWrappers(landspaceImages);
    const portraitWrappers = MobileLayout.createPortraitWrappers(portraitImages);
    return MobileLayout.arrangeWrappers(landscapeWrappers, portraitWrappers);
  }


  // create divs to hold a single landscape image per div
  private static createLandscapeWrappers(landscapeImages: Photograph[]) {

    const landscapeWrappers: HTMLElement[] = [];

    for (const image of landscapeImages) {

      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'landscape-wrapper');

      const img = new Image();
      img.src = image.url;

      wrapper.appendChild(img);

      landscapeWrappers.push(wrapper);
    }

    return landscapeWrappers;

  }


  // create divs to hold two portrait images per div
  private static createPortraitWrappers(portraitImages: Photograph[]) {

    const portraitWrappers: HTMLElement[] = [];

    // if odd number of portrait images, take the last one out and put it in its
    // own separate wrapper
    if (portraitImages.length % 2 !== 0) {

      const lastImage = portraitImages.splice(-1, 1)[0];
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'single-portrait-wrapper');
      const img = new Image();
      img.src = lastImage.url;
      wrapper.appendChild(img);
      portraitWrappers.push(wrapper);
    }

    // put two portrait images in one wrapper
    for (let i = 0; i < portraitImages.length; i += 2) {

      const image1 = portraitImages[i];
      const image2 = portraitImages[i + 1];

      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'portrait-wrapper');

      const img1 = new Image();
      const img2 = new Image();

      img1.src = image1.url;
      img2.src = image2.url;

      wrapper.appendChild(img1);
      wrapper.appendChild(img2);

      portraitWrappers.push(wrapper);
    }

    return portraitWrappers;

  }


  // arrange landscape & portrait wrappers in alternation
  private static arrangeWrappers(landscapeWrappers: HTMLElement[],
    portraitWrappers: HTMLElement[]) {

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