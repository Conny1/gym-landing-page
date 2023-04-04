import styled from "styled-components"
import pic from "../assets/ContactUsPageGraphic.png"
import { selectPage } from "../utils/types"
import { motion } from "framer-motion"


const Container = styled(motion.div)`
width:90%;
align-self:center;
margin-top:50px;
margin-bottom:50px;
`
const Column1 = styled.div`
width:58%;
`
const H2 = styled.h2`
color:#5e0000;
font-size:33px;
font-weight:700;
margin-bottom:0;

`
const Text = styled.p`
color:#945451;

`
const Column2 = styled.div`
display:flex;
/* outline: 1px solid red; */
justify-content:space-between;

`
const Wrapper = styled.div`
width:55%;
/* outline: 1px solid red; */
display:flex;
flex-direction:column;
justify-content:space-between;

`
const Item = styled.div`
width:100%;

`
const Input = styled.input`
width:100%;
height:30px;
background-color:#ffa6a3;
color:#fff;
font-size:20px;
border:1px;
border-radius:5px;
padding:10px;
`
const Image = styled.img`
width:100%;
`
const Button = styled.button`
width:200px;
height:40px;
background-color:#ffc132;
border:1px;
border-radius:5px;
color:#945451;
text-transform:uppercase;
cursor:pointer;
:hover{
    color:#fff
}

`
const Textarea = styled.textarea`
width:100%;
height:200px;
background-color:#ffa6a3;
color:#fff;
font-size:20px;
border:1px;
border-radius:5px;
padding:10px;
`
const Wrapper2= styled.div`
width:fit-content;
`

type Props = {
    setselectedPage:(value:selectPage)=>void
}

const   ContactUs = ({setselectedPage}: Props) => {
  return (
   <Container id="contacts" onViewportEnter={()=>setselectedPage(selectPage.Contacts)} >
    <Column1>
    <H2>
    JOIN NOW TO GET IN SHAPE  </H2>
    <Text>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </Text></Column1>
        <Column2>
        <Wrapper>
            <Item>
                <Input  type="text" placeholder="Name" />
            </Item>
            <Item>
                <Input type="text" placeholder="Email" />
            </Item>
            <Item>
                <Textarea placeholder="Messsage" ></Textarea>
            </Item>
            <Button>
                Submit
            </Button>
        </Wrapper>
        <Wrapper2>
            <Image src={pic} />
        </Wrapper2>
        </Column2>
   </Container>
  )
}

export default   ContactUs