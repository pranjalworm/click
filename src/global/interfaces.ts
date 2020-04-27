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