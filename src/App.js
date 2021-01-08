import { Switch, Route } from 'react-router-dom';

import './styles/globals.css';
import './styles/tailwind.css';

import Dashboard from './pages/Dashboard';
import Team from './pages/Team';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/teams/:id" exact component={Team} />
      </Switch>
    </>
  );
};

export default App;
