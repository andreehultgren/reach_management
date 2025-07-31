import styled from "styled-components";
import { useEffect, useState } from "react";

const TRANSPARENCY = 0.69;

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

const BackgroundFilter = styled.div<{ $transparency?: number }>`
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
    background: ${({ $transparency = TRANSPARENCY }) => `rgba(255, 255, 255, ${$transparency})`};
    transition: background 1s linear;
  }
`;

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/stockholm.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1100px) {
    background-position: center;
  }
  @media (max-width: 900px) {
    background-image: url('/stockholm.jpg');
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
`;

interface IProps {
	imageUrl: string;
	children?: React.ReactNode;
	height?: number;
}

export default function FullPageImageWithText({
	imageUrl,
	children,
	height,
}: IProps) {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		const img = new Image();
		img.src = imageUrl;
		img.onload = () => setLoaded(true);
	}, [imageUrl]);

	return (
		<Container data-testid="landing-page-container" $height={height}>
			<BackgroundFilter $transparency={loaded ? TRANSPARENCY : 0.2}>
				<BackgroundImage />
			</BackgroundFilter>
			<Content data-testid="landing-page-content" $height={height}>
				{children}
			</Content>
		</Container>
	);
}
