import { Stack, IconButton, Typography } from "@mui/material";
import { Twitter, LinkedIn, Facebook } from "@mui/icons-material";

export default function Social() {
	return (
		<Stack spacing={2}>
			<Typography variant="h4">Sociala Medier</Typography>
			<Typography>
				Följ oss på våra sociala medier för att få de senaste uppdateringarna!
			</Typography>
			<Stack direction="row" width="100%" justifyContent="space-around">
				<a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
					<IconButton>
						<Twitter fontSize="large" />
					</IconButton>
				</a>
				<a
					href="https://www.linkedin.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<IconButton>
						<LinkedIn fontSize="large" />
					</IconButton>
				</a>
				<a
					href="https://www.facebook.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<IconButton>
						<Facebook fontSize="large" />
					</IconButton>
				</a>
			</Stack>
		</Stack>
	);
}
