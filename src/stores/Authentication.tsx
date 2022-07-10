import { useWeb3React, Web3ContextType } from "@web3-react/core";
import { computed, makeObservable, observable } from "mobx";

const INFURA_ID = process.env.REACT_APP_INFURA_ID as string;

export type User = {
  address?: string | undefined;
  name?: string | undefined;
  id?: string | undefined;
};

export default class Authentication {
  private _user: User | undefined;
  private _web3: Web3ContextType;

  constructor() {
    makeObservable<Authentication, "_user" | "_web3">(this, {
      _user: observable,
      _web3: observable,
      web3: computed,
      address: computed,
      isConnected: computed,
    });
    this._web3 = useWeb3React();
  }

  get web3() {
    return this._web3;
  }

  get isConnected() {
    return false;
  }

  get address() {
    if (!this.isConnected) return "";
    const account = "this is an account for now";
    console.log({ account });
    return `${account.slice(0, 6)}...${account.slice(
      account.length - 4,
      account.length
    )}`;
  }

  async connect() {
    return this.isConnected;
  }

  async logout() {}
}
