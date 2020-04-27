import { Photograph } from '../global/interfaces';
import { ImageData } from './image-data';


export default class PhotographService {

  static imagesMasterMap: Map<number, Photograph> = new Map();

  static getImage(index: number): Photograph {

    return PhotographService.imagesMasterMap.get(index);
  }


  static getTotalImagesCount(): number {

    return ImageData.dummyData.length;
  }


  // method to fetch the main banner image on landing page
  static getBannerImage(viewingOnMobile: boolean, index: number) {

    if (viewingOnMobile) {
      return ImageData.landingImagesMobile[index];
    }

    return ImageData.landingImagesDesktop[index];
  }


  // method to fetch image for about-me page
  static getAboutMePageImage() {

    const image: Photograph = {
      url: '../assets/images/10.jpg',
      alt: 'Pranjal Dubey'
    };

    return image;
  }


  // method to fetch images to be displayed on landing page
  static getLandingImages(): Promise<Photograph[]> {

    const images = ImageData.dummyData;

    let imageIndex = -1;

    for (const image of images) {

      image.index = ++imageIndex;
      PhotographService.imagesMasterMap.set(image.index, image);
    }

    // return new Promise(resolve => setTimeout(resolve, 5000, dummyData));

    return Promise.resolve(images);
  }

}