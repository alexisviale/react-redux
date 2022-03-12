import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import UserList from './Components/UserList';
//redux
import { Provider } from 'react-redux';
import store from './Store'
function App() {
  return (
    <div className="App">
    <Provider store={store}> 
     <NavBar />
     <UserList />
    </Provider>
    </div>
  );
}

export default App;
