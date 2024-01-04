import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    
    @media screen and (max-width: 1000px) {
        height: 1000px;
    }

    @media screen and (max-width: 768px) {
        height: 200vh;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);

    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;

    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 300px;
    max-height: 300px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba (0,0,0,0.9);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;

    }
`;

export const ServicesH2 = styled.h2`
    color: black;
    font-size: 1rem;
    margin-bottom: 10px;

`;

export const ServicesP = styled.p`
    color: black;
    font-size: 1rem;
    text-align: center;

`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  color: black;
  transition: 0.3s ease-out;

  
`
export const SocialIconLink = styled.a`
  color: black;
  font-size: 24px;
  size: 50px;
  transition: 0.3s ease-out;

    &:hover {
    transform: scale(1.3);
  }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 64px;
    margin-top: 64px;
`;