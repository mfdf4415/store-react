import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(route => <Route index={route.path} path={route.path} element={route.element}></Route>)}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
