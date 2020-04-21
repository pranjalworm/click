import { createStore } from "@stencil/store";

export const enum StoreProps {
  ViewingImage = 'viewing-image'
}

export class StoreService {

  static store;

  constructor(config: { [key: string]: any }) {

    StoreService.store = createStore(config);
  }

}