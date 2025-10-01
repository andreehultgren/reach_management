import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CopyAll } from "@mui/icons-material";

interface IProps {
	ignoreTitle?: boolean;
}

export default function Phone({ ignoreTitle }: IProps) {
	return (
		<Stack spacing={2}>
			{!ignoreTitle && <Typography variant="h4">Telefon</Typography>}
			<Typography>
				Kontakta oss gärna via telefon, så hjälper vi dig direkt!
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
				<IconButton
					onClick={() => {
						navigator.clipboard.writeText("0701081022").then(() => {
							alert("Telefonnummer kopierad till urklipp!");
						});
					}}
				>
					<CopyAll />
				</IconButton>
				<pre
					style={{
						background: "#f5f5f5",
						padding: "8px 12px",
						borderRadius: "4px",
						margin: 0,
						fontFamily: "monospace",
						fontSize: "1rem",
						flex: 1,
					}}
				>
					070 108 10 22
				</pre>
			</Box>
		</Stack>
	);
}
