import { Photograph } from '../global/interfaces';
import { ImageData } from './image-data';


export default class PhotographService {

  static imagesMasterMap: Map<number, Photograph> = new Map();

  static fetchImages() {

    let imageIndex = -1;

    for (const image of ImageData.allImages) {

      image.index = ++imageIndex;
      PhotographService.imagesMasterMap.set(image.index, image);
    }
  }

  static getImage(index: number): Photograph {

    return PhotographService.imagesMasterMap.get(index);
  }


  static getTotalImagesCount(): number {

    return ImageData.allImages.length;
  }


  // method to fetch the main banner image on landing page
  static getBannerImage(viewingOnMobile: boolean, index: number) {

    if (viewingOnMobile) {
      return ImageData.bannerImagesMobile[index];
    }

    return ImageData.bannerImagesDesktop[index];
  }


  // method to fetch image for about-me page
  static getAboutMePageImage() {

    return ImageData.aboutMeImage;
  }


  // method to fetch images to be displayed on landing page
  static getLandingImages(): Photograph[] {

    return ImageData.allImages;
  }

}

PhotographService.fetchImages();