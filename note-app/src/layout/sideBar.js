import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
    color: #2F4F4F;
    margin-left: 5px;
`
const ButtonList = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:15%;
    @media(max-width:500px){
        flex-direction:row;
        margin: 0;
    };
`
const ButtonCont = styled.div`
    padding:2%;
`
const Bar = styled.div`
    background: #bacff2;
    padding: 1.5%;
    width: 200px;
    @media(max-width:500px){
    width: 100vw;
    height: 125px;
    position: fixed;
    z-index: 90;
    };
`
 class SideBar extends React.Component {
    render(){
        return(
            <Bar>
                <Title>Notes</Title>
                <ButtonList>
                <ButtonCont>
                <Link to="/"><button type="button" className="btn btn-dark">View All Notes</button></Link>
                </ButtonCont>
                 <ButtonCont>
                <Link to="/add"><button type="button" className="btn btn-dark">Add New Note</button></Link>
                </ButtonCont>
                </ButtonList>
            </Bar>
        );
    }
}
 export default SideBar; 