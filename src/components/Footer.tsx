import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

import { COLORS, COMPANY_INFO } from "../constants";

const Divider = styled.span`
  height: 1.5em;
  width: 1px;
  background: ${COLORS.divider};
  margin: 0 1rem;
  display: inline-block;
  @media (max-width: 600px) {
	display: none;
  }
`;

export default function FooterPage() {
	return (
		<footer>
			<Stack
				sx={{
					width: "100%",
					background: COLORS.footer,
					color: COLORS.white,
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: "center",
					justifyContent: "center",
					py: 2,
				}}
				divider={<Divider />}
			>
				<Typography variant="body2">© 2025 {COMPANY_INFO.name} AB</Typography>
				<Typography variant="body2">Org.nr: {COMPANY_INFO.orgNumber}</Typography>
				<Typography variant="body2">
					<a
						href={`mailto:${COMPANY_INFO.email}`}
						style={{ color: "inherit" }}
					>
						{COMPANY_INFO.email}
					</a>
				</Typography>
			</Stack>
		</footer>
	);
}
