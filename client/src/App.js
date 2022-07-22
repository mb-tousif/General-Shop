import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Box sx={{marginTop: "55px"}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
