import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import {useState} from 'react';
const ChatInput = ({sendMessage}) => {

    const [input, setInput] = useState(``);

    const send =(e) =>{
        e.preventDefault();
        if(!input) return ;
        sendMessage(input)
        setInput('')
    }
    return (

        <Container>
            <InputContainer>
               <form >
                   <input type="text" placeholder="message here.." onChange={(e)=>setInput(e.target.value)} />
                   <SendButton>
                        <Send onClick={send} type="submit" />
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
min-height:0;
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
const SendButton  = styled.button
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
