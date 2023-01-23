import logo from "../images/main_image.png";
import styled from 'styled-components';

const Home = () => {

    const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 700px;
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

return (
    <>
        <StyledLogo>
            <img id="self-logo" src={logo} alt="" />
        </StyledLogo>
        <StyledButtons>
            <a href='/entry'>Make an Entry</a>
            <a href='/stats'>How am I doing?</a>
        </StyledButtons>
    </>

)
}

export default Home;