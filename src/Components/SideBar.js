import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../Data/SideBarData'
import AddIcon from '@material-ui/icons/Add';
// import {channelItems } from '../Data/ChannelData'
import db from '../FireBase/FireBase'
const SideBar = (props) => {

    const addChannel = ()=>{
        const promptName = prompt("Enter channel name");
        if(promptName){
            db.collection(`rooms`).add({
                name:promptName
            })
        }
    }
    return (
        <Container>
            <WorkSpcaeContainer>
                <Name>
                    Harish Kumar
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpcaeContainer>
            <MainChannels>
                {
                    sidebarItems.map (item => 
                        <MainChannelItems id={item.id}>
                                {item.icon}
                                {item.text}
                        </MainChannelItems>
                    )
                }
            </MainChannels>
            <ChannelContainer>
                <NewChannelContainer>
                    <div>
                        Channel
                    </div>
                    <AddIcon  onClick={addChannel}/>
                </NewChannelContainer>
                    <ChannelsList>
                        {
                             props.rooms.map(item=>
                                <Channel>
                                   # {item.name}
                                </Channel>
                            )
                        }
                    </ChannelsList> 
            </ChannelContainer>
        </Container>
    )
}

export default SideBar

const Container = styled.div
`
background:#350d36;
color:white;
`

const WorkSpcaeContainer = styled.div
`
color:white;
height:64px;
display:flex;
align-items:center;
padding-left:19px;
justify-content:space-between;
border-bottom:1px solid #532753;
`;
const Name = styled.div
`
`;
const NewMessage = styled.div
`
width:36px;
height:36px;
cursor:pointer;
`;
const MainChannels = styled.div
`
padding-top:20px;
`;
const MainChannelItems = styled.div
`color:rgb(188,171,188);
display:grid;
grid-template-columns:15% auto;
height:28px;
align-items:center;
padding-left:19px;
cursor:pointer;
`;

const ChannelContainer = styled.div
`
color:rgb(188,171,188);
margin-top:10px;

`;
const NewChannelContainer = styled.div
`
display:flex;
align-items:center;
justify-content:space-between;
align-items:center;
height:28px;
padding-left:19px;
padding-right:12px;
cursor:pointer;
`;
const ChannelsList = styled.div
`
height:28px;
cursor:pointer;
`;

const Channel = styled.div
`
height:28px;
display:flex;
align-items:center;
padding-left:19px;
:hover{
    background:black;
}
`;

