import styled from "styled-components";
import { COLORS } from "../constants";

const Container = styled.div<{ $height?: number }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ $height }) => ($height ? `${$height}px` : "100svh")};
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

const BackgroundFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${COLORS.LandingOverlay};
    transition: background 1s linear;
  }
`;

const BackgroundImage = styled.div<{ $desktopImage: string; $mobileImage: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$desktopImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1100px) {
    background-position: center;
  }
  @media (max-width: 900px) {
    background-image: url(${props => props.$mobileImage});
  }
`;

const Content = styled.div<{ $height?: number }>`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ $height }) => ($height ? `${$height}px` : "100svh")};
  width: 100%;
  color: ${COLORS.landingColor};
`;

interface IProps {
	desktopImage: string;
	mobileImage: string;
	children?: React.ReactNode;
	height?: number;
}

export default function FullPageImageWithText({ desktopImage, mobileImage, children, height }: IProps) {
	return (
		<Container data-testid="landing-page-container" $height={height}>
			<BackgroundFilter>
				<BackgroundImage $desktopImage={desktopImage} $mobileImage={mobileImage} />
			</BackgroundFilter>
			<Content data-testid="landing-page-content" $height={height}>
				{children}
			</Content>
		</Container>
	);
}
