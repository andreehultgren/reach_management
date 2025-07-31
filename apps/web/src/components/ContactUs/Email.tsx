import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CopyAll } from "@mui/icons-material";

interface IProps {
	ignoreTitle?: boolean;
}

export default function Email({ ignoreTitle }: IProps) {
	return (
		<Stack spacing={2}>
			{!ignoreTitle && <Typography variant="h4">E-post</Typography>}
			<Typography>
				Skicka ett mail till oss, så återkommer vi så snart vi kan!
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
				<IconButton
					onClick={() => {
						navigator.clipboard.writeText("info@planova.se").then(() => {
							alert("Email kopierad till urklipp!");
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
					info@planova.se
				</pre>
			</Box>
		</Stack>
	);
}
