import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/otherpage'>Other Page</Link>
      <Switch>
        <Route exact path='/' component={Fib} />
        <Route exact path='/otherpage' component={OtherPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
