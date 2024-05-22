import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './stylesheet/style.scss';
import Router from './Router.jsx';
import PageLayout from './layouts/PageLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PageLayout>
      <Router />
    </PageLayout>
  </BrowserRouter>
);
