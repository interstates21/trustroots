import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
};

export default App;
