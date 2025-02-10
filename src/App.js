import React, { lazy, Suspense } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderBlock from './components/OrderBlock';
import { links } from './data/links';

// Dynamicky načítané stránky (uložené v objekte, aby sa React.lazy nespúšťal stále znova)
const pages = links.reduce((acc, link) => {
  acc[link.page] = lazy(() => 
    import(`./pages/${link.page.toLowerCase()}`)
      .catch(() => ({ default: () => <h2>Chyba pri načítaní stránky</h2> }))
  );
  return acc;
}, {});

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Header />
        
        
          <Routes>
            {links.map((link, index) => {
              const Page = pages[link.page]; // Použijeme prednačítaný lazy komponent
              return <Route key={index} path={link.url} element={<Page />} />;
            })}
          </Routes>
          <div className='app__order-block'>
            <OrderBlock />
          </div>
        
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;

