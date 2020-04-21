import React from "react";
import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

const AsideBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: none;
    width: 300px;
    background-color: #e9e8e4;
    padding-top: 200px;
`;
const AsideDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9e8e4;
    margin-left:10%;
    width:80%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    height:50px;
    box-shadow:  10px 10px 20px #5d5d5b, 
             -10px -10px 20px #ffffff;
     &:hover{
      cursor: pointer;
     }
`;

const TextBlock = styled.span`
     font-family: "Arial Black", sans-serif;
     font-size: 36px;
     font-weight: bold;
     text-shadow: 2px 2px 2px gray; 
`;
const Aside = ({onClick}) => {
    return (
        <AsideBlock>
            <NavLink to={"/main"}> <AsideDetail><TextBlock>Main</TextBlock></AsideDetail></NavLink>
            <NavLink to={"/calendar"}><AsideDetail><TextBlock>Calendar</TextBlock></AsideDetail></NavLink>
        </AsideBlock>);
};

export default Aside;
