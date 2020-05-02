import { Photograph, ImageOrientation } from "../interfaces";

export const PortraitImages: Photograph[] = [
  {
    url: '22.jpg',
    alt: 'A girl\'s portrait',
    index: 0,
    orientation: ImageOrientation.Portrait
  },
  {
    url: '23.jpg',
    alt: 'A girl\'s portrait',
    index: 1,
    orientation: ImageOrientation.Landscape
  },
  {
    url: '21.jpg',
    alt: 'A girl\'s portrait',
    index: 2,
    orientation: ImageOrientation.Portrait
  },
  {
    url: '38.jpg',
    alt: 'A girl\'s portrait',
    index: 3,
    orientation: ImageOrientation.Portrait
  },
  {
    url: '42.jpg',
    alt: 'A girl\'s portrait',
    index: 4,
    orientation: ImageOrientation.Portrait
  },
  {
    url: '41.jpg',
    alt: 'A girl\'s portrait',
    index: 5,
    orientation: ImageOrientation.Landscape
  }

];

export const PortraitBannerMobile: Photograph = {
  url: '21.jpg',
  alt: 'A girl\'s portrait on a beach'
}

export const PortraitBannerDesktop: Photograph = {
  url: '23.jpg',
  alt: 'A girl\'s closeup black and white portrait'
}

