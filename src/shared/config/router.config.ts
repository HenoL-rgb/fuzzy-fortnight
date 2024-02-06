export enum AppRoutes {
  MAIN = 'main',
  BLACK_JACK = 'blackJack',
  WHEEL_OF_FORTUNE = 'wheelOfFortune',
  PROFILE = 'profile',
  SLOT_MACHINE = 'slotMachine',
  FRIENDS = 'friends',
  USER = 'user',
}

export enum PublicRoutes {
  LOGIN = 'login',
  REGISTER = 'register',
}

export enum MainRoutes {
  HOME = 'home',
  LEADERS_BOARD = 'leadersBoard',
  WALLET = 'wallet',
}

export type Route = {
  name: AppRoutes;
  element: () => JSX.Element;
};

export type AppRouterParams = {
  [AppRoutes.MAIN]: undefined;
  [AppRoutes.BLACK_JACK]: undefined;
  [AppRoutes.WHEEL_OF_FORTUNE]: undefined;
  [AppRoutes.PROFILE]: undefined;
  [AppRoutes.SLOT_MACHINE]: undefined;
  [AppRoutes.FRIENDS]: undefined;
  [AppRoutes.USER]: {
    id: number;
  };
};

export type MainRouterParams = {
  [MainRoutes.HOME]: undefined;
  [MainRoutes.LEADERS_BOARD]: undefined;
  [MainRoutes.WALLET]: undefined;
};

export type PublicRouterParams = {
  [PublicRoutes.LOGIN]: undefined;
  [PublicRoutes.REGISTER]: undefined;
}