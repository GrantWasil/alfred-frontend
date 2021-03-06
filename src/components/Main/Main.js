import React from 'react';
import { Box } from 'grommet';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import Create from '../Create/Create';
import api from '../../utils/Api';
import './Main.css';

function Main() {

  function handleCreateCharacter(keyword, name, traits, preview) {
    api.createNewCharacter(keyword, name, traits, preview)
      .then((data) => {
        console.log(data)
      })
      .catch(e => console.log(e));
  }

  return (
    <Box flex fill="vertical" align="center" background={'light-2'}>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/create">
        <Create onCreateCharacter={handleCreateCharacter} />
      </Route>
    </Box>
  );
}

export default Main;
