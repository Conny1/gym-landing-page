import React from 'react'
import styled from 'styled-components'
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { selectPage } from '../utils/types';
import { motion } from 'framer-motion';
import BenefitSRow from '../components/BenefitSRow';
import Waves from "../assets/AbstractWaves.png";

const Containter = styled(motion.div)`
width:90%;
align-self:center;
margin-top:50px;

`
const Column1 = styled.div`
width:60%;
margin-bottom:30px;
`
const H3 = styled.h2`
color:#5e0000;
font-size:35px;
font-weight:600;
margin-bottom:0;
`

const Text = styled.p`
color:#945451;
`
const Column2 = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin-bottom:30px;
gap:10px;
`
const H2 = styled.h2`
color:#5e0000;
font-size:17px;
font-weight:600;
margin-bottom:0;
`
const Wrapper = styled.div`
min-width:300px;
/* max-width:350px */
width:30%;
text-align:center;
min-height:350px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border:2px solid #dfcccc;
border-radius:5px;
padding:10px;

`
const Image = styled.div`
/* outline:1px solid red; */
background-color:#ffe1e0;
width:55px;
border-radius:50px;
`
const Img =styled.img``
const Wrapper2 = styled.div` 
/* outline:1px solid red; */
text-align:center;
margin-bottom:0;
`
;




type Props = {
  setselectedPage:(value:selectPage)=>void
  selectedPage:selectPage
}

const Benefits = ({setselectedPage , selectedPage}: Props) => {
  return (
    <Containter id='benefits' onViewportEnter={() => setselectedPage(selectPage.Benefit)} >
      <Column1>
      <H3>
      MORE THAN JUST GYM.
      </H3>
      <Text> 
      We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.


      </Text>
      </Column1>

      <Column2>
      <Wrapper>
        <Image>
          <HomeModernIcon/>
        </Image>
     
      <H2>
      State of the Art Facilities
      </H2>
      <Text>
      Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.
      </Text>
      <Text>
        Learn More
      </Text>
      </Wrapper>

      <Wrapper>
        <Image>
          <UserGroupIcon/>
        </Image>
     
      <H2>
      100's of Diverse Classes
      </H2>
      <Text>
      Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.
      </Text>
      <Text>
        Learn More
      </Text>
      </Wrapper>



      <Wrapper>
        <Image>
          <AcademicCapIcon/>
        </Image>
     
      <H2>
      Expert and Pro Trainers
            </H2>
      <Text>
      Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.
      </Text>
      <Text>
        Learn More
      </Text>
      </Wrapper>
      </Column2>
      <Wrapper2>

<Img src={Waves} alt="waves"/>
</Wrapper2>
      <BenefitSRow selectedPage={selectedPage} setselectedPage={setselectedPage} />
    </Containter>
  )
}

export default Benefits