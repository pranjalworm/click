import { Photograph } from '../global/interfaces';
import * as ImageData from '../global/image-data';


export default class PhotographService {

  // method to fetch the main banner image on landing page
  static getLandingBannerImage(viewingOnMobile: boolean, index: number): Photograph {

    if (viewingOnMobile) {
      return ImageData.BannersMobile[index];
    }

    return ImageData.BannersDesktop[index];
  }


  // method to fetch image for about-me page
  static getAboutMePageImage(): Photograph {

    return ImageData.AboutMeImage;
  }

}