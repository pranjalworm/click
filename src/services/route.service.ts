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
  // BLOG = 'blog',
  // BOOK_A_SHOOT = 'book-a-shoot',
  ABOUT_ME = 'about-me',
  VIEW_IMAGE = 'view-image',
  PAGE_NOT_FOUND = 'page-not-found'
}


const ROUTES: { [key: string]: Route } = {
  [ROUTE_NAME.HOME]: {
    title: '',
    url: '/',
    exact: true,
    component: 'app-landing'
  },
  [ROUTE_NAME.PORTFOLIO]: {
    title: 'portfolio',
    url: '/portfolio',
    urlMatch: ['/', '/portfolio'],
    exact: true,
    component: 'app-landing'
  },
  // [ROUTE_NAME.BLOG]: {
  //   title: 'blog',
  //   url: '/blog/',
  //   urlMatch: '/blog/*',
  //   component: 'blog'
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
    url: '/view-image/:index',
    exact: true,
    component: 'view-image'
  },
  [ROUTE_NAME.PAGE_NOT_FOUND]: {
    component: 'page-not-found'
  }
};


export class RouteService {


  static getHeaderRoutes(): Route[] {

    const headerRoutes: Route[] = [
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