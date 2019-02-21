import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './layout/sideBar';
import notesView from './layout/notesView'
import {Route} from 'react-router-dom';
import './index.css';

const Container = styled.div`
    display: flex;
 
`
const Views = styled.div`
  padding:5%;
`

class App extends Component {
  render() {
    return (
        <Container>
          <SideBar/>
          <Views>
          <Route exact path='/' component={notesView}/>
          {/* 
          <Route exact path='/add' component={NewNote}/>
          <Route exact path='/notes/:noteId' component={SingleNote} />
          <Route path='/notes/:noteId/edit' component={EditNote}/> */}
          </Views>
        </Container>
    );
  }
}

export default App;
