import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatComponent from './components/ChatComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={ChatComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;