export enum AppRoutes {
  MAIN = 'main',
  BLACK_JACK = 'black_jack'
}

export type Route = {
  name: AppRoutes;
  element: () => JSX.Element;
};

export type AppRouterParams = {
  [AppRoutes.MAIN]: undefined;
  [AppRoutes.BLACK_JACK]: undefined;
};
