import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width:90%
    height:7%
    background-color: #ebebeb
    margin-left:5%
    margin-right:5%
    margin-top:10%
    border-radius:50px
    shadow-opacity: 0.75
    shadow-radius: 0px;
    shadow-color: red;
    shadow-offset: 3px 3px;
    elevation: 15
`;

const InputField = Styled.TextInput`
    margin-left:5%
    margin-right:5%
    flex:1
`;
// color:#ebebeb

const SearchInput = ({placeholder, keyboardType, secureTextEntry, style, clearMode, onChangeText}) => {
    return (
        <Container style={style}>
            <InputField
                selectionColor="#FFFFFF"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ? keyboardType : 'default'}
                autoCapitalize="none"
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor="#FFFFFF"
                placeholder={placeholder}
                clearButtonMode={clearMode ? 'while-editing' : 'never'}
                onChangeText={onChangeText}
            />
        </Container>
    );
};

export default SearchInput;
