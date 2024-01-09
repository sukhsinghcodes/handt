import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { Financials } from './Financials';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Financials />
    </ChakraProvider>
  );
}

export default App;
