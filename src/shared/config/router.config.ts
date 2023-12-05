export enum AppRoutes {
  MAIN = 'main',
  BLACK_JACK = 'blackJack',
  WHEEL_OF_FORTUNE = 'wheelOfFortune'
}

export type Route = {
  name: AppRoutes;
  element: () => JSX.Element;
};

export type AppRouterParams = {
  [AppRoutes.MAIN]: undefined;
  [AppRoutes.BLACK_JACK]: undefined;
  [AppRoutes.WHEEL_OF_FORTUNE]: undefined;
};
