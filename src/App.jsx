import './App.css';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import News from '../src/components/News';
import Articles from '../src/components/Articles';

function App() {
  return (
    <div className="font-primary desktop:px-40 desktop:pt-20">
      <Header />
      <div className="m-5">
        <div className="md:grid grid-cols-3 gap-7">
          <div className="col-span-2">
            <Hero />
          </div>
          <News />
        </div>
        <Articles />
      </div>
    </div>
  )
}

export default App
