import React from 'react'
import styled from 'styled-components'

const ChatMessage = ({data}) => {
    return (
    <Container>
        <UserAvatar>
            <img src={data.userImage} alt="img" />
        </UserAvatar>
        <MessageContent>
            <Name>
                {data.user}
                {/* <span>{new Date(data.timestamp.toDate()).toUTCString()}</span>  */}
            </Name>
            <Text>
                {data.text}
            </Text>
        </MessageContent>
    </Container>
    )
}

export default ChatMessage

const Container = styled.div
`padding:8px 20px;
display:flex;
align-items:center;
`;
const UserAvatar = styled.div
`width:36px;
height:36px;
border-radius:2px;
overflow:hidden;
margin-right:8px;
img{
    width:100%;
}
`;
const MessageContent = styled.div
`display:flex;
flex-direction:column
`;
const Name = styled.span
`
font-weight:900;
font-size:15px;
span{
    font-weight:400px;
    color:rgba(97,96,97);
    margin-left:8px;
    font-size:13px;
}
`;
const Text = styled.span
`

`;