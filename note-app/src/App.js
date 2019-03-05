import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './layout/sideBar';
import notesView from './layout/notesView'
import {Route, withRouter} from 'react-router-dom';
import './index.css';
import DeleteModal from './layout/deleteModal'
import { connect } from 'react-redux';
import NewNote from './layout/addNote'
import EditView from './layout/editView'
import Note from './layout/singleNote'
import login from './authorization/login'
import register from './authorization/register'

const AppContainer = styled.div`
    display: flex;
`
const Views = styled.div`
  padding:5%;
  width:100%;
  overflow-y:scroll;
  height:100vh;
  @media(max-width:500px){
    position: relative;
    top:125px;
    overflow-y:auto;
  };
`
const Modal = styled.div`
position: fixed;
z-index: 90;
display: flex;
margin-left:-19%;
margin-top: -5%;
background: rgba(0, 0, 0, 0.5);
height: 100vh;
width: 100vw;
`


class App extends Component {

  render() {
    return (
        <AppContainer>
          <SideBar/>
          <Views>
          <div>{this.props.modalVisible && (<Modal><DeleteModal /></Modal>)}</div>
          <Route exact path='/' component={notesView}/>
          <Route path='/add' component={NewNote}/>
          <Route path="/edit/:id" component={EditView} />
          <Route path="/view/:id" component={Note} />
          <Route path="/login" component={login} />
          <Route path="/register" component={register} />
          </Views>
        </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalVisible: state.modalVisible,
  };
};

export default withRouter(connect(mapStateToProps)(App));
