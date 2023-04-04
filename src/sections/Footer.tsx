import styled from "styled-components";
import logo from "../assets/Logo.png";

const Container = styled.div`
background-color:#ffe1e0;
display:flex;
justify-content:center;
padding-top:40px;
height:250px;
`;
const Warpper = styled.div`
display:flex;
width:90%;
justify-content:space-between;
flex-wrap:wrap;
gap:40px;
`;
const Item = styled.div`
min-width:300px;
/* outline:1px solid red; */
flex: 1;
`;
const H4 = styled.h4``;
const Text = styled.p``;
const Image = styled.div``;
const Img = styled.img``;

type Props = {};

const Footer = ({}: Props) => {
  return (
    <Container>
      <Warpper>
        <Item>
          <Image>
            <Img src={logo} alt="logo" />
          </Image>
          <Text>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </Text>
          <Text>© Evogym All Rights Reserved.</Text>
        </Item>

        <Item>
          <H4>Links</H4>

          <Text>Massa orci senectus</Text>
          <Text>Et gravida id et etiam</Text>
          <Text>Ullamcorper vivamus</Text>
        </Item>

        <Item>
          <H4> Contact Us</H4>

          <Text>Tempus metus mattis risus volutpat egestas.</Text>
          <Text>(333)425-6825</Text>
        </Item>
      </Warpper>
    </Container>
  );
};

export default Footer;
