import React from 'react'
import styled from 'styled-components'
import AddBoxIcon from '@material-ui/icons/AddBox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import userimg from '../img/userimg.png'
const Header = () => {
    return (
        <div>
            <Container>
               <Main>
                    <AddBoxIcon />
                    <SearchContainer>
                        <Search>
                            <input
                            type="text"
                            placeholder="search"
                            />
                        </Search>
                    </SearchContainer>
                    <HelpOutlineIcon />
               </Main>
                <UserContainer>
                    <Name>
                        Harish
                    </Name>
                    < UserImage>
                        <img src={userimg}
                        alt="j"
                        />
                        </UserImage>

               </UserContainer> 
            </Container>
        </div>
    )
}

export default Header

const Container =styled.div
`
  background:#350d36;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Main = styled.div
`
display:flex;
margin-left:16px;
margin-right:16px;
position:relative;

`;

const  SearchContainer = styled.div
`
min-width:400px;
margin:0px 16px 5px 16px;

`;
const  UserContainer = styled.div
`
display:flex;
align-items:center;
padding-right:16px;
position:absolute;
right:0;

`;
const Search = styled.div
`
box-shadow:inset 0 0 0 1px rgb(104 74 104);
width:100%;
border-radius:6px;
display:flex;
align-items:center;

input{
    background-color: transparent;
    color:white;
    border:none;
    padding:4px 8px 4px 8px;

}
input:focus{
    outline:none;
}
`;

const Name = styled.div
`
padding-right:16px;
`;

const UserImage = styled.div
`
width:28px;
height:28px;
border:2px solid white;
border-radius:3px;
img{
    width:100%;
}
`;