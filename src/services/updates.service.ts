import { Card } from '../interfaces/Card';


const dummyData: Card[] = [
  {
    imageUrl: '../../assets/images/sisters-card.jpg',
    imageAlt: 'alt text',
    description: 'Goa: without the Sea',
    link: 'goa'
  },
  {
    imageUrl: '../../assets/images/brother-card.jpg',
    imageAlt: 'alt text',
    description: 'Gokarna: a journey in solitude',
    link: 'gokarna'
  }
]

export default class UpdatesService {

  static getRecentUpdates() {

    return dummyData;
  }
}