import { Photograph, ImageOrientation } from "../interfaces";

export const KidsImages: Photograph[] = [
  {
    url: '25.jpg',
    alt: 'A baby playing with a toy and laughing',
    index: 0,
    orientation: ImageOrientation.Portrait
  },
  {
    url: '24.jpg',
    alt: 'A baby\'s portrait',
    index: 1,
    orientation: ImageOrientation.Landscape
  }
];

export const KidsBannerMobile: Photograph = {
  url: '25.jpg',
  alt: 'A baby playing with a toy and laughing'
}

export const KidsBannerDesktop: Photograph = {
  url: '24.jpg',
  alt: 'A baby\'s portrait'
}