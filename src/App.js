import logo from './logo.svg';
import './App.css';
import Userinput from './pages/user';
import { Dashboard } from './pages/dashbord';
import { Provider } from 'react-redux';
import store from './redux/store'
import { Admin } from './pages/admin';
import NavBar from './components/navbar';
import Allroutes from './routes/allroutes';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <Allroutes/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
