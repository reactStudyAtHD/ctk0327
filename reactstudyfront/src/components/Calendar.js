import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import styled from "styled-components";
import axios from "axios";
import {getDate,getTitle} from "../lib/utils";


const CalendarContainer=styled.div`
  flex: 0.8;  
  height: 80%;
  margin-top:5%;
  margin-left: auto;
  margin-right: auto;
`;

const CalendarView = () => {
    // const events = [{ title: "today's event", date: new Date(2020,3,20),allDay:true }];
    const [events,setEvents]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://ctk0327.iptime.org:8080/sales?saleYear`);
                const result = response.data.map(a => {
                    return {
                        title:getTitle(a),
                        date: getDate(a),
                        allDay:true
/*                        date: a.saleDate,
                        table: a.tableCount,
                        card: a.cardSales,
                        cash: a.moneySales,
                        service: a.serviceSales,
                        total: a.cardSales + a.moneySales + a.serviceSales,
                        per: (a.cardSales + a.moneySales + a.serviceSales) / a.tableCount,
                        id: a.saleId*/
                    }
                });
                setEvents(result);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData()
    }   );

    return (
        <CalendarContainer>
            <FullCalendar
                header ={{
                    left :   'title',
                    center: '',
                    right:  'prev,next'
                }}
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={events}
                height='parent'
                locale='ko'
            />
        </CalendarContainer>);
};

export default CalendarView;
