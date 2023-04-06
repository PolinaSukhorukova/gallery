import { Above } from './components/Above';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import { Mountain } from './components/Mountain';
import { Pick } from './components/Pick';
import { Spots } from './components/Spots';
import { Subscribe } from './components/Subscribe';
import './style/App.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Spots />
        <Above />
        <Pick />
        <Mountain />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
