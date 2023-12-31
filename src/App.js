import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {

  const auth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      {auth && <Header />}
      {auth && <UserProfile />}
      {!auth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
