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
}

export type Blog = {
  imageUrl: string;
  title: string;
  description?: string;
  blogImages: Photograph[]
}