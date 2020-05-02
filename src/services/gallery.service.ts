// import { Photograph } from "../global/interfaces";

import { GalleryType, Photograph, CardListMode } from "../global/interfaces";
import * as ImageData from '../global/image-data';
import { CardLinkConfig } from "../components/card-link/card-link";
import { GalleryText } from "../global/text-data/gallery-text";
import { Utils } from "../global/utils";

export default class GalleryService {

  /**
   * @param cardCount number of cards required
   */
  static getGalleryCards(mode: CardListMode, cardCount?: number): CardLinkConfig[] {

    let galleryCards: CardLinkConfig[] = [];
    let counter = 0;

    for (let galleryType in GalleryType) {

      if (isNaN(Number(galleryType))) {

        if (cardCount && counter === cardCount) {
          break;
        }

        const type = GalleryType[galleryType];

        const galleryCardConfig = GalleryService.createGalleryCard(type, mode);

        galleryCards.push(galleryCardConfig);
        counter++;
      }
    }

    return galleryCards;
  }


  private static createGalleryCard(galleryType: GalleryType, mode: CardListMode): CardLinkConfig {

    return {
      image: GalleryService.getGalleryBanner(galleryType),
      title: GalleryService.getGalleryTitle(galleryType),
      description: GalleryService.getGalleryDescription(galleryType),
      contentId: galleryType,
      mode
    }
  }


  static getGalleryImages(galleryType: GalleryType): Photograph[] {

    switch (galleryType) {
      case GalleryType.PreWedding:
        return ImageData.PreWeddingImages;

      case GalleryType.Travel:
        return ImageData.TravelImages;

      case GalleryType.Portrait:
        return ImageData.PortraitImages;

      case GalleryType.Kids:
        return ImageData.KidsImages;

      case GalleryType.Street:
        return ImageData.StreetImages;

      case GalleryType.Wallpapers:
        return ImageData.WallpapersImages;

      default:
        throw new Error(`GalleryService > getGalleryImages > galleryType: ${galleryType} not found!`);
    }
  }


  static getGalleryTitle(galleryType: GalleryType): string {

    switch (galleryType) {
      case GalleryType.PreWedding:
        return GalleryText.GalleryTitle.PreWedding;

      case GalleryType.Travel:
        return GalleryText.GalleryTitle.Travel;

      case GalleryType.Portrait:
        return GalleryText.GalleryTitle.Portrait;

      case GalleryType.Kids:
        return GalleryText.GalleryTitle.Kids;

      case GalleryType.Street:
        return GalleryText.GalleryTitle.Street;

      case GalleryType.Wallpapers:
        return GalleryText.GalleryTitle.Wallpapers;

      default:
        throw new Error(`GalleryService > getGalleryTitle > galleryType: ${galleryType} not found!`);
    }
  }


  static getGalleryDescription(galleryType: GalleryType): string {

    switch (galleryType) {
      case GalleryType.PreWedding:
        return GalleryText.GalleryDescription.PreWedding;

      case GalleryType.Travel:
        return GalleryText.GalleryDescription.Travel;

      case GalleryType.Portrait:
        return GalleryText.GalleryDescription.Portrait;

      case GalleryType.Kids:
        return GalleryText.GalleryDescription.Kids;

      case GalleryType.Street:
        return GalleryText.GalleryDescription.Street;

      case GalleryType.Wallpapers:
        return GalleryText.GalleryDescription.Wallpapers;

      default:
        throw new Error(`GalleryService > getGalleryDescription > galleryType: ${galleryType} not found!`);
    }
  }


  static getGalleryImagesCount(galleryType: GalleryType) {

    switch (galleryType) {
      case GalleryType.PreWedding:
        return ImageData.PreWeddingImages.length;

      case GalleryType.Travel:
        return ImageData.TravelImages.length;

      case GalleryType.Portrait:
        return ImageData.PortraitImages.length;

      case GalleryType.Kids:
        return ImageData.KidsImages.length;

      case GalleryType.Street:
        return ImageData.StreetImages.length;

      case GalleryType.Wallpapers:
        return ImageData.WallpapersImages.length;

      default:
        throw new Error(`GalleryService > getGalleryImagesCount > galleryType: ${galleryType} not found!`);
    }
  }


  static getGalleryImage(galleryType: GalleryType, index: number) {

    switch (galleryType) {
      case GalleryType.PreWedding:
        return ImageData.PreWeddingImages[index];

      case GalleryType.Travel:
        return ImageData.TravelImages[index];

      case GalleryType.Portrait:
        return ImageData.PortraitImages[index];

      case GalleryType.Kids:
        return ImageData.KidsImages[index];

      case GalleryType.Street:
        return ImageData.StreetImages[index];

      case GalleryType.Wallpapers:
        return ImageData.WallpapersImages[index];

      default:
        throw new Error(`GalleryService > getGalleryImage > galleryType: ${galleryType} not found!`);
    }
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

      case GalleryType.Wallpapers:
        return viewingOnMobile ? ImageData.WallpapersBannerMobile :
          ImageData.WallpapersBannerDesktop;

      default:
        throw new Error(`GalleryService > getGalleryBanner > galleryType: ${galleryType} not found!`);
    }
  }


  static getIndexById(galleryType: GalleryType, id: number) {

    const galleryImages = GalleryService.getGalleryImages(galleryType);

    let index = 0;

    for (const image of galleryImages) {

      if (image.id === id) return index;

      index++;
    }
  }


}