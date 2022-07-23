
import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import { AppBar } from "./AppBar/AppBar";

import upcomingEvents from '../upcoming-events.json'
import css from './App.module.css'
import styled from "styled-components";



 const Text = styled.h1`
  font-size: 30px;
  background:${ props => props.isOnline ? 'red' : 'green'};
  color: white;
  border: 2px solid white;

  :hover{
    background: yellow;
  }
 `
 
 export const App = () => {
  return <div
          className={css.container}>
          <Text isOnline>24th Core Worlds Coalition Conference 1</Text>
          <Text>24th Core Worlds Coalition Conference 2</Text>
          <PageTitle text="24th Core Worlds Coalition Conference"/>
          <EventBoard events={upcomingEvents}/>
          <AppBar user={{
            username: 'Дядя Ваня', 
            isOnline: true,
            points: {
              total: 700,
              required: 200,
            }
          }}
        />
  </div>
};