/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory, } from "@stencil/router";
import { ToastConfig, } from "./components/app-toast/app-toast";
import { CardLinkConfig, } from "./components/card-link/card-link";
import { CardListConfig, } from "./components/card-list/card-list";
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
    interface AppToast {
        "toastConfig": ToastConfig;
    }
    interface BookShoot {
    }
    interface CardLink {
        "cardLinkConfig": CardLinkConfig;
    }
    interface CardList {
        "config": CardListConfig;
    }
    interface GalleryPage {
        "history": RouterHistory;
        "match": MatchResults;
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
    interface PortfolioPage {
        "history": RouterHistory;
        "match": MatchResults;
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
    interface HTMLAppToastElement extends Components.AppToast, HTMLStencilElement {
    }
    var HTMLAppToastElement: {
        prototype: HTMLAppToastElement;
        new (): HTMLAppToastElement;
    };
    interface HTMLBookShootElement extends Components.BookShoot, HTMLStencilElement {
    }
    var HTMLBookShootElement: {
        prototype: HTMLBookShootElement;
        new (): HTMLBookShootElement;
    };
    interface HTMLCardLinkElement extends Components.CardLink, HTMLStencilElement {
    }
    var HTMLCardLinkElement: {
        prototype: HTMLCardLinkElement;
        new (): HTMLCardLinkElement;
    };
    interface HTMLCardListElement extends Components.CardList, HTMLStencilElement {
    }
    var HTMLCardListElement: {
        prototype: HTMLCardListElement;
        new (): HTMLCardListElement;
    };
    interface HTMLGalleryPageElement extends Components.GalleryPage, HTMLStencilElement {
    }
    var HTMLGalleryPageElement: {
        prototype: HTMLGalleryPageElement;
        new (): HTMLGalleryPageElement;
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
    interface HTMLPortfolioPageElement extends Components.PortfolioPage, HTMLStencilElement {
    }
    var HTMLPortfolioPageElement: {
        prototype: HTMLPortfolioPageElement;
        new (): HTMLPortfolioPageElement;
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
        "app-toast": HTMLAppToastElement;
        "book-shoot": HTMLBookShootElement;
        "card-link": HTMLCardLinkElement;
        "card-list": HTMLCardListElement;
        "gallery-page": HTMLGalleryPageElement;
        "images-wrapper": HTMLImagesWrapperElement;
        "landing-banner": HTMLLandingBannerElement;
        "landing-content": HTMLLandingContentElement;
        "page-not-found": HTMLPageNotFoundElement;
        "portfolio-page": HTMLPortfolioPageElement;
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
    interface AppToast {
        "toastConfig"?: ToastConfig;
    }
    interface BookShoot {
    }
    interface CardLink {
        "cardLinkConfig"?: CardLinkConfig;
        "onCard-link-clicked"?: (event: CustomEvent<any>) => void;
    }
    interface CardList {
        "config"?: CardListConfig;
    }
    interface GalleryPage {
        "history"?: RouterHistory;
        "match"?: MatchResults;
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
        "onSection-title-clicked"?: (event: CustomEvent<any>) => void;
    }
    interface PageNotFound {
    }
    interface PortfolioPage {
        "history"?: RouterHistory;
        "match"?: MatchResults;
    }
    interface ViewImage {
        "history"?: RouterHistory;
        "match"?: MatchResults;
        "onShow-toast"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "about-me": AboutMe;
        "app-footer": AppFooter;
        "app-header": AppHeader;
        "app-landing": AppLanding;
        "app-root": AppRoot;
        "app-spinner": AppSpinner;
        "app-toast": AppToast;
        "book-shoot": BookShoot;
        "card-link": CardLink;
        "card-list": CardList;
        "gallery-page": GalleryPage;
        "images-wrapper": ImagesWrapper;
        "landing-banner": LandingBanner;
        "landing-content": LandingContent;
        "page-not-found": PageNotFound;
        "portfolio-page": PortfolioPage;
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
            "app-toast": LocalJSX.AppToast & JSXBase.HTMLAttributes<HTMLAppToastElement>;
            "book-shoot": LocalJSX.BookShoot & JSXBase.HTMLAttributes<HTMLBookShootElement>;
            "card-link": LocalJSX.CardLink & JSXBase.HTMLAttributes<HTMLCardLinkElement>;
            "card-list": LocalJSX.CardList & JSXBase.HTMLAttributes<HTMLCardListElement>;
            "gallery-page": LocalJSX.GalleryPage & JSXBase.HTMLAttributes<HTMLGalleryPageElement>;
            "images-wrapper": LocalJSX.ImagesWrapper & JSXBase.HTMLAttributes<HTMLImagesWrapperElement>;
            "landing-banner": LocalJSX.LandingBanner & JSXBase.HTMLAttributes<HTMLLandingBannerElement>;
            "landing-content": LocalJSX.LandingContent & JSXBase.HTMLAttributes<HTMLLandingContentElement>;
            "page-not-found": LocalJSX.PageNotFound & JSXBase.HTMLAttributes<HTMLPageNotFoundElement>;
            "portfolio-page": LocalJSX.PortfolioPage & JSXBase.HTMLAttributes<HTMLPortfolioPageElement>;
            "view-image": LocalJSX.ViewImage & JSXBase.HTMLAttributes<HTMLViewImageElement>;
        }
    }
}
