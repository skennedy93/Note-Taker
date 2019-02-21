import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
    color: #2F4F4F;
`
const ButtonList = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:15%;
`
const ButtonCont = styled.div`
    padding:2%;
`
const Bar = styled.div`
    background: #bacff2;
    padding: 1.5%;
    width: 15%;
    
    
`
 class SideBar extends React.Component {
    render(){
        return(
            <Bar>
                <Title>Notes</Title>
                <ButtonList>
                <ButtonCont>
                <button type="button" className="btn btn-dark">View All Notes</button>
                </ButtonCont>
                 <ButtonCont>
                <button type="button" className="btn btn-dark">Add New Note</button>
                </ButtonCont>
                </ButtonList>
            </Bar>
        );
    }
}
 export default SideBar; 