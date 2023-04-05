import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import { selectPage } from "./utils/types"
import Home from "./sections/Home"
import styled from "styled-components"
import Brands from "./sections/Brands"
import Benefits from "./sections/Benefits"
import Classes from "./sections/Classes"
import ContactUs from "./sections/ContactUs"
import Footer from "./sections/Footer"

const Container = styled.div`
display:flex;
flex-direction:column;

`
const Wrapper = styled.div`
    background-color:#f8f4eb;
    display:flex;
flex-direction:column;
`

function App() {
  const [isTopPage, setisTopPage] = useState<boolean> (true)
  const [selectedPage, setselectedPage] = useState < selectPage > (selectPage.Home)
useEffect(() => {
  const handleScroll=()=>{
    if( window.scrollY === 0 ){
      setisTopPage(true)
      setselectedPage(selectPage.Home)
    }if( window.scrollY !== 0 ){
      setisTopPage(false)
    }
  }
  window.addEventListener("scroll", handleScroll)

  return ()=> window.removeEventListener("scroll", handleScroll)

}, [])
  return (
    <Container>
      
     <NavBar selectedPage={selectedPage} setselectedPage={setselectedPage} isTopPage={isTopPage}/>
     <Wrapper>
     <Home selectedPage={selectedPage} setselectedPage={setselectedPage} />
     </Wrapper>
     <Brands/>
     <Benefits setselectedPage={setselectedPage} selectedPage={selectedPage} />
     <Classes setselectedPage={setselectedPage}  />
     <ContactUs setselectedPage={setselectedPage} />
     <Footer/>
    </Container>

  )
} 

export default App
