import { Photograph, ImageOrientation } from "../interfaces";

export const PreWeddingImages: Photograph[] = [
  {
    url: '29.jpg',
    alt: 'A couple\'s silhouette',
    index: 0,
    orientation: ImageOrientation.Portrait
  },
  {
    url: '45.jpg',
    alt: 'A couple sitting in a boat nearby a submerged church.',
    index: 1,
    orientation: ImageOrientation.Landscape
  },

];

export const PreWeddingBannerMobile: Photograph = {
  url: '29.jpg',
  alt: 'A couple\'s silhouette'
}

export const PreWeddingBannerDesktop: Photograph = {
  url: '45.jpg',
  alt: 'A couple sitting in a boat nearby a submerged church.',
}

