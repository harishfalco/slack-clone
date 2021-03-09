import React ,{useEffect,useState} from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage'
import db from '../FireBase/FireBase';
import { useParams } from 'react-router';
import firebase from "firebase"
const Chat = ({user}) => {
    let {channelId} = useParams();
    const [channel, setChannel] = useState()
    const[messages , setMessages] = useState([])
    const getChannel = ()=>{
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data())
        })
    }

    const getMessages = ()=>{
        db.collection('rooms')
        .doc(channelId)
        .collection('Messages')
        .onSnapshot((snapshot)=>{
           let messages = snapshot.docs.map((doc)=>doc.data());
        //    console.log(messages[0].user)  
           setMessages(messages)
        })
    }
    
    useEffect(()=>{
           getChannel();
           getMessages();
        },[channelId])

        const sendMessage = (text) =>{
                if(channelId){
                    var payload = {
                        text:text,
                        timestamp:firebase.firestore.Timestamp.now(),
                        user:user.name,
                        userImage : user.photo
                    }
                    db.collection("rooms").doc(channelId).collection('Messages').add(payload)
                    console.log(payload);
                    }
                   
           }
        
    return (
        <Container>
            <Header> 
            <Channel>
                <ChannelName>
                    #{ channel && channel.name}
                </ChannelName>
                <ChannelInfo>
                    A great way to learn react!
                </ChannelInfo>
            </Channel>
            <ChannelDetails>
                <div>
                    Details
                </div>
                <Info />
            </ChannelDetails>
            </Header>
            <MessageContainer>
                {
                      messages.length >= 0 &&
                     messages.map((data,index)=>(
                        <ChatMessage  data={data}/>
                     ))
                    
                }
                
            </MessageContainer>
            <ChatInput sendMessage={sendMessage} />
        </Container>
    )
}

export default Chat;

const Container = styled.div
`
display:grid;
grid-template-rows:64px auto min-content; 
min-height:0;
`;
const Header = styled.div
`
padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
border-bottom:1px solid rgba(83,39,83,.13);
justify-content:space-between;
`;
const Channel = styled.div
`
font-weight:700;
`;
const ChannelName = styled.div
`
`;
const ChannelInfo = styled.div
`
font-weight:400;
color:#606060
font-size:13px;
margin-top:8px;
`;
const ChannelDetails = styled.div
`
display:flex;
align-items:center;
color:#606060;
`;
const MessageContainer = styled.div
`
display:flex;
flex-direction:column;
overflow-y:scroll;
`;

const Info = styled(InfoIcon)
`
cursor:pointer;
color:black;
margin-left:10px;
`