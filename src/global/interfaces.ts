export enum ImageOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export type Photograph = {
  url: string;
  caption?: string;
  location?: {
    city: string,
    country: string
  };
  date?: string;
  alt?: string;
  description?: string;
  orientation?: ImageOrientation;
  clickCallback?: (data: any) => void;
  index?: number;
}

export type Blog = {
  imageUrl: string;
  title: string;
  description?: string;
  blogImages: Photograph[]
}

export enum GalleryType {
  PreWedding = 'pre-wedding',
  Portrait = 'portrait',
  Travel = 'travel',
  Wallpapers = 'wallpapers',
  Kids = 'kids',
  Street = 'street',
}

export type Gallery = {
  imageUrlMobile: string;
  imageUrlDesktop: string;
  type: GalleryType;
  title: string;
  description?: string;
}

export enum CardListType {
  Gallery = 'gallery',
  Blog = 'blog',
}

export enum CardListMode {
  Page = 'page', // when card-links occupies the whole page
  Section = 'section', // when card-links are embedded in some other page
}


export enum ContentType {
  Portfolio = 'portfolio', // for displaying all the gallery cards,
  Gallery = 'gallery', // for displaying images of a specific galleryType
  Blog = 'blog', // for displaying all the blog cards
  BlogPost = 'blog-post' // for displaying a specific blog post
}

export enum StorageKeys {
  LandingBannerIndex = 'landing-banner-index'
}

export enum ToastMessageType {
  Success = 'success',
  Failure = 'failure'
}