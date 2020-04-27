/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory, } from "@stencil/router";
import { Photograph, } from "./global/interfaces";
export namespace Components {
    interface AboutMe {
    }
    interface AppFooter {
    }
    interface AppHeader {
    }
    interface AppLanding {
        "history": RouterHistory;
    }
    interface AppRoot {
    }
    interface AppSpinner {
    }
    interface BookShoot {
    }
    interface ImagesWrapper {
        "images": Photograph[];
        "styleClass": string;
    }
    interface LandingBanner {
    }
    interface LandingContent {
    }
    interface PageNotFound {
    }
    interface ViewImage {
        "history": RouterHistory;
        "match": MatchResults;
    }
}
declare global {
    interface HTMLAboutMeElement extends Components.AboutMe, HTMLStencilElement {
    }
    var HTMLAboutMeElement: {
        prototype: HTMLAboutMeElement;
        new (): HTMLAboutMeElement;
    };
    interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {
    }
    var HTMLAppFooterElement: {
        prototype: HTMLAppFooterElement;
        new (): HTMLAppFooterElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppLandingElement extends Components.AppLanding, HTMLStencilElement {
    }
    var HTMLAppLandingElement: {
        prototype: HTMLAppLandingElement;
        new (): HTMLAppLandingElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSpinnerElement extends Components.AppSpinner, HTMLStencilElement {
    }
    var HTMLAppSpinnerElement: {
        prototype: HTMLAppSpinnerElement;
        new (): HTMLAppSpinnerElement;
    };
    interface HTMLBookShootElement extends Components.BookShoot, HTMLStencilElement {
    }
    var HTMLBookShootElement: {
        prototype: HTMLBookShootElement;
        new (): HTMLBookShootElement;
    };
    interface HTMLImagesWrapperElement extends Components.ImagesWrapper, HTMLStencilElement {
    }
    var HTMLImagesWrapperElement: {
        prototype: HTMLImagesWrapperElement;
        new (): HTMLImagesWrapperElement;
    };
    interface HTMLLandingBannerElement extends Components.LandingBanner, HTMLStencilElement {
    }
    var HTMLLandingBannerElement: {
        prototype: HTMLLandingBannerElement;
        new (): HTMLLandingBannerElement;
    };
    interface HTMLLandingContentElement extends Components.LandingContent, HTMLStencilElement {
    }
    var HTMLLandingContentElement: {
        prototype: HTMLLandingContentElement;
        new (): HTMLLandingContentElement;
    };
    interface HTMLPageNotFoundElement extends Components.PageNotFound, HTMLStencilElement {
    }
    var HTMLPageNotFoundElement: {
        prototype: HTMLPageNotFoundElement;
        new (): HTMLPageNotFoundElement;
    };
    interface HTMLViewImageElement extends Components.ViewImage, HTMLStencilElement {
    }
    var HTMLViewImageElement: {
        prototype: HTMLViewImageElement;
        new (): HTMLViewImageElement;
    };
    interface HTMLElementTagNameMap {
        "about-me": HTMLAboutMeElement;
        "app-footer": HTMLAppFooterElement;
        "app-header": HTMLAppHeaderElement;
        "app-landing": HTMLAppLandingElement;
        "app-root": HTMLAppRootElement;
        "app-spinner": HTMLAppSpinnerElement;
        "book-shoot": HTMLBookShootElement;
        "images-wrapper": HTMLImagesWrapperElement;
        "landing-banner": HTMLLandingBannerElement;
        "landing-content": HTMLLandingContentElement;
        "page-not-found": HTMLPageNotFoundElement;
        "view-image": HTMLViewImageElement;
    }
}
declare namespace LocalJSX {
    interface AboutMe {
    }
    interface AppFooter {
    }
    interface AppHeader {
    }
    interface AppLanding {
        "history"?: RouterHistory;
    }
    interface AppRoot {
    }
    interface AppSpinner {
    }
    interface BookShoot {
    }
    interface ImagesWrapper {
        "images"?: Photograph[];
        "onWrapper-image-clicked"?: (event: CustomEvent<any>) => void;
        "styleClass"?: string;
    }
    interface LandingBanner {
        "onBanner-loaded"?: (event: CustomEvent<any>) => void;
    }
    interface LandingContent {
        "onContent-loaded"?: (event: CustomEvent<any>) => void;
    }
    interface PageNotFound {
    }
    interface ViewImage {
        "history"?: RouterHistory;
        "match"?: MatchResults;
    }
    interface IntrinsicElements {
        "about-me": AboutMe;
        "app-footer": AppFooter;
        "app-header": AppHeader;
        "app-landing": AppLanding;
        "app-root": AppRoot;
        "app-spinner": AppSpinner;
        "book-shoot": BookShoot;
        "images-wrapper": ImagesWrapper;
        "landing-banner": LandingBanner;
        "landing-content": LandingContent;
        "page-not-found": PageNotFound;
        "view-image": ViewImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-me": LocalJSX.AboutMe & JSXBase.HTMLAttributes<HTMLAboutMeElement>;
            "app-footer": LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-landing": LocalJSX.AppLanding & JSXBase.HTMLAttributes<HTMLAppLandingElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-spinner": LocalJSX.AppSpinner & JSXBase.HTMLAttributes<HTMLAppSpinnerElement>;
            "book-shoot": LocalJSX.BookShoot & JSXBase.HTMLAttributes<HTMLBookShootElement>;
            "images-wrapper": LocalJSX.ImagesWrapper & JSXBase.HTMLAttributes<HTMLImagesWrapperElement>;
            "landing-banner": LocalJSX.LandingBanner & JSXBase.HTMLAttributes<HTMLLandingBannerElement>;
            "landing-content": LocalJSX.LandingContent & JSXBase.HTMLAttributes<HTMLLandingContentElement>;
            "page-not-found": LocalJSX.PageNotFound & JSXBase.HTMLAttributes<HTMLPageNotFoundElement>;
            "view-image": LocalJSX.ViewImage & JSXBase.HTMLAttributes<HTMLViewImageElement>;
        }
    }
}
