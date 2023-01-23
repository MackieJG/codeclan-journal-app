import logo from "../images/main_image.png";
import styled from 'styled-components';
import BarChart from "./BarChart";
import LineChart from "./LineChart";

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
            <StyledButtons />
            <div style={{ position: "relative", margin: "auto", height: "80vh" }}>
            <LineChart />
            </div>



            {/* <StyledParagraph>
                Chart your progress throughout your learning
                at CodeClan and optimise your health with
                the .self wellbeing app
            </StyledParagraph> */}
        </>
    )

}

export default Home;