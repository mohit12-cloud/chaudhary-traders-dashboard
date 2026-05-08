import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Staff from './pages/Staff';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="sales" element={<Sales />} />
          <Route path="staff" element={<Staff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
