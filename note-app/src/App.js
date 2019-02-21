import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './layout/sideBar';
import notesView from './layout/notesView'
import {Route, withRouter} from 'react-router-dom';
import './index.css';
import DeleteModal from './layout/deleteModal'
import { connect } from 'react-redux';
import NewNote from './layout/addNote'

const Container = styled.div`
    display: flex;
 
`
const Views = styled.div`
  padding:5%;
`
const Modal = styled.div`
position: fixed;
z-index: 90;
display: flex;
margin-left:20%;
margin-top: 10%;
margin-right: 10%;
/* background-color: rgba(0, 0, 0, 0.3); */
`


class App extends Component {
  render() {
    return (
        <Container>
          
          <SideBar/>
          
          <Views>
          <div>{this.props.modalVisible && (<Modal><DeleteModal /></Modal>)}</div>
          

          <Route exact path='/' component={notesView}/>
          <Route exact path='/add' component={NewNote}/>
          {/* 
          
          <Route exact path='/notes/:noteId' component={SingleNote} />
          <Route path='/notes/:noteId/edit' component={EditNote}/> */}
          </Views>
        </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalVisible: state.modalVisible,
  };
};

export default withRouter(connect(mapStateToProps)(App));
