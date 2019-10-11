export interface Route {
  title: string;
  url: string;
  exact?: boolean;
  urlMatch?: string;
  component: string;
}

export const ROUTE_NAMES = {
  home: 'home',
  galleries: 'galleries',
  blog: 'blog',
  'book-a-shoot': 'book-a-shoot',
  'about-me': 'about-me'
}

const ROUTES: { [key: string]: Route } = {
  [ROUTE_NAMES['home']]: {
    title: '',
    url: '/',
    exact: true,
    component: 'app-landing'
  },
  [ROUTE_NAMES['galleries']]: {
    title: 'galleries',
    url: '/galleries/',
    urlMatch: '/galleries/*',
    component: 'list-items'
  },
  [ROUTE_NAMES['blog']]: {
    title: 'blog',
    url: '/blog/',
    urlMatch: '/blog/*',
    component: 'list-items'
  },
  [ROUTE_NAMES['book-a-shoot']]: {
    title: 'book a shoot',
    url: '/book-a-shoot',
    exact: true,
    component: 'book-shoot'
  },
  [ROUTE_NAMES['about-me']]: {
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

  static getRoutes(): Route[] {

    const routes: Route[] = [
      ROUTES['home'],
      ROUTES['galleries'],
      ROUTES['blog'],
      ROUTES['book-a-shoot'],
      ROUTES['about-me']
    ];

    return routes;
  }
}