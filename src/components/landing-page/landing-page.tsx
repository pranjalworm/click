import { Component } from '@stencil/core';
import { Image } from '../../interfaces/Image';
import { Card } from '../../interfaces/Card';
import UpdatesService from '../../services/updates.service';
import ImageService from '../../services/image.service';
import '@stencil/router';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.scss',
  shadow: false
})
export class LandingPage {

  private banner: Image = null;
  private updates: Card[] = []

  componentWillLoad() {

    this.getBannerImage();
    this.getRecentUpdates();
  }

  getBannerImage() {

    this.banner = ImageService.getBannerImage();
  }

  getRecentUpdates() {

    this.updates = UpdatesService.getRecentUpdates();
  }

  render() {

    return (

      <div class="page-root">

        {/* section 1 */}
        <div class="section section-1">
          <div class="banner-container">
            <div>
              <img src={this.banner.url} alt={this.banner.alt} />
            </div>
          </div>
          <div class="banner-caption">
            {this.banner.caption}
          </div>
          <div class="down-arrow">
            <a href="#section-galleries"><i class="fas fa-chevron-down"></i></a>
          </div>
        </div>

        {/* section 2 */}
        <div class="section section-2" id="section-galleries">
          <header>
            Galleries
          </header>

          <div class="galleries-list">
            <ul>
              <li>Street</li>
              <li>Portraits</li>
              <li>Children</li>
              <li>Fashion</li>
              <li class="see-all">All Galleries...</li>
            </ul>
          </div>
        </div>

        {/* section 3 */}
        <div class="section-3">
          <header>
            Recent Updates
          </header>

          <div class="updates-list">
            <ul>
              {
                this.updates.map(card => {
                  return (
                    <li>
                      <card-link
                        card={card}>
                      </card-link>
                    </li>
                  );
                })
              }
              <li class="see-all">All updates...</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
