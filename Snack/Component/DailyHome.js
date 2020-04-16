import React,{useState} from 'react';
import Styled from 'styled-components/native';
import DailyItem from './DailyItem';

const Container = Styled.ScrollView`
    flex :1;
    width:100%
`;


const DailyHome = ({navigation}) => {
    const [isDetail,setIsDetail]=useState(false);

    const onPress = (id) => {
        console.log("hello");
        setIsDetail(true);
    };

    return (
        <Container>
            <DailyItem id={1} onPress={onPress}/>
            <DailyItem/>
        </Container>
    );
};

export default DailyHome;
