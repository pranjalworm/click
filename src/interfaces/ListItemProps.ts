export interface ListItemProps {
  listType: ListType;
}

export const enum ListType {
  gallery = 'gallery',
  blog = 'blog',
  images = 'images'
}