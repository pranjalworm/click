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

]

export default class ImageService {

  static getImage(index: number): Image {

    return dummyData[index];
  }

  static getBannerImage() {

    const banner: Image = {
      url: '../../assets/images/banner.jpg',
      caption: 'We are all made up of pieces from people who have built and broken us.',
      alt: 'St. Philomena\'s Church',
      location: null,
      date: null,
      description: null
    }

    return banner;
  }
}