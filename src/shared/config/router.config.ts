export enum AppRoutes {
  MAIN = 'main',
}

export type Route = {
  name: AppRoutes;
  element: () => JSX.Element;
};

export type AppRouterParams = {
  [AppRoutes.MAIN]: undefined;
};
