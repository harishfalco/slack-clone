import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Header from './Components/Header';
import styled from 'styled-components';
import SideBar from './Components/SideBar'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header /> 
          <Main>
            <SideBar />
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
background:blue;
display:grid;
grid-template-columns: 260px auto;
`;