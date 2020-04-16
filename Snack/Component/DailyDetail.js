import React,{useState,useEffect} from 'react';
import Styled from 'styled-components/native';

const TestText=Styled.Text`
`;

const DailyDetail = () => {
    const [test,setTest]=useState(0);
    useEffect(()=>{
        const id=navigation.getParam("id");
        setTest(id);
    });
    return (<TestText>test</TestText>);
};

export default DailyDetail;
