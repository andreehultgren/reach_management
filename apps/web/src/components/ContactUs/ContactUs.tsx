import React from "react";
import { COLORS } from "../../constants";
import { styled } from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import { Typography } from "@mui/material";

const StyledContact = styled.button`
	background: ${COLORS.logoColorTwo};
	color: #404040;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1.5rem;
	border-radius: 9999px;
	font-size: 1.1rem;
	width: fit-content;
	margin: 0 auto;
	transition: all 0.2s;
	&:hover {
		background: ${COLORS.logoColor};
		color: white;
	}
`;

const ContactInfo = styled.div`
	text-align: left !important;
	padding: 3rem 2.5rem !important;
	background: white !important;
`;

const ContactTitle = styled(Typography)`
	color: ${COLORS.primary} !important;
	font-size: 1.75rem !important;
	font-weight: 700 !important;
	margin-bottom: 2rem !important;
	text-align: center !important;
	letter-spacing: -0.5px !important;
`;

const ContactItem = styled.div`
	margin-bottom: 2.5rem;
	
	&:last-child {
		margin-bottom: 0;
	}
`;

const ContactLabel = styled(Typography)`
	color: ${COLORS.primary} !important;
	margin-bottom: 0.75rem !important;
	font-size: 0.85rem !important;
	text-transform: uppercase !important;
	letter-spacing: 1px !important;
	font-weight: 600 !important;
	opacity: 0.8 !important;
`;

const ContactValue = styled(Typography)`
	color: ${COLORS.primary} !important;
	font-size: 1.25rem !important;
	font-weight: 600 !important;
	line-height: 1.4 !important;
	
	a {
		color: inherit !important;
		text-decoration: none !important;
		transition: color 0.2s ease;
		
		&:hover {
			color: ${COLORS.accent} !important;
			text-decoration: none !important;
		}
	}
`;

const ContactNote = styled(Typography)`
	color: ${COLORS.primary} !important;
	font-size: 0.9rem !important;
	margin-top: 2rem !important;
	font-style: normal !important;
	opacity: 0.7 !important;
	text-align: center !important;
	font-weight: 400 !important;
`;

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});


interface ContactUsProps {
	popupRef?: React.Ref<HTMLDivElement>;
	triggerOpen?: boolean;
	onClose?: () => void;
}

const ContactUs = React.forwardRef<HTMLButtonElement, ContactUsProps>(
	(props, ref) => {
		const [open, setOpen] = React.useState(false);

		const handleClose = () => {
			setOpen(false);
			props.onClose?.();
		};

		// Handle external trigger
		React.useEffect(() => {
			if (props.triggerOpen) {
				setOpen(true);
			}
		}, [props.triggerOpen]);

		return (
			<>
				{!props.triggerOpen && (
					<StyledContact ref={ref} onClick={() => setOpen(true)}>
						Kontakt
					</StyledContact>
				)}
				<Dialog
					open={open}
					slots={{
						transition: Transition,
					}}
					keepMounted
					onClose={handleClose}
					ref={props.popupRef}
					maxWidth="sm"
					fullWidth
				>
					<DialogContent sx={{ 
						padding: 0,
						'& .MuiDialogContent-root': {
							padding: 0
						}
					}}>
						<ContactInfo style={{ 
							backgroundColor: 'white',
							color: COLORS.primary,
							padding: '3rem 2.5rem',
							textAlign: 'left'
						}}>
							<ContactTitle variant="h5" style={{ 
								color: COLORS.primary,
								fontSize: '1.75rem',
								fontWeight: 700,
								marginBottom: '2rem',
								textAlign: 'center',
								letterSpacing: '-0.5px'
							}}>
								Kontakta oss
							</ContactTitle>
							
							<ContactItem style={{ marginBottom: '2.5rem' }}>
								<ContactLabel variant="body2" style={{ 
									color: COLORS.primary,
									marginBottom: '0.75rem',
									fontSize: '0.85rem',
									textTransform: 'uppercase',
									letterSpacing: '1px',
									fontWeight: 600,
									opacity: 0.8
								}}>
									E-post
								</ContactLabel>
								<ContactValue style={{ 
									color: COLORS.primary,
									fontSize: '1.25rem',
									fontWeight: 600,
									lineHeight: 1.4
								}}>
									<a href="mailto:info@reachmanagement.se" style={{ 
										color: COLORS.primary,
										textDecoration: 'none'
									}}>
										info@reachmanagement.se
									</a>
								</ContactValue>
							</ContactItem>
							
							<ContactItem style={{ marginBottom: '2.5rem' }}>
								<ContactLabel variant="body2" style={{ 
									color: COLORS.primary,
									marginBottom: '0.75rem',
									fontSize: '0.85rem',
									textTransform: 'uppercase',
									letterSpacing: '1px',
									fontWeight: 600,
									opacity: 0.8
								}}>
									Telefon
								</ContactLabel>
								<ContactValue style={{ 
									color: COLORS.primary,
									fontSize: '1.25rem',
									fontWeight: 600,
									lineHeight: 1.4
								}}>
									<a href="tel:+46701081022" style={{ 
										color: COLORS.primary,
										textDecoration: 'none'
									}}>
										+46 70 108 10 22
									</a>
								</ContactValue>
							</ContactItem>
							
							<ContactNote variant="body2" style={{ 
								color: COLORS.primary,
								fontSize: '0.9rem',
								marginTop: '2rem',
								fontStyle: 'normal',
								opacity: 0.7,
								textAlign: 'center',
								fontWeight: 400
							}}>
								Vi återkommer inom 24 timmar
							</ContactNote>
						</ContactInfo>
					</DialogContent>
				</Dialog>
			</>
		);
	},
);

export default ContactUs;
