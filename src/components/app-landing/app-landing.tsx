import { h, Component, ComponentInterface } from '@stencil/core';
import { Card } from '../../interfaces/Card';
import { Image } from '../../interfaces/Image';

@Component({
  tag: 'app-landing',
  styleUrl: 'app-landing.scss',
  shadow: true
})
export class CardLink implements ComponentInterface {

  private landingImage: Image = null;

  // TODO: fetch this value from a service
  private images: Image[] = [
    {
      url: './assets/images/church.jpg',
      alt: '',
      caption: 'We are all made up of pieces from people who have built and broken us.'
    }
  ];

  // TODO: fetch this value from a service
  private cards: Card[] = [
    {
      imageUrl: './assets/images/brothers-card.jpg',
      imageAlt: 'Brothers running on beach',
      title: 'portraits',
      link: ''
    },
    {
      imageUrl: './assets/images/gudiya.jpg',
      imageAlt: 'Brothers running on beach',
      title: 'weddings',
      link: ''
    },
    {
      imageUrl: './assets/images/sisters.jpg',
      imageAlt: 'Brothers running on beach',
      title: 'kids',
      link: ''
    },
    {
      imageUrl: './assets/images/gudiya.jpg',
      imageAlt: 'Brothers running on beach',
      title: 'weddings',
      link: ''
    }
  ];

  componentWillLoad() {
    this.landingImage = this.images[0];
  }

  render() {
    return (
      <div id="landing-root">

        <div class="landing-section">
          <div class="landing-image">
            <img src={this.landingImage.url} alt={this.landingImage.alt} />
          </div>
          <div class="landing-caption">
            <span>{this.landingImage.caption}</span>
          </div>
        </div>

        <div class="card-container">
          {
            this.cards.map((card: Card) => {
              return (
                <card-link
                  card={card}>
                </card-link>
              )
            })
          }
        </div>

      </div>
    );
  }
}
