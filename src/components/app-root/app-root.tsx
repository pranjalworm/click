import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div class="app-root">

        <div class="content">
          <header>
            Pranjal Dubey
          </header>
          
          <div class="content">
            <div class="banner-image-container">
              <img src="/assets/images/banner.jpg" alt="St. Philomena's Church" class="banner-image"/>
              <div class="banner-caption">
                We are all made up of pieces from people who have built and broken us.
              </div>
            </div>
          </div>

        </div>

        <footer>
          <div class="note">
            Under Construction
          </div>
          <div class="sub-note">
            I am currently working on this website, will launch it soon.
          </div>

          <div class="sub-note">
            <a href="https://www.instagram.com/pranjalworm/">@pranjalworm</a>
          </div>
          
        </footer>
        
      </div>
    );
  }
}
