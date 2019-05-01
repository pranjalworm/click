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
  private updates: Card[] = [];
  private sections: Element[] = [];

  componentWillLoad() {

    this.getBannerImage();
    this.getRecentUpdates();
  }

  componentDidLoad() {
    this.getSections();
  }

  private getSections() {

    const galleries = document.getElementById('galleries');
    this.sections.push(galleries);

    const recentUpdates = document.getElementById('recent-updates');
    this.sections.push(recentUpdates);

    window['sections'] = this.sections;
  }

  getBannerImage() {

    this.banner = ImageService.getBannerImage();
  }

  getRecentUpdates() {

    this.updates = UpdatesService.getRecentUpdates();
  }

  scrollToSection(index: number) {

    this.sections[index].scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
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

          <footer class="down-arrow">
            {/* <a href="#section-galleries"><i class="fas fa-chevron-down"></i></a> */}
            <span onClick={() => { this.scrollToSection(0) }}><i class="fas fa-chevron-down"></i></span>
          </footer>
        </div>

        {/* section 2 */}
        <div class="section section-2" id="galleries">
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

          <footer class="down-arrow">
            {/* <a href="#recent-updates"><i class="fas fa-chevron-down"></i></a> */}
            <span onClick={() => { this.scrollToSection(1) }}><i class="fas fa-chevron-down"></i></span>
          </footer>
        </div>

        {/* section 3 */}
        <div class="section-3" id="recent-updates">
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
