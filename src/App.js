import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Header from './Components/Header';
import styled from 'styled-components';
import SideBar from './Components/SideBar'
import db  from './FireBase/FireBase';
import React, { useEffect , useState } from 'react'
import './App.css';
import {auth , provider} from './FireBase/FireBase'

function App() {

  const [rooms,setRooms] = useState([])
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = ()=>{
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms(snapshot.docs.map((doc)=>{
         return {id:doc.id , name:doc.data().name}
      }))
    })
  }
  const signOut = ()=>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

console.log(user);

  return (
  
    <div className="App">
      <Router> 
        {
        !user?
        <Login setUser = {setUser} /> :
          <Container>
             
            <Header signOut={signOut} user={user} /> 
            <Main>
              <SideBar rooms={rooms} />
            <Switch>
                  <Route path="/room/:channelId">
                    <Chat user={user} />
                  </Route>
                  <Route path="/">
                    Select or create channel
                  </Route>
                    {/* <Route path="/login">
                    <Login setUser= {setUser} />
                  </Route>   */}
              </Switch>
              </Main>
          </Container>
         }
      </Router>
    </div>
  );
}

export default App;

const Container =  styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-rows:30px minmax(0,1fr);
`;
const Main  = styled.div`

display:grid;
grid-template-columns: 260px auto;
`;