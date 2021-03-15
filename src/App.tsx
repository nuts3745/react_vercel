import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import ProtectedRoute from './ProtectedRoute';


function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <p></p>;
  }

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/support" exact component={Support} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
