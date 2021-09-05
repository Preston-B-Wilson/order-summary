import OrderSummary from "./components/OrderSummary";
import desktopBackground from './images/pattern-background-desktop.svg'

function App() {
  return (
    <div className="App">
      <div className="root-wrapper" style={{ backgroundImage: `url(${desktopBackground})` }}>
        <OrderSummary/>
      </div>
    </div>
  );
}

export default App;
