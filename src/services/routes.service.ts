export interface Route {
  title: string;
  url: string;
  exact?: boolean;
  urlMatch?: string;
  component: string;
}

export const enum ROUTE_NAMES {
  home = 'home',
  galleries = 'galleries',
  blog = 'blog',
  bookAShoot = 'book-a-shoot',
  aboutMe = 'about-me'
}

const ROUTES: { [key: string]: Route } = {
  [ROUTE_NAMES.home]: {
    title: '',
    url: '/',
    exact: true,
    component: 'app-landing'
  },
  [ROUTE_NAMES.galleries]: {
    title: 'galleries',
    url: '/galleries/',
    urlMatch: '/galleries/*',
    component: 'list-items'
  },
  [ROUTE_NAMES.blog]: {
    title: 'blog',
    url: '/blog/',
    urlMatch: '/blog/*',
    component: 'list-items'
  },
  [ROUTE_NAMES.bookAShoot]: {
    title: 'book a shoot',
    url: '/book-a-shoot',
    exact: true,
    component: 'book-shoot'
  },
  [ROUTE_NAMES.aboutMe]: {
    title: 'about me',
    url: '/about-me',
    exact: true,
    component: 'about-me'
  }
};

export class RouteService {

  static getHeaderRoutes(): Route[] {

    const headerRoutes: Route[] = [
      ROUTES['galleries'],
      ROUTES['blog'],
      ROUTES['book-a-shoot'],
      ROUTES['about-me']
    ]

    return headerRoutes;
  }

  static getAllRoutes(): Route[] {

    const routes: Route[] = [
      ROUTES['home'],
      ROUTES['galleries'],
      ROUTES['blog'],
      ROUTES['book-a-shoot'],
      ROUTES['about-me']
    ];

    return routes;
  }

  static getRoute(routeName: ROUTE_NAMES): Route {
    return ROUTES[routeName]
  }
}