import { Box } from '@mui/material';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DataProvider from './ContextApi/DataProvider';
import FashionDetail from './components/DetailPages/FashionDetail';
import FurnitureDetail from './components/DetailPages/FurnitureDetail';
import TopOfferDetail from './components/DetailPages/TopOfferDetail';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box sx={{ marginTop: "55px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion/:id" element={<FashionDetail/>} />
          <Route path="/furniture/:id" element={<FurnitureDetail/>} />
          <Route path="/topOffer/:id" element={<TopOfferDetail/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Box>
    </DataProvider>
  );
}

export default App;
