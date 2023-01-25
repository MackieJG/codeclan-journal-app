import styled from 'styled-components';

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 600px;

`

export const LogoImage = ({imagePath}) => {
    return (
        <StyledLogo>
            <img id="self-logo" src={imagePath} alt=".self edit logo" />
        </StyledLogo>
    )
}