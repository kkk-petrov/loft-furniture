import './App.css';

import Header from './components/Header/Header.jsx';
import CategoryList from './components/Main/Categories/CategoryList.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main__container container">
          <CategoryList />
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container container"></div>
      </footer>
    </div>
  );
}

export default App;
