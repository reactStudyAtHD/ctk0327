import React from 'react';
import Styled from 'styled-components/native/dist/styled-components.native.esm';
import GestureRecognizer from 'react-native-swipe-gestures';
import SearchInput from './SearchInput';
import DailyHome from './DailyHome';

const Container = Styled.SafeAreaView`
    flex:1;
    background-color: #ebebeb;
    justify-content:center;
    align-items:center;
`;

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
};

const onSwipeRight = (navigation) => {
    navigation.navigate('Main');
};


const Text = Styled.Text`
`;

const Settings = ({navigation}) => {
    return (
        <GestureRecognizer
            onSwipeRight={() => onSwipeRight(navigation)}
            config={config}
            style={{
                flex: 1,
            }}>
            <Container>
                <Text>세팅입니다.</Text>
            </Container>
        </GestureRecognizer>
    );
};

export default Settings;
