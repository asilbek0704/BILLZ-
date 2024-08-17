import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main style={{height: "70vh"}}></main>
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
