import { h, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'about-me',
  styleUrl: 'about-me.scss',
  shadow: true
})
export class AboutMe implements ComponentInterface {

  render() {
    return (
      <div class="about-me-root">
        this is the about me page
      </div>
    )
  }
}