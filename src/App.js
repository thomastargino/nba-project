import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import './styles/globals.css';
import './styles/tailwind.css';


import Dashboard from './pages/Dashboard';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="fadeLeftFadeRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route path="/" exact component={Dashboard} />
                <Route path="/teams/:id" exact component={Team} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
};

export default App;
