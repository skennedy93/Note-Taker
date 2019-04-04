import React, { Component } from 'react';
import styled from 'styled-components';
import TodoView from './layout/todosView'
import {Route, withRouter} from 'react-router-dom';
import './index.css';
import DeleteModal from './layout/deleteModal'
import { connect } from 'react-redux';
import NewTodo from './layout/addTodo'
import EditView from './layout/editView'
import Todo from './layout/singleTodo'

const AppContainer = styled.div`
    display: flex;
`
const Views = styled.div`
  padding:5%;
  width:100%;
  height:100vh;
  @media(max-width:500px){
    top:125px;
  };
`
const Modal = styled.div`
position: fixed;
z-index: 90;
display: flex;
margin-left:-6%;
margin-top: -5%;
background: rgba(0, 0, 0, 0.5);
height: 100vh;
width: 100vw;
@media(max-width:780px){
  margin-left:-7%;
  };
@media(max-width:500px){
  margin-left:-6%;
  };
`


class App extends Component {

  render() {
    return (
        <AppContainer>
          <Views>
          <div>{this.props.modalVisible && (<Modal><DeleteModal /></Modal>)}</div>
          <Route exact path='/' component={TodoView}/>
          <Route path='/add' component={NewTodo}/>
          <Route path="/edit/:id" component={EditView} />
          <Route path="/view/:id" component={Todo} />
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
