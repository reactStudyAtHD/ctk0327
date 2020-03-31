import React from "react";
import styled from "styled-components";

const MainBlock = styled.div`
    display: flex;
    flex: 1;
    overflow: auto;
`;

const TableHeader = styled.div`
    margin: 50px auto auto;
    flex: none;
    height: 40px;
`;
const TableContent = styled.div`

`;

const Main = () => {
    return (
        <MainBlock>
            <TableHeader><span>1월</span></TableHeader>
            <TableContent/>
        </MainBlock>
    );
};

export default Main;