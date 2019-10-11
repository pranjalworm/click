// import { StorageService } from '../services/storage.service';
import { Image } from '../interfaces/Image';

const dummyData: Image[] = [
  {
    url: '../assets/images/church.jpg',
    caption: 'We are all made up of pieces from people who have built and broken us.',
    location: {
      city: 'Mysore',
      country: 'India'
    },
    date: 'April, 2019',
    alt: 'Alt text',
    description: 'Some description text'
  },
  {
    url: '../assets/images/sisters.jpg',
    caption: 'Follow your dreams.',
    location: {
      city: 'Mysore',
      country: 'India'
    },
    date: 'January, 2019',
    alt: 'Alt text',
    description: 'Some description text'
  },
  {
    url: '../assets/images/tanu.jpg',
    caption: 'Wish I could do that too.',
    location: {
      city: 'Bangalore',
      country: 'India'
    },
    date: 'November, 2018',
    alt: 'Alt text',
    description: 'Some description text'
  },
  {
    url: '../assets/images/gudiya.jpg',
    caption: 'Something like this',
    location: {
      city: 'Bangalore',
      country: 'India'
    },
    date: 'November, 2018',
    alt: 'Alt text',
    description: 'Some description text'
  }
];

// const bannerImages = [
//   {
//     url: '../assets/images/unnati.jpg',
//     caption: 'Unnati image caption',
//     location: null,
//     date: null,
//     alt: 'Alt text',
//     description: null
//   },
//   {
//     url: '../assets/images/couple.jpg',
//     caption: 'Couple image caption',
//     location: null,
//     date: null,
//     alt: 'Alt text',
//     description: null
//   },
//   {
//     url: '../assets/images/frisbee.jpg',
//     caption: 'Frisbee image caption',
//     location: null,
//     date: null,
//     alt: 'Alt text',
//     description: null
//   },
//   {
//     url: '../assets/images/church.jpg',
//     caption: 'We are all made up of pieces from people who have built and broken us.',
//     location: null,
//     date: null,
//     alt: 'Alt text',
//     description: null
//   }

// ]

export default class ImageService {

  // private banners = []

  static getImage(index: number): Image {

    return dummyData[index];
  }

  // static getBannerImage() {



  //   return banner;
  // } 
}