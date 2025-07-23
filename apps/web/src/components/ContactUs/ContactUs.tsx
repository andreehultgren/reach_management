import React from "react";
import { COLORS } from "../../constants";
import { styled } from "styled-components";
import Dialog from "@mui/material/Dialog";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import Tabs from "@mui/material/Tabs";
import Social from "./Social";
import Calendly from "./Calendly";
import Email from "./Email";

const StyledContact = styled.button`
  background: ${COLORS.logoColorTwo};
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-size: 1.1rem;
  width: fit-content;
  margin: 0 auto;
  transition: background 0.2s;
  &:hover {
    background: ${COLORS.logoColor};
  }
`;

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box>{children}</Box>}
		</div>
	);
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
		style: { flex: 1 },
	};
}

interface ContactUsProps {
	popupRef?: React.Ref<HTMLDivElement>;
}

const ContactUs = React.forwardRef<HTMLButtonElement, ContactUsProps>(
	(props, ref) => {
		const [open, setOpen] = React.useState(false);
		const [value, setValue] = React.useState(0);

		const handleChange = (_: unknown, newValue: number) => {
			setValue(newValue);
		};

		const handleClose = () => {
			setOpen(false);
		};

		return (
			<>
				<StyledContact ref={ref} onClick={() => setOpen(true)}>
					Kontakta oss
				</StyledContact>
				<Dialog
					open={open}
					slots={{
						transition: Transition,
					}}
					keepMounted
					onClose={handleClose}
					ref={props.popupRef}
				>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="Email" {...a11yProps(0)} />
							<Tab label="Möte" {...a11yProps(1)} />
							<Tab label="Social" {...a11yProps(2)} />
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<DialogContent>
							<Email />
							<DialogActions sx={{ marginTop: 1 }}>
								<Button
									onClick={() => {
										window.location.href = "mailto:info@planova.se";
									}}
								>
									Skicka Email
								</Button>
							</DialogActions>
						</DialogContent>
					</CustomTabPanel>

					<CustomTabPanel value={value} index={1}>
						<DialogContent>
							<DialogActions>
								<Calendly />
							</DialogActions>
						</DialogContent>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={2}>
						<DialogContent>
							<Social />
						</DialogContent>
					</CustomTabPanel>
				</Dialog>
			</>
		);
	},
);

export default ContactUs;
