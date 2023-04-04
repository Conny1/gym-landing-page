import React from 'react'
import styled from 'styled-components'
import redbull from '../assets/SponsorRedBull.png'
import forbs from '../assets/SponsorForbes.png'
import fortune from '../assets/SponsorFortune.png'

const Container = styled.div`
display: flex;
 background-color:#ffe1e0;
 margin-top:20px;
 width:100%;
 justify-content:center;
`
const Wrapper = styled.div`
width:90%;
 align-items:center;
 /* justify-content:center; */
display:flex;
gap:100px;
height:100px;
/* outline:1px solid red; */
`
const Image = styled.div`
width:100px;

`
const Img = styled.img`

`
type Props = {}

const Brands = (props: Props) => {
  return (
    <Container>
<Wrapper>
        <Image>
            <Img src={redbull} alt='brands' />
        </Image>

        <Image>
            <Img src={forbs} alt='brands' />
        </Image>

        <Image>
            <Img src={fortune} alt='brands' />
        </Image>

        </Wrapper>
    </Container>
  )
}

export default Brands