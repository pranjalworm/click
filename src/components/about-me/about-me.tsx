import { h, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'about-me',
  styleUrl: 'about-me.scss',
  shadow: true
})
export class AboutMe implements ComponentInterface {

  render() {
    return (
      <div id="about-me-root">

        <div class="description">
          The quick brown fox jumps right over the lazy dog. The quick brown fox jumps right over the lazy dog. The quick brown fox jumps right over the lazy dog.
        </div>

        <div class="image-container">
          <img src="./assets/images/pranjal-dubey.jpg" alt="Pranjal Dubey self portrait" />
        </div>

      </div>
    )
  }
}