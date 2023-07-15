import logo from './logo.svg';
import './App.css';
import TabsComponent from './components/TabsComponent';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CardsData from './components/CardsData';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TabsComponent />
        <CardsData />
      </div>
    </Provider>
  );
}

export default App;
