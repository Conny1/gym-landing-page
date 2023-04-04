import styled from "styled-components"
import HomePageText from "../assets/HomePageText.png"
import HomePageGraphic from "../assets/HomePageGraphic.png"
import Button from "../components/Button"
import { selectPage } from "../utils/types"
import {motion} from "framer-motion"
 
const Container = styled.div`
display: flex;
width:90%;
 align-self:center;
/* justify-self:center;  */
/* width:20px; */
/* outline:1px solid red; */
/* outline:1px solid black; */
margin-top: 100px;
justify-content:space-between;
height:400px;
background-color:#f8f4eb;
`
const Column1 = styled(motion.div)`
width:40%;
display:flex;
flex-direction:column;
justify-content:space-between;

`
const Item = styled.div`
display:flex;
/* outline:1px solid red; */
/* justify-content:center; */
align-items:center;
gap:30px;
`
const Column2 = styled.div`
width:40%;

/* outline:1px solid gold; */
`
const Image = styled.div`
width:90%;

/* outline:1px solid gold; */

`
const Img = styled.img`
width:100%;
height:100%;
`
const Text = styled.div``
const Btn =styled.div`
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

type Props = {

    selectedPage:selectPage
    setselectedPage:(value:selectPage)=>void
}

const Home = ({setselectedPage, selectedPage}: Props) => {
  return (
    <Container id="home"  >
     <Column1>
      <Image>
        <Img src={HomePageText} alt="Home page text" />
      </Image>
      <Text  >
      Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.

      </Text>
      <Item>
        <Btn>
        <Button  action="Join Now" selectedPage={selectedPage} setselectedPage={setselectedPage}   />
        </Btn>
        <Text style={{ textDecoration:"underline", color:"#f75d5d" }} >Learn more</Text>
      </Item>
     </Column1>

     <Column2>
     <Img src={HomePageGraphic} alt="gym instructor" />
     </Column2>
    </Container>
  )
}

export default Home