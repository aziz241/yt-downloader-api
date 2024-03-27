
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SiteProvider from "./components/Context/Context";
import Download from './components/Downloaded_video';

function App() {



  return (
    <div className="App">
      <SiteProvider>
        <Header />
        <Main />
        <Download />
        <Footer />
      </SiteProvider>
    </div>
  );
}

export default App;
