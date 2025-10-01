import React from "react";
import { COLORS, SPACING } from "../../constants";
import { styled } from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import { Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const StyledContact = styled.button<{ $whiteOutline?: boolean }>`
	background: ${props => props.$whiteOutline ? 'transparent' : COLORS.logoColorTwo};
	color: ${props => props.$whiteOutline ? COLORS.white : '#404040'};
	border: ${props => props.$whiteOutline ? `2px solid ${COLORS.white}` : 'none'};
	cursor: pointer;
	padding: ${props => props.$whiteOutline ? `${SPACING.lg} ${SPACING.xxl}` : '0.5rem 1.5rem'};
	border-radius: ${props => props.$whiteOutline ? '1rem' : '9999px'};
	font-size: ${props => props.$whiteOutline ? '1.2rem' : '1.1rem'};
	font-weight: ${props => props.$whiteOutline ? 600 : 'normal'};
	width: fit-content;
	margin: 0 auto;
	transition: all 0.2s;
	display: ${props => props.$whiteOutline ? 'flex' : 'block'};
	align-items: ${props => props.$whiteOutline ? 'center' : 'normal'};
	gap: ${props => props.$whiteOutline ? SPACING.sm : '0'};
	
	&:hover {
		background: ${props => props.$whiteOutline ? COLORS.white : COLORS.logoColor};
		color: ${props => props.$whiteOutline ? COLORS.primary : 'white'};
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
	whiteOutline?: boolean;
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
					<StyledContact ref={ref} $whiteOutline={props.whiteOutline} onClick={() => setOpen(true)}>
						Kontakt
						{props.whiteOutline && <ArrowForward />}
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
