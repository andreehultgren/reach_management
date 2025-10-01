import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
