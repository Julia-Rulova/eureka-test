import './App.css';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Delivery from '../Delivery/Delivery';
import Tables from '../Tables/Tables';
import DeliveryFuel from '../DeliveryFuel/DeliveryFuel';
import HowWork from '../HowWork/HowWork';
import Benefits from '../Benefits/Benefits';
import Certificates from '../Certificates/Cerficates';
import Partners from '../Partners/Partners';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Delivery />
      <Tables />
      <DeliveryFuel />
      <HowWork />
      <Benefits />
      <Certificates />
      <Partners />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
