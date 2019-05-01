export type Image = {
  url: string;
  caption: string;
  location: {
    city: string,
    country: string
  };
  date: string;
  alt: string;
  description: string;
}