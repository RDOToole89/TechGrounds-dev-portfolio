import { UserProps } from './User';
// Refactor Sync to a generic class to customize the type of 'data' coming into save()

import axios, { AxiosPromise } from 'axios';

// Generic contraint interface
interface HasId {
  id?: number;
}

// By extending T with the HasId interface we are telling TypeScript that
// Sync will definite implement the poperties in that interface. Generic constraint.
export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
