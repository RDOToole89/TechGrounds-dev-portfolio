// # Option #2
// Only accept the dependencies (submodules) into the constructor arguments
// Do all the rest of the the configurations in a 'static' class method
// to preconfigure User and assign properties afterwards

import axios, { AxiosResponse } from 'axios';
import { Eventing } from '../Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  static fromData(data: UserProps): User {
    const user = new User(new Eventing());
    user.set(data);
    return user;
  }

  private data: UserProps;

  constructor(events: Eventing) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}

const optionTwoUser = new User(new Eventing());
console.log(optionTwoUser);
