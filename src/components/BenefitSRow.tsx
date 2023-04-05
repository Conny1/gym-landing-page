import { motion } from "framer-motion";

import styled from "styled-components";
import Benefits from "../assets/BenefitsPageGraphic.png";
import sparkles from "../assets/Sparkles.png";
import Button from "./Button";
import { selectPage } from "../utils/types";

const Container = styled(motion.div)`
display:flex;
justify-content:space-evenly;
gap:10px;
@media(max-width:1059px){
  flex-direction:column;
}

`;
const Column1 = styled.div`
width:45%;
/* outline:1px solid red; */
max-width:400px;
@media(max-width:1059px){
  width:80%;
  /* justify-self:center; */
  align-self:center;
  max-width:500px;
}
`;
const Image = styled.img`
width:100%;

`;
const Column2 = styled.div`
/* outline:1px solid red; */
width:40%;
@media(max-width:1059px){
  width:100%;
  /* justify-self:center; */
 
}

`;
const H2 = styled.h2`
color:#5e0000;
font-size:30px;
font-weight:600;
margin-bottom:0;
`;
const Text = styled.p`
color:#945451;
`;
const Item = styled.div`
/* opacity:1; */
`
const Butn = styled.div`
margin-top:40px;
height:40px;
width:120px;
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
const Wrapper = styled.div`
/* outline:1px solid red; */
width:fit-content;
position:absolute;
opacity:2;
height:90px;
top:0;
left:17%;

`


type Props = {
    setselectedPage:(value:selectPage)=>void
    selectedPage:selectPage
};

const BenefitSRow = ({selectedPage, setselectedPage}: Props) => {
  return (
    
  
    <Container>
       
      <Column1>
        <Image src={Benefits} alt="lady" />
      </Column1>
      <Column2>
      <H2>MILLIONS OF HAPPY MEMBERS GETTING FIT</H2>
      <Text>
        Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
        ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
        vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed
        facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium
        sapien proin integer nisl. Felis orci diam odio. 
      </Text>
      <Text>
      Fringilla a sed at
        suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor.
        Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor
        facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
      </Text>

      <Item style={{position:"relative"}} >
        <Butn>
            <Button action="Join Now" selectedPage={selectedPage} setselectedPage={setselectedPage} />
        </Butn>
        <Wrapper>
            <Image style={{height:"100%"}} src={sparkles} alt="sparkles" />
        </Wrapper>
      </Item>


      </Column2>
    </Container> 
  );
};

export default BenefitSRow;
