import React, {useEffect, useState} from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Calendar from "./components/Calendar";
import {Route} from "react-router-dom";

function App() {

    const [menu,setMenu]=useState("Main");

    const onClickMenu=(menuName)=>{
        console.log(menuName);
        setMenu(menuName);
    };

    const onHoverMenu=()=>{

    };
    useEffect(()=>{
        console.log("Reload")
    },[menu]);

    const WrapBlock = styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
`;
    const ContentBlock = styled.div`
    display: flex;
    flex: 1;
    
`;

    return (
        <WrapBlock>
            <Header/>
            <ContentBlock>
                <Aside onClick={onClickMenu}/>
{/*                {menu==="Main"?<Main/>:null}
                {menu==="Calendar"?<Calendar/>:null}*/}
                <Route path={["/main","/"]} component={Main} exact={true}/>
                <Route path="/calendar" component={Calendar} exact={true}/>
            </ContentBlock>
        </WrapBlock>
    );
}

export default App;
