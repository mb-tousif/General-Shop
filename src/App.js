import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DataProvider from './ContextApi/DataProvider';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box sx={{marginTop: "55px"}}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
