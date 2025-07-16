import styled from 'styled-components';
import {COLORS} from './constants';

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
  
`;

interface IProps{
  name: string;
  size?: number;
}

export default function Logo({name, size = 28}: IProps) {
  return (
    <LogoWrapper>
      <LogoSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 38"  height={size}>
        <title>Logo</title>
        
        <path d="M2 38C0 38 1.3333 36.6667 2 36L44 2C45 1 47 1 48 2L69 19 65 23 49 14C47 13 45 13 44 14L16 37C14.3333 38 13.6667 38 13 38ZM70 26 87 36C91 38 89 36 88 35L75 24Z" fill={COLORS.logoColor}/>
	      <path d="M58 33C54 37 56 36 58 35L95 15C98 13.6667 99 14.3333 100 15L127 36C128 37 130.3333 38 131 38L140 38C142 38 142 37 141 36L100 2C99 1 97 1 96 2Z" fill={COLORS.logoColorTwo}/>

      </LogoSVG>
      <LogoText>{name}</LogoText>
    </LogoWrapper>
  )
}
