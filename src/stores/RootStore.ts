import { makeObservable } from "mobx";
import Authentication from "./Authentication";
import Router from "./Router";

export default class RootStore {
  readonly user: Authentication;
  readonly router = new Router();

  constructor() {
    makeObservable(this, {});

    this.user = new Authentication();
  }
}
