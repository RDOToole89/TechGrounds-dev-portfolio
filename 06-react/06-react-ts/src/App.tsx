import { EventComponent } from './examples/events/EventComponents';
import { GuestList } from './examples/state/GuestList';
import { UserSearch } from './examples/state/UserSearch';

export const App = () => {
  return (
    <div>
      <h1> Hi There!</h1>
      <GuestList />
      <UserSearch />
      <br />
      <EventComponent />
    </div>
  );
};
