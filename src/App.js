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
        <Route path="/artwork/:id" render={(routerProps) => <ArtShow {...routerProps}/>}></Route>

        <Route exact path="/search">
          <SearchBar />
        </Route>
        <Route path="/search/:search/artwork" render={(routerProps) => <ArtContainer {...routerProps}/>}></Route>

        <Route exact path="/departments">
          <DepartmentList />
        </Route>
        <Route path="/departments/:department/artwork" render={(routerProps) => <ArtContainer {...routerProps}/>}></Route>

      </Switch>

    </div>
  );
}

export default App;
