import React from 'react'
import styled from 'styled-components'
import Links from './Links'
import { selectPage } from '../utils/types'
import logo from '../assets/Logo.png'
import Button from './Button'

const Container = styled.div`
/* outline:1px solid red; */
width:100%;
display: flex;
justify-content:space-between;
height:100px;
align-items:center;
background-color:#ffe1e0;
position:sticky;
top:0;

`
const Item= styled.div`
/* outline:1px solid green; */
width:60%;
display: flex;
margin-left:40px;
/* justify-content:space-between; */

`
const MenuWrapper = styled.div`
/* outline:1px solid red; */
display: flex;
flex:1;
justify-content:space-evenly;
`
const Actions = styled.div`
margin-right:20px;
/* outline:1px solid red; */
height:40px;
width:200px;
display:flex;
justify-content:center;
align-items:center;
background-color:#ffc132;
cursor:pointer;
border-radius:5px;
:hover{
    background-color:#ff7062;
    color:#fff;
}
`
const Logo = styled.div`
width:30%;

`
const Image = styled.img``

interface Props {
    setselectedPage:(value:selectPage)=>void
    selectedPage:selectPage
}

const NavBar = ({selectedPage, setselectedPage}: Props) => {
    return (
       <Container>
        <Item>
        <Logo> 
            <Image src={logo} alt='logo'/>
             </Logo>
        <MenuWrapper>
            <Links page='Home'  selectedPage={selectedPage} setselectedPage={setselectedPage}  />
            <Links page='Benefits' selectedPage={selectedPage} setselectedPage={setselectedPage}  />
            <Links page='Our clasess' selectedPage={selectedPage} setselectedPage={setselectedPage} />
            <Links page='Contacts'selectedPage={selectedPage} setselectedPage={setselectedPage}  />

        </MenuWrapper>
        </Item>
        <Actions>
            <Button action='Become a Member'  selectedPage={selectedPage} setselectedPage={setselectedPage}/>
        </Actions>
       </Container>
    )
}

export default NavBar
