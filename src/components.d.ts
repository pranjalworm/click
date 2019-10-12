/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Card,
} from './interfaces/Card';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface AboutMe {}
  interface AppFooter {}
  interface AppHeader {}
  interface AppLanding {}
  interface AppRoot {}
  interface BookShoot {}
  interface CardLink {
    'card': Card;
    'history': RouterHistory;
  }
  interface ViewImage {}
}

declare global {


  interface HTMLAboutMeElement extends Components.AboutMe, HTMLStencilElement {}
  var HTMLAboutMeElement: {
    prototype: HTMLAboutMeElement;
    new (): HTMLAboutMeElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppLandingElement extends Components.AppLanding, HTMLStencilElement {}
  var HTMLAppLandingElement: {
    prototype: HTMLAppLandingElement;
    new (): HTMLAppLandingElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLBookShootElement extends Components.BookShoot, HTMLStencilElement {}
  var HTMLBookShootElement: {
    prototype: HTMLBookShootElement;
    new (): HTMLBookShootElement;
  };

  interface HTMLCardLinkElement extends Components.CardLink, HTMLStencilElement {}
  var HTMLCardLinkElement: {
    prototype: HTMLCardLinkElement;
    new (): HTMLCardLinkElement;
  };

  interface HTMLViewImageElement extends Components.ViewImage, HTMLStencilElement {}
  var HTMLViewImageElement: {
    prototype: HTMLViewImageElement;
    new (): HTMLViewImageElement;
  };
  interface HTMLElementTagNameMap {
    'about-me': HTMLAboutMeElement;
    'app-footer': HTMLAppFooterElement;
    'app-header': HTMLAppHeaderElement;
    'app-landing': HTMLAppLandingElement;
    'app-root': HTMLAppRootElement;
    'book-shoot': HTMLBookShootElement;
    'card-link': HTMLCardLinkElement;
    'view-image': HTMLViewImageElement;
  }
}

declare namespace LocalJSX {
  interface AboutMe {}
  interface AppFooter {}
  interface AppHeader {}
  interface AppLanding {}
  interface AppRoot {}
  interface BookShoot {}
  interface CardLink {
    'card'?: Card;
    'history'?: RouterHistory;
  }
  interface ViewImage {}

  interface IntrinsicElements {
    'about-me': AboutMe;
    'app-footer': AppFooter;
    'app-header': AppHeader;
    'app-landing': AppLanding;
    'app-root': AppRoot;
    'book-shoot': BookShoot;
    'card-link': CardLink;
    'view-image': ViewImage;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'about-me': LocalJSX.AboutMe & JSXBase.HTMLAttributes<HTMLAboutMeElement>;
      'app-footer': LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
      'app-header': LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
      'app-landing': LocalJSX.AppLanding & JSXBase.HTMLAttributes<HTMLAppLandingElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'book-shoot': LocalJSX.BookShoot & JSXBase.HTMLAttributes<HTMLBookShootElement>;
      'card-link': LocalJSX.CardLink & JSXBase.HTMLAttributes<HTMLCardLinkElement>;
      'view-image': LocalJSX.ViewImage & JSXBase.HTMLAttributes<HTMLViewImageElement>;
    }
  }
}


