import styled from "styled-components";
import { COLORS } from "./constants";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoSVG = styled.svg`
  display: block;
`;

const LogoText = styled.h2`
  margin:0;
  font-size: 1.25em;
  font-weight: 600;
  color: ${COLORS.logoColor};
  letter-spacing: 0.04em;
  font-family: "Inter", Helvetica, Arial, sans-serif;
`;

interface IProps {
	name: string;
	size?: number;
}

export default function Logo({ size = 28 }: IProps) {
	return (
		<LogoWrapper>
			<img src="/logo.png" alt="Logo" height={4 * size} />
		</LogoWrapper>
	);
}
