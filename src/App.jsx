import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Advantages } from './views/Advantages/Advantages';
import { Automation } from './views/Automation/Automation';
import { ChoiceTicker } from './views/ChoiceTicker/ChoiceTicker';
import { Reason } from './views/Reason/Reason';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Advantages />
          <Automation />
          <ChoiceTicker />
          <Reason />
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
