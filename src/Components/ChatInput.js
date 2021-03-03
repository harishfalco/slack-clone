import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
const ChatInput = () => {
    return (

        <Container>
            <InputContainer>
               <form>
                   <input type="text" placeholder="message here.." />
                   <SendButton>
                        <Send />
                   </SendButton>
               </form>
               </InputContainer>
        </Container>
            
        
    )
}

export default ChatInput

const Container  = styled.div
`
padding-left:20px;
padding-right:20px;
padding-bottom:24px;
`;
const InputContainer  = styled.div
`
border:1px solid #8D8D8E;
border-radius:4px;
form{
    display:flex;
    height:42px;
    align-items:center;
    padding-left:10px;
    input{
        flex:1; // priority
        padding:10px;
        font-size:13px;
    }
    input:focus {
        outline:none;
    }
    
}
`;
const SendButton  = styled.div
`background:green;
border-radius:2px;
width:30px;
height:30px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
margin-right:5px;

:hover{
    background:#148567;
}
`;

const Send =  styled(SendIcon)
`
color:white;
`;
