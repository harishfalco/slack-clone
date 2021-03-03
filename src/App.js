import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Header from './Components/Header';
import styled from 'styled-components';
import SideBar from './Components/SideBar'
import db  from './FireBase/FireBase';
import React, { useEffect , useState } from 'react'
import './App.css';


function App() {

  const [rooms,setRooms] = useState([])

  const getChannels = ()=>{
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms(snapshot.docs.map((doc)=>{
         return {id:doc.id , name:doc.data().name}
      }))
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

  

  return (
    <div className="App">
      <Router>
        <Container>
          <Header /> 
          <Main>
            <SideBar rooms={rooms} />
          <Switch>
                <Route path="/room">
                  <Chat />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
            </Switch>
            </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container =  styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-rows:30px auto;
`;
const Main  = styled.div`

display:grid;
grid-template-columns: 260px auto;
`;