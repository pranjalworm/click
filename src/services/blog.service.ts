import { Blog } from "../global/interfaces";

const allBlogs: Blog[] = [
  {
    imageUrl: '',
    title: '',
    description: '',
    blogImages: []
  },
  {
    imageUrl: '',
    title: '',
    description: '',
    blogImages: []
  },
  {
    imageUrl: '',
    title: '',
    description: '',
    blogImages: []
  },
  {
    imageUrl: '',
    title: '',
    description: '',
    blogImages: []
  },
  {
    imageUrl: '',
    title: '',
    description: '',
    blogImages: []
  }
];

export default class BlogService {

  static getAllBlogs() {
    return allBlogs;
  }

}