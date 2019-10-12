import { h, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'book-shoot',
  styleUrl: 'book-shoot.scss',
  shadow: true
})
export class BookShoot implements ComponentInterface {

  render() {
    return (
      <div class="book-shoot-root">
        this is the Book a shoot page
      </div>
    )
  }
}