import './App.css';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Main from './components/main';
function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
