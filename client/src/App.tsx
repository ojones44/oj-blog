import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Page Imports
import { Blog, NotFound } from '@/pages';

export const App = () => (
  <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
