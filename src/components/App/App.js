import './App.css';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Delivery from '../Delivery/Delivery';
import Tables from '../Tables/Tables';
import DeliveryFuel from '../DeliveryFuel/DeliveryFuel';
import HowWork from '../HowWork/HowWork';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Delivery />
      <Tables />
      <DeliveryFuel />
      <HowWork />
    </div>
  );
}

export default App;
