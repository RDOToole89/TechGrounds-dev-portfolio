// # Option #1
// Accept dependencies as second constructor argument
// This is an option but feels kind of UGLY codewise.
// Because everytime we create a new instance of User

// We also need to create a new instance of Eventing in the constructor
// new User({id: 1}, new Eventing())

// If we have one module this seems ok... but with every module we add
// it becomes messier. Example: new User({id: 1}, new Eventing(), new Sync())

import axios, { AxiosResponse } from 'axios';
import { Eventing } from '../Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps, private events: Eventing) {}

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

// This is NOT very pretty code!
const optionOneUser = new User({ id: 1 }, new Eventing());
