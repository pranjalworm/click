import { Photograph, GalleryType } from '../global/interfaces';
import * as ImageData from '../global/image-data';
import { Utils } from '../global/utils';


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

  /**
   * fetches the banner image for the specified gallery type according to the
   * user's device
   */
  static getGalleryBanner(galleryType: GalleryType): Photograph {

    const viewingOnMobile = Utils.isMobileScreen();

    switch (galleryType) {
      case GalleryType.PreWedding:
        return viewingOnMobile ? ImageData.PreWeddingBannerMobile :
          ImageData.PreWeddingBannerDesktop;

      case GalleryType.Travel:
        return viewingOnMobile ? ImageData.TravelBannerMobile :
          ImageData.TravelBannerDesktop;

      case GalleryType.Portrait:
        return viewingOnMobile ? ImageData.PortraitBannerMobile :
          ImageData.PortraitBannerDesktop;

      case GalleryType.Kids:
        return viewingOnMobile ? ImageData.KidsBannerMobile :
          ImageData.KidsBannerDesktop;

      case GalleryType.Street:
        return viewingOnMobile ? ImageData.StreetBannerMobile :
          ImageData.StreetBannerDesktop;
    }
  }

}