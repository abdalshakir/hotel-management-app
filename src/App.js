import './App.css';
import AppRouter from './config/AppRouter'
import store from './store/IndexRedux';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
