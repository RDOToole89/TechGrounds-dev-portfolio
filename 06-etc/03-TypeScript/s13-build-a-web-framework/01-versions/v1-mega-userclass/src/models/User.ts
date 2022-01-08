import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Type Alias for a Callback function that returns nothing
type Callback = () => void;

export class User {
  // Events is going to be  and object with keys that are string
  // and has an array of Callbacks. After we initialize it to an empty object.
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  // Gets a specific piece of data from the user
  get(propName: string): string | number {
    return this.data[propName];
  }

  // Updates the user by setting an object
  set(update: UserProps): void {
    // Manually => update
    // this.data.name = update.name;
    // this.data.age = update.age;

    // // Update with a loop
    // for (const [key, value] of Object.entries(update)) {
    //   this.data[key] = value;
    // }

    // Update with Object.assign(); copies all the properties of one object
    // into the other
    Object.assign(this.data, update);
  }

  // Eventing system

  // Registers an event with string name and a callback
  on(eventName: string, callback: Callback): void {
    // Because when the User is first created the event doesn't yet exist we specify
    // that it should be either that event or an empty array
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  // Triggers the events
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  }

  // Method to fetch information about the user from a server
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  // In the save method we need to check whether the user has an ID, this means this user
  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
