import React from 'react'
import styled from 'styled-components'
import AddBoxIcon from '@material-ui/icons/AddBox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
const Header = () => {
    return (
        <div>
            <Container>
               <Main>
                    <AddBoxIcon />
                    <SearchContainer>
                        <search>
                            <input
                            type="text"
                            placeholder="search"
                            />
                        </search>
                    </SearchContainer>
                    <HelpOutlineIcon />
               </Main>
               {/* <UserContainer>


               </UserContainer> */}
            </Container>
        </div>
    )
}

export default Header

const Container =styled.div
`

`;

const Main = styled.div
`
display:flex;

`;

const  SearchContainer = styled.div
`
`;
const search = styled.div
`
`;