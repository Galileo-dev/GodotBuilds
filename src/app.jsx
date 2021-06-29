import { Logo } from './logo'
import styled from 'styled-components'


export function App(props) {
  return (
    <Container>
      <Content>
        <CTA>
       
        <Headers>Download Godot Builds</Headers>
        <Description> Unfortunately I have not made any builds for Linux or MacOs yet</Description>
        <OutLinedBox>
          <LoginBox>
            {/* <Badge status="Failing"><BadgeName>Builds</BadgeName ><BadgeStatus>Failing</BadgeStatus></Badge> */}
            <CTALogoOne src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Windows_logo_and_wordmark_-_2021.svg/250px-Windows_logo_and_wordmark_-_2021.svg.png" />
            <Inline>
              <ReleaseButton href="https://github.com/Galileo-dev/GodotBuilds/releases/latest/download/godot_win_x64.exe" download width="9em">Latest Build</ReleaseButton>
              <ReleaseButton href="https://github.com/Galileo-dev/GodotBuilds/releases/latest/download/godot_win_x64_cross_compiled.exe" download width="19em">Latest Cross-Compiled Build</ReleaseButton>
              {/* <ReleaseButton href="https://github.com/sm-react/react-theming/releases/donload/0.2.0/storybok-boilerplate-projet.zip">Stable Build</ReleaseButton> */}
            </Inline>
          </LoginBox>
        </OutLinedBox>

        
        </CTA>
       
      </Content>
    </Container>
  )
}


const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: auto;
`;

const Badge = styled.div`
  display: inline-block;
  margin-top: 15px;
  margin-left: 5px;
`

const BadgeName = styled.span`
  background: rgba(212, 174, 168, 0.082);
  color: #ffdbdb;
  border-radius: 5px 0px 0px 5px;
  border: 2px solid #912727;
  border-right:none;
  padding: 5px 10px;
  font-weight: bolder;
  text-align: center;
  box-shadow: 0 0 10px #9ecaed;
`

const BadgeStatus = styled.span`
  background: rgba(231, 44, 19, 0.082);
  color: #e64545;
  border-radius: 0px 5px 5px 0px;
  padding: 5px 10px;
  font-weight: 800;
  border: 2px solid #912727;
  letter-spacing: 0.1em;
  box-shadow: 0 0 10px #9ecaed;
  box-shadow-left: none;
  
`

const Content = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 80px;
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 0.9em;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;

const Headers = styled.h1`
  font-size: 4rem;
`

const CTALogoOne = styled.img`
  margin: 40px;
  max-width: 550px;
  min-height: 1px;
  display: block;
  width: 10em;
  transition-timing-function: ease-in;
  transition: opacity 1s;
  
`;


const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const Inline = styled.div`
  display: inline;
`

const ReleaseButton = styled.a`
  display: inline-block;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 35px;
  background-color: #0063e5;
  margin: 12px;
  margin-top: 30px;
  max-width: ${props => props.width};
  width: 100%;
  min-width: 6em;
  border: 1px solid transparent;
  letter-spacing: 1.5px;
  font-size: 18px;

  padding: 1em;
  transition: all 0.2s ease 0s;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`

const LoginBox = styled.div`
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  margin: 2em;
  align-items: center;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const OutLinedBox = styled.div`
  background-color: #1a1d29;
  border-radius: 33px;
  border: 2px solid white;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;
