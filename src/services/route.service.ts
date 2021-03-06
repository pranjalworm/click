export interface Route {
  title?: string;
  url?: string | string[];
  exact?: boolean;
  urlMatch?: string | string[];
  component: string;
}


export const enum ROUTE_NAME {
  HOME = 'home',
  PORTFOLIO = 'portfolio',
  GALLERY = 'gallery',
  BLOG = 'blog',
  BOOK_A_SHOOT = 'book-a-shoot',
  ABOUT_ME = 'about-me',
  VIEW_IMAGE = 'view-image',
  PAGE_NOT_FOUND = 'page-not-found'
}


export const ROUTES: { [key: string]: Route } = {
  [ROUTE_NAME.HOME]: {
    title: 'home',
    url: '/',
    urlMatch: ['/'],
    exact: true,
    component: 'app-landing'
  },
  [ROUTE_NAME.PORTFOLIO]: {
    title: 'portfolio',
    url: '/portfolio',
    exact: true,
    component: 'portfolio-page'
  },
  [ROUTE_NAME.GALLERY]: {
    title: 'gallery',
    url: '/gallery/:galleryType',
    exact: true,
    component: 'gallery-page'
  },
  // [ROUTE_NAME.BLOG]: {
  //   title: 'blog',
  //   url: '/blog/',
  //   urlMatch: '/blog/*',
  //   component: 'blog-page'
  // },
  // [ROUTE_NAME.BOOK_A_SHOOT]: {
  //   title: 'book a shoot',
  //   url: '/book-a-shoot',
  //   exact: true,
  //   component: 'book-shoot'
  // },
  [ROUTE_NAME.ABOUT_ME]: {
    title: 'about me',
    url: '/about-me',
    exact: true,
    component: 'about-me'
  },
  [ROUTE_NAME.VIEW_IMAGE]: {
    title: 'view image',
    url: '/view-image/:galleryType/:index',
    exact: true,
    component: 'view-image'
  },
  [ROUTE_NAME.PAGE_NOT_FOUND]: {
    title: 'page not found',
    component: 'page-not-found'
  }
};


export class RouteService {

  static getHeaderRoutes(): Route[] {

    const headerRoutes: Route[] = [
      ROUTES[ROUTE_NAME.HOME],
      ROUTES[ROUTE_NAME.PORTFOLIO],
      // ROUTES[ROUTE_NAME.BLOG],
      // ROUTES[ROUTE_NAME.BOOK_A_SHOOT],
      ROUTES[ROUTE_NAME.ABOUT_ME]
    ]

    return headerRoutes;
  }


  static getAllRoutes(): Route[] {

    const routes: Route[] = Object.keys(ROUTES).map((key: ROUTE_NAME) => {
      return ROUTES[key]
    });

    return routes;
  }


  static getRoute(routeName: ROUTE_NAME): Route {
    return ROUTES[routeName];
  }
}