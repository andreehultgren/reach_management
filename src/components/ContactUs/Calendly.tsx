import { CalendarToday } from "@mui/icons-material";
import { Button, Typography, Stack } from "@mui/material";

export default function Calendly() {
	return (
		<Stack spacing={2}>
			<Typography variant="h4">Planera ett möte med oss</Typography>
			<Typography>
				Boka ett möte med oss så kan vi prata mer på djupet om hur vi kan hjälpa
				dig.
			</Typography>
			<a
				href="https://calendly.com/andree-hultgren-arkion"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Button fullWidth startIcon={<CalendarToday />} variant="outlined">
					Boka Möte
				</Button>
			</a>
		</Stack>
	);
}
