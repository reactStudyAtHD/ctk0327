import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex :1
    margin-left:5%
    margin-right:5%
    height:480px
    padding-top:5%
    
`;

const ContainerWrapping = Styled.TouchableWithoutFeedback`
`;

const DateView = Styled.View`
    flex :0.1
    flex-direction : row
    align-items:center;
    background-color: #ebebeb
    margin-bottom:20px
    padding-left:30px
`;

const TextViewForMarginTop = Styled.View`
    margin-top: auto;
`;

const TextView = Styled.View`
    flex :1
    border-radius:20px
    background-color: #ebebeb
    elevation: 15
`;

const DateText = Styled.Text`
    font-size:30px
`;

const DateText2 = Styled.Text`
    padding-left:15px
    font-size:15px
`;

const DailyItem = ({id, onPress}) => {
    return (
        <ContainerWrapping onPress={() => {
            onPress(id);
        }}>
            <Container>
                <DateView>
                    <TextViewForMarginTop>
                        <DateText>2020.01.20</DateText>
                    </TextViewForMarginTop>
                    <TextViewForMarginTop>
                        <DateText2>월요일</DateText2>
                    </TextViewForMarginTop>
                </DateView>
                <TextView/>
            </Container>
        </ContainerWrapping>);
};

export default DailyItem;
