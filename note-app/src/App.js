import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './layout/sideBar';
import notesView from './layout/notesView'
import {Route} from 'react-router-dom';

const Container = styled.div`
    background: #3a588e;
    width:95%;
    margin-left:2%;

`

class App extends Component {
  render() {
    return (
      <div >
        <Container>
          <SideBar/>
          <Route exact path='/' component={notesView}/>
          {/* 
          <Route exact path='/add' component={NewNote}/>
          <Route exact path='/notes/:noteId' component={SingleNote} />
          <Route path='/notes/:noteId/edit' component={EditNote}/> */}
        </Container>

      </div>
    );
  }
}

export default App;
