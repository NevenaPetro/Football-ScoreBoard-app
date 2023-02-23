
import CreateNewGame from './components/CreateNewGame';

import { ApplicationProvider } from './context/ApplicationContext';

function App() {


  return (
    <>
    <ApplicationProvider>
      <CreateNewGame />
      </ApplicationProvider>
    </>
  );
}

export default App;
