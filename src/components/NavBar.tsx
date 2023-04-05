import React, { useState } from 'react'
import styled from 'styled-components'
import Links from './Links'
import { selectPage } from '../utils/types'
import logo from '../assets/Logo.png'
import Button from './Button'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
    isTopPage:boolean
    setselectedPage:(value:selectPage)=>void
    selectedPage:selectPage
}

const Container = styled.div<Pick<Props, 'isTopPage'>> `
/* outline:1px solid red; */
width:100%;
display: flex;
justify-content:space-between;
height:100px;
align-items:center;
background-color:${(props)=>props.isTopPage?'#fff':'#ffe1e0' } ;
position:sticky;
top:0;
@media(max-width:1059px){
    /* outline:1px solid red; */
    display:none;
}

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
&:hover{
    background-color:#ff7062;
    color:#fff;
}
`
const Logo = styled.div`
width:30%;

`
const Image = styled.img``
const MenuSidebar =styled.div<Pick<Props, 'isTopPage' >>`
    /* outline:1px solid red; */
    width:100%;
display: flex;
justify-content:space-between;
height:100px;
align-items:center;
background-color:${(props)=>props.isTopPage?'#fff':'#ffe1e0' } ;
position:sticky;
top:0;
@media(min-width:1059px){
    /* outline:1px solid red; */
    display:none;
}

`
const Togglebtn= styled.div`
display:flex;
justify-content:center;
align-items:center;
width:20px;
padding:7px;
background-color:#ffc132;
border-radius:30px;
position:absolute;
right:0;
margin-right:10px;
margin-top:10px;
`

const Sidebar = styled.div`
min-height:100vh;
background-color:#ffe1e0;
position:fixed;
top:0;
right:0;
z-index:999;
width:200px;
display:flex;
justify-content:center;
`


const NavBar = ({isTopPage, selectedPage, setselectedPage}: Props) => {
    const [sideMenu, setsideMenu] = useState <boolean >(false)
    return (
        <>
       <Container isTopPage={isTopPage} >
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

       <MenuSidebar isTopPage={isTopPage} >
        <Togglebtn>
        <Bars3Icon onClick={()=>{setsideMenu(true)}} />
        </Togglebtn>
        <Logo style={{marginLeft:'50px'}} > 
            <Image src={logo} alt='logo'/>
             </Logo>
            { sideMenu  && <Sidebar>
                <XMarkIcon onClick={()=>{setsideMenu(false)}} style={{width:'30px', position:'absolute', right:0 , marginTop:'30px', marginRight:'30px' }} />
             <MenuWrapper style={{ maxHeight:'200px', flex:'none', width:'70%', flexDirection:'column', gap:'30px',marginTop:'100px' }} >
           
            <Links page='Home'  selectedPage={selectedPage} setselectedPage={setselectedPage}  />
            <Links page='Benefits' selectedPage={selectedPage} setselectedPage={setselectedPage}  />
            <Links page='Our clasess' selectedPage={selectedPage} setselectedPage={setselectedPage} />
            <Links page='Contacts'selectedPage={selectedPage} setselectedPage={setselectedPage}  />

        </MenuWrapper>

             </Sidebar>}
       </MenuSidebar>
       </>
    )
}

export default NavBar
