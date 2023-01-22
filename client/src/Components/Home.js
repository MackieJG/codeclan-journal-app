import logo from "../images/main_image.png";
import styled from 'styled-components';

// const StyledParagraph = styled.div`
// font-family: Arial, Helvetica, sans-serif;
// display: flex;
// justify-content: space-between;
// justify-content: center;
// align-items: left;
// /* padding: 1rem; */
// font-size: 2rem;
// `

const StyledLogo = styled.div`
display: flex;
justify-content: center;
height: 800px;
`

const StyledButtons = styled.div`
display: flex;
justify-content: center;
gap: 8rem;
font-family: soligant;
font-size: 1.5rem;
text-decoration: none;
font-weight: 600px;

`



const Home = () => {

    return (
        <>
            <StyledLogo>
                <img id="self-logo" src={logo} alt="" />
            </StyledLogo>
            <StyledButtons>
                <a href='/journal'>Make an Entry</a>
                <a href='/stats'>How am I doing?</a>
            </StyledButtons>


            {/* <StyledParagraph>
                Chart your progress throughout your learning
                at CodeClan and optimise your health with
                the .self wellbeing app
            </StyledParagraph> */}
        </>
    )

}

export default Home;