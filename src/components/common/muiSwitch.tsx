import { Switch, SwitchProps } from "@mui/material";
import { styled } from '@mui/material/styles';

export const MuiSwitch = styled(Switch)<MuiSwitchProps>(({ borderColor, color }) => ({
	padding: 8,
	'& .MuiSwitch-track': {
		borderRadius: 22 / 2,
		background: 'none',
		border: borderColor
			? `1px solid ${borderColor}`
				? color === 'error'
				: '1px solid #B22222'
			: color === 'success'
			? '1px solid #00B140'
			: '1px solid #e6947e',
	},
	'& .MuiSwitch-thumb': {
		boxShadow: 'none',
		width: 16,
		height: 16,
		margin: 2,
		background: '#e6947e',
	},
	'& .MuiSwitch-switchBase': {
		'&.Mui-checked': {
			'& + .MuiSwitch-track': {
				borderRadius: 22 / 2,
				background: 'none',
				border: borderColor
					? `1px solid ${borderColor}`
						? color === 'error'
						: '1px solid #B22222'
					: color === 'success'
					? '1px solid #00B140'
					: '1px solid #e6947e',
			},
		},
		'.Mui-disabled': {
			cursor: 'not-allowed',
		},
	},
}));

export interface MuiSwitchProps extends SwitchProps {
	text?: string;
	textClass?: string;
	textStyle?: React.CSSProperties;
	row?: boolean;
	on?: boolean;
	disabled?: boolean;
	label?: string;
	labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
	variant?: 'filled' | 'outlined';
	customColor?: string;
	borderColor?: string;
	roundbackground?: string;
}