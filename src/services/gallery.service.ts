// import { Photograph } from "../global/interfaces";

import { GalleryType, Photograph } from "../global/interfaces";
import * as ImageData from '../global/image-data';
import { CardLinkConfig } from "../components/card-link/card-link";
import PhotographService from "./photograph.service";
import { GalleryText } from "../global/text-data/gallery-text";

export default class GalleryService {

  static getGalleryCards(): CardLinkConfig[] {

    let galleryCards: CardLinkConfig[] = [];

    for (let galleryType in GalleryType) {

      if (isNaN(Number(galleryType))) {

        const type = GalleryType[galleryType];

        const galleryCardConfig = GalleryService.createGalleryCard(type);
        galleryCards.push(galleryCardConfig);
      }
    }

    return galleryCards;
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
    }
  }


  private static createGalleryCard(galleryType: GalleryType): CardLinkConfig {

    return {
      image: PhotographService.getGalleryBanner(galleryType),
      title: GalleryService.getGalleryTitle(galleryType),
      description: GalleryService.getGalleryDescription(galleryType),
      contentId: galleryType
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
    }
  }

}