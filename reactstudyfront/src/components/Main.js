import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import TableComponents from "./TableComponents";
import axios from "axios";

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
`;

const TableHeader = styled.div`
    margin: 60px auto auto;
    flex: none;
`;
const TableHeaderSpan = styled.span`
  font-size: 50px;
  text-align: justify;
  display:inline-block; 
  padding:25px;
`;
const TableContent = styled.div`
  //background-color: red;
  margin: auto;
  height: 80%;
  width : 80%;
`;

const Main = () => {
    const [saleYear, setSaleYear] = useState(2020);
    const [saleMonth, setSaleMonth] = useState(4);
    const onClick = useCallback(type => {
        if (type === '-') {
            if (saleMonth !== 1) {
                setSaleMonth(saleMonth => saleMonth - 1);
            } else {
                setSaleMonth(() => 12);
                setSaleYear(saleYear => saleYear - 1);
            }
        }
        if (type === '+') {
            if (saleMonth !== 12) {
                setSaleMonth(saleMonth => saleMonth + 1);
            } else {
                setSaleMonth(() => 1);
                setSaleYear(saleYear => saleYear + 1);
            }
        }
    }, [saleMonth, saleYear]);

    const changColumn = (params) => {
        console.log(params);
    };
    const columnDefs = [
        {
            headerName: "Date", field: "date", valueSetter: (params) => {
                if(params.data.date!==params.newValue){
                    params.data.date=params.newValue;
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            headerName: "Table", field: "table", valueSetter: (params) => {
                if(params.data.table!==params.newValue){
                    params.data.table=params.newValue;
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            headerName: "Card", field: "card", valueSetter: (params) => {
                if(params.data.card!==params.newValue){
                    params.data.card=params.newValue;
                    return true;
                }else{
                    return false;
                }
            }
        },
        , {
            headerName: "Service", field: "service", valueSetter: (params) => {
                if(params.data.service!==params.newValue){
                    params.data.service=params.newValue;
                    return true;
                }else{
                    return false;
                }
            }
        },
        {headerName: "ToTal", field: "total"},
        {headerName: "Per", field: "per"},
    ];

    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(false);

    const onGridReady = (params) => {
        console.log(saleMonth);
        const gridApi = params.api;
        gridApi.sizeColumnsToFit();
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            console.log(saleYear);
            try {
                const response = await axios.get(`http://ctk0327.iptime.org:8080/sales?saleYear=${saleYear}&saleMonth=${saleMonth}`);
                const result = response.data.map(a => {
                    return {
                        date: a.saleDate,
                        table: a.tableCount,
                        card: a.cardSales,
                        cash: a.moneySales,
                        service: a.serviceSales,
                        total: a.cardSales + a.moneySales + a.serviceSales,
                        per: (a.cardSales + a.moneySales + a.serviceSales) / a.tableCount
                    }
                });
                setRowData(result);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData()
    }, [saleYear, saleMonth]);
    if (loading) {
        return (
            <MainBlock>
                <TableHeader>
                    <MdChevronLeft onClick={() => onClick('-')} size={30}/>
                    <TableHeaderSpan>{saleYear}년 {saleMonth}월</TableHeaderSpan>
                    <MdChevronRight onClick={() => onClick('+')} size={30}/>
                </TableHeader>
                <TableContent>
                    {/*안녕*/}대기 중...
                </TableContent>
            </MainBlock>
        );
    }
    if (!rowData) {
        return null;
    }
    return (
        <MainBlock>
            <TableHeader>
                <button onClick={() => onClick('-')}><MdChevronLeft size={30}/></button>
                <TableHeaderSpan>{saleYear}년 {saleMonth}월</TableHeaderSpan>
                <button onClick={() => onClick('+')}><MdChevronRight size={30}/></button>
            </TableHeader>
            <TableContent>
                {/*안녕*/}
                <TableComponents onGridReady={onGridReady} columnDefs={columnDefs} rowData={rowData}/>
            </TableContent>
        </MainBlock>
    );
};

export default Main;