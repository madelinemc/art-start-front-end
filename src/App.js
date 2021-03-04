import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ArtStartHeader from './components/ArtStartHeader';
import ArtContainer from './components/ArtContainer';
import ArtShow from './components/ArtShow';
import SearchBar from './components/SearchBar';
import DepartmentList from './components/DepartmentList';

function App() {
  return (
    <div className="App">
      <ArtStartHeader />

      <Switch>

        <Route exact path="/artwork">
          <ArtContainer />
        </Route>
        <Route path="/artwork/:id">
          <ArtShow />
        </Route>

        <Route exact path="/search">
          <SearchBar />
        </Route>
        <Route path="/search/:keyword/artwork">
          <ArtContainer />
        </Route>

        <Route exact path="/departments">
          <DepartmentList />
        </Route>
        <Route path="/departments/:id/artwork">
          <ArtContainer />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
