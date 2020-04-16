import React from 'react';
import SearchInput from './SearchInput';
import DailyHome from './DailyHome';
import Styled from 'styled-components/native';
import GestureRecognizer from 'react-native-swipe-gestures';

const Container = Styled.SafeAreaView`
    flex:1;
    background-color: #ebebeb;
    justify-content:center;
    align-items:center;
`;

const Text = Styled.Text`
`;

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
};

const onSwipeLeft = (navigation) => {
    navigation.navigate('Settings');
};

const Main = ({navigation}) => {
    return (
        <GestureRecognizer
            onSwipeLeft={(state) => onSwipeLeft(navigation)}
            config={config}
            style={{
                flex: 1,
                backgroundColor: "#ebebeb"
            }}>
            <SearchInput/>
            <Container>
                <DailyHome/>
            </Container>
        </GestureRecognizer>
    );
};

export default Main;
