import styled from "styled-components"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import { selectPage } from "../utils/types"
import { motion } from "framer-motion"


const Container = styled(motion.div)`
display:flex;
flex-direction:column;
margin-top:100px;
background-color:#ffe1e0;
height:900px;
/* outline:1px solid red; */
justify-content:center;
`
const Column1 = styled.div`
width:90%;
/* justify-self:center; */
align-self:center;
margin-bottom:50px;
`
const H2 = styled.h2`
color:#5e0000;
font-size:35px;
font-weight:600;
margin-bottom:0;`
const Text = styled.p`
color:#945451;

`
const Column2 = styled.div`
display:flex;
flex-direction:row;
gap:20px;
width:95%;
/* outline:1px solid red; */
overflow-x:scroll;
/* overflow-inline: scroll; */
align-self:center;
/* flex-wrap:wrap; */
/* height:300px; */
max-width:1200px;
`
const Image = styled.div`
min-width:400px;
position:relative;
`
const Img = styled.img`
width:100%;

`
const Modal = styled.div`
position:absolute;
top:0;
/* outline:1px solid yellow; */
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
opacity:0.6;

background-color:#ff7062;
:active{
visibility:hidden;
        
}

`

const classes = [{
    pic:image1 ,
    name:"Weight Training Classes"
},
{
    pic:image2 ,
    name:"Yoga Classes"
},
{
    pic:image3 ,
    name:"Ab Core Classes"
},
{
    pic:image4 ,
    name:"Adventure Classes"
},
{
    pic:image5 ,
    name:"Fitness Classes"
},
{
    pic:image6 ,
    name:"Training Classes"
}


]
type Props = {
    setselectedPage:(value:selectPage)=>void
}

const Classes = ({setselectedPage}: Props) => {
  return (
    <Container id="ourclasess" onViewportEnter={()=>setselectedPage(selectPage.Classes)}  >
        <Column1>
        <H2>
        OUR CLASSES   </H2>
        <Text style={{width:"60%"}} >
        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
         </Text></Column1>

         <Column2>
         {
          classes.map((item,i)=>{
            return <Image key={i} >
                <Img src={item.pic} alt={item.name} />
                <Modal>
                <Text style={{color:"#fff" , fontSize:"20px"}} > {item.name} </Text>
                </Modal>
            </Image>
          })
         }
         </Column2>
    </Container>
  )
}

export default Classes