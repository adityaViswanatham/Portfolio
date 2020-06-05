import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './component/Header/header';
import Profile from './component/Profile/profile';
import education from './component/Education/education';
import publication from './component/Publication/publication';
import research from './component/Research/research';
import student from './component/Student/student';

import './App.css';

function App() {
  const name = 'B.P.S. Murthi';
  return (
    <Container className='App'>
      <Router>
        <Switch>
          <Route path='/education' component={ education }/>
          <Route path='/publication'component={ publication } />
          <Route path='/research' component={ research } />
          <Route path='/student' component={ student }/>
          <Route path='/' component={ Profile } />
        </Switch>
      </Router>
      {/* <Profile name={ name }/> */}
    </Container>
  );
}

export default App;
