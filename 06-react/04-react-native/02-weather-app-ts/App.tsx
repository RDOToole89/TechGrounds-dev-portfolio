import { DarkModeProvider } from './src/context/DarkModeContext';
import { Home } from './src/screens/Home/Home';

export default function App() {
  return (
    <>
      <DarkModeProvider>
        <Home />
      </DarkModeProvider>
    </>
  );
}
