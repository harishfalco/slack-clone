import React from 'react'
import styled from 'styled-components'
import userimg from '../img/userimg.png'
const ChatMessage = () => {
    return (
        <Container>
            <UserAvatar>
                <img src={userimg} alt="img" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Harish kumar
                    <span>data</span>
                </Name>
                <Text>
                    hello da punda
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div
`
padding:8px 20px;
display:flex;
align-items:center;

`;
const UserAvatar = styled.div
`
width:36px;
height:36px;
border-radius:2px;
overflow:hidden;
margin-right:8px;
img{
    width:100%;
}
`;
const MessageContent = styled.div
`
display:flex;
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