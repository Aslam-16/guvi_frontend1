import './App.css';
import Footer from './components/layouts/footer.';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Main from './components/main';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
