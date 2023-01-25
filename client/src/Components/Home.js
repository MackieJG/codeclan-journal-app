import styled from 'styled-components';
import { LogoImage } from "./StyledLogo";
import logo from "../images/main_image.png";

const Home = () => {
    const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 8rem;
    font-family: soligant;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;   
    `

    return (
        <>
            <LogoImage imagePath={logo} />
            <StyledButtons>
                <a href='/entry'>Make an Entry</a>
                <a href='/list'>How am I doing?</a>
            </StyledButtons>
        </>

    )
}

export default Home;