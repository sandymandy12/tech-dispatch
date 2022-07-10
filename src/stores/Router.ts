import { makeObservable, observable } from "mobx";

export type RoutePath = "app" | "home" | "feed";

export default class Router {
  path: RoutePath = "home";

  constructor() {
    makeObservable(this, {
      path: observable,
    });
  }
}
