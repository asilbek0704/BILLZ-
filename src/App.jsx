import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Advantages } from './views/Advantages/Advantages';
import { Automation } from './views/Automation/Automation';
import { ChoiceTicker } from './views/ChoiceTicker/ChoiceTicker';
import { Reason } from './views/Reason/Reason';
import { Privelege } from './views/Privelege/Privelege';
import { Partnership } from './views/Partnership/Partnership';
import { lazy, Suspense } from 'react';
import { ApplicationButton } from './components/ApplicationButton/ApplicationButton';
import { ReturnButton } from './components/ReturnButton/ReturnButton';
import { ApplicationSent } from './views/ApplicationSent/ApplicationSent';
const PartnershipForm = lazy(() =>
  import('./views/PartnershipForm/PartnershipForm')
);

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
          <Privelege />
          <Partnership />
          <Suspense fallback={<Container>Загрузка...</Container>}>
            <PartnershipForm />
          </Suspense>
        </main>
        <Footer />
        <ApplicationButton to='/application' />
      </>
    ),
  },
  {
    path: '/application',
    element: (
      <>
        <Header />
        <main>
          <ReturnButton to='/' />
          <Suspense fallback={<Container>Загрузка...</Container>}>
            <PartnershipForm />
          </Suspense>
        </main>
        <Footer />
        <ApplicationButton tag='button' formId='partnership-form' />
      </>
    ),
  },
  {
    path: '/application/sent',
    element: <ApplicationSent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
