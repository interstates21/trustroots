import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
