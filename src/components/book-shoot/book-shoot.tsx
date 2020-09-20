import { h, Component, ComponentInterface } from '@stencil/core';
import { ROUTES, ROUTE_NAME } from '../../services/route.service';

@Component({
  tag: 'book-shoot',
  styleUrl: 'book-shoot.scss',
  shadow: true
})
export class BookShoot implements ComponentInterface {

  render() {
    return [
      <stencil-route-title pageTitle={ROUTES[ROUTE_NAME.BOOK_A_SHOOT].title}></stencil-route-title>,
      <div class="book-shoot-root">
        this is the Book a shoot page
      </div>
    ]
  }
}