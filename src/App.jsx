import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Advantages } from './views/Advantages/Advantages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Advantages />
        </main>
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
