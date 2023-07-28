import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/form/Form';
import SuccessPage from './pages/success/Success';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FormPage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </>
  );
}

export default App;
