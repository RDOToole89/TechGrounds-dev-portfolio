// # Option #3
// Only accept properties into constructor
// Hard code dependencies as class properties

import axios, { AxiosResponse } from 'axios';
import { Eventing } from '../Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  // Because eventing is not a module likely to change it's ok in this particular project
  // to hardcode it into the User class without breaking the rules of composition.
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

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

const optionThreeUser = new User({});
