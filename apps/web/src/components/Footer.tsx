import styled from "styled-components";
import { Stack, Typography } from "@mui/material";

const Divider = styled.span`
  height: 1.5em;
  width: 1px;
  background: #555;
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
					background: "#222",
					color: "#fff",
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: "center",
					justifyContent: "center",
					py: 2,
				}}
				divider={<Divider />}
			>
				<Typography variant="body2">© 2025 Reach Management AB</Typography>
				<Typography variant="body2">Org.nr: 556677-8899</Typography>
				<Typography variant="body2">
					<a
						href="mailto:michael.hultgren@reachmanagement.se"
						style={{ color: "inherit" }}
					>
						michael.hultgren@reachmanagement.se
					</a>
				</Typography>
			</Stack>
		</footer>
	);
}
