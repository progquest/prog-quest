'use client';

import { IconBaseProps } from 'react-icons/lib';

export const AccountCircle = ({ size = 33, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 33 33'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<path d='M6.17301 25.054C7.74634 23.9962 9.35967 23.1851 11.013 22.6207C12.6663 22.0562 14.4397 21.774 16.333 21.774C18.2263 21.774 20.0041 22.0562 21.6663 22.6207C23.3286 23.1851 24.9464 23.9962 26.5197 25.054C27.613 23.7295 28.4108 22.3473 28.913 20.9073C29.4152 19.4673 29.6664 17.9429 29.6664 16.334C29.6664 12.574 28.3841 9.41176 25.8197 6.8473C23.2552 4.28285 20.093 3.00063 16.333 3.00063C12.573 3.00063 9.41078 4.28285 6.84633 6.8473C4.28187 9.41176 2.99965 12.574 2.99965 16.334C2.99965 17.9429 3.25521 19.4673 3.76633 20.9073C4.27745 22.3473 5.07967 23.7295 6.17301 25.054ZM16.328 17.6673C14.7758 17.6673 13.4686 17.1345 12.4063 16.069C11.3441 15.0035 10.813 13.6946 10.813 12.1423C10.813 10.5901 11.3458 9.28288 12.4113 8.22066C13.4768 7.15842 14.7857 6.62731 16.338 6.62731C17.8902 6.62731 19.1974 7.16008 20.2597 8.22563C21.3219 9.29115 21.853 10.6 21.853 12.1523C21.853 13.7045 21.3202 15.0118 20.2547 16.074C19.1892 17.1362 17.8803 17.6673 16.328 17.6673ZM16.3222 32.334C14.1063 32.334 12.0238 31.914 10.0749 31.074C8.12593 30.234 6.43059 29.0895 4.98889 27.6407C3.54718 26.1918 2.41078 24.4954 1.57969 22.5516C0.748568 20.6077 0.333008 18.5308 0.333008 16.3207C0.333008 14.1105 0.753008 12.0336 1.59301 10.0897C2.43301 8.1459 3.57745 6.45398 5.02633 5.01398C6.47523 3.57398 8.1716 2.43398 10.1154 1.59398C12.0592 0.753984 14.1362 0.333984 16.3463 0.333984C18.5565 0.333984 20.6334 0.753984 22.5772 1.59398C24.5211 2.43398 26.213 3.57398 27.653 5.01398C29.093 6.45398 30.233 8.14732 31.073 10.094C31.913 12.0407 32.333 14.1183 32.333 16.3269C32.333 18.5355 31.913 20.611 31.073 22.5535C30.233 24.4961 29.093 26.1918 27.653 27.6407C26.213 29.0895 24.5185 30.234 22.5696 31.074C20.6206 31.914 18.5382 32.334 16.3222 32.334Z' />
		</svg>
	);
};

export const ChallengeCup = ({ size = 204, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 204 204'
			xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#shadowFilter)'>
				<path d='M45.75 203.25V180.75H90.75V145.875C81.5625 143.812 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.812 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.438 143.812 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z' />
			</g>
			<defs>
				<filter
					id='shadowFilter'
					x='0.75'
					y='0.75'
					width='202.5'
					height='202.5'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood
						floodOpacity='0'
						result='BackgroundImageFix'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='BackgroundImageFix'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feComposite
						in2='hardAlpha'
						operator='arithmetic'
						k2='-1'
						k3='1'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='shape'
						result='effect1_innerShadow_1849_286'
					/>
				</filter>
			</defs>
		</svg>
	);
};

export const Challenges = ({ size = 33, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 32 33'
			{...props}
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M10.984 32.9519C7.93288 32.9519 5.33944 31.8719 3.20366 29.7117C1.06789 27.5515 0 24.9458 0 21.8947C0 18.8436 1.05568 16.2624 3.16705 14.151C5.27841 12.0397 7.85965 10.984 10.9108 10.984H11.3867L12.3753 9.26316C12.6682 8.72616 13.1076 8.37834 13.6934 8.21968C14.2792 8.06102 14.8406 8.14035 15.3776 8.45767L16.476 9.08009L16.659 8.78718C17.2204 7.7376 18.0992 7.05416 19.2952 6.73684C20.4912 6.41953 21.614 6.56598 22.6636 7.1762L23.9451 7.90847L22.4805 10.4348L21.1991 9.70252C20.8574 9.50725 20.4851 9.46453 20.0824 9.57437C19.6796 9.68421 19.3806 9.90999 19.1854 10.2517L19.0023 10.5446L20.4668 11.3867C20.9794 11.6796 21.315 12.119 21.4737 12.7048C21.6323 13.2906 21.5652 13.8398 21.2723 14.3524L20.2838 16.1098C20.8452 16.9886 21.2662 17.9222 21.5469 18.9108C21.8276 19.8993 21.968 20.9184 21.968 21.968C21.968 25.0191 20.9001 27.6125 18.7643 29.7483C16.6285 31.8841 14.0351 32.9519 10.984 32.9519ZM10.984 30.0229C13.2052 30.0229 15.103 29.2357 16.6773 27.6613C18.2517 26.087 19.0389 24.1892 19.0389 21.968C19.0389 21.2113 18.9352 20.4668 18.7277 19.7346C18.5202 19.0023 18.209 18.3066 17.7941 17.6476L16.8421 16.1465L18.3799 13.5103L14.5721 11.3135L13.0343 13.9497H11.4233C9.12891 13.9497 7.13349 14.6819 5.43707 16.1465C3.74066 17.611 2.89245 19.5271 2.89245 21.8947C2.89245 24.1404 3.67963 26.0564 5.254 27.643C6.82837 29.2296 8.73837 30.0229 10.984 30.0229ZM27.6064 12.4485V9.51945H32V12.4485H27.6064ZM19.5515 4.39359V0H22.4805V4.39359H19.5515ZM26.6911 7.35927L24.6407 5.30892L27.7529 2.1968L29.8032 4.24714L26.6911 7.35927Z' />
		</svg>
	);
};

export const EditIcon = ({ size = 30, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 30 30'
			{...props}
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M3.33333 26.6667H5.70833L22 10.375L19.625 8L3.33333 24.2917V26.6667ZM0 30V22.9167L22 0.958333C22.3333 0.652778 22.7014 0.416667 23.1042 0.25C23.5069 0.0833333 23.9306 0 24.375 0C24.8194 0 25.25 0.0833333 25.6667 0.25C26.0833 0.416667 26.4444 0.666667 26.75 1L29.0417 3.33333C29.375 3.63889 29.6181 4 29.7708 4.41667C29.9236 4.83333 30 5.25 30 5.66667C30 6.11111 29.9236 6.53472 29.7708 6.9375C29.6181 7.34028 29.375 7.70833 29.0417 8.04167L7.08333 30H0ZM20.7917 9.20833L19.625 8L22 10.375L20.7917 9.20833Z' />
		</svg>
	);
};

export const Exercise = ({ size = 33, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 33 32'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<path d='M30.212 11.706L27.97 9.493l1.201-1.225-5.126-5.058-1.242 1.185-2.283-2.252L21.722.918c.614-.606 1.375-.902 2.282-.89.908.014 1.67.323 2.283.93l5.167 5.097c.614.606.921 1.35.921 2.233 0 .882-.307 1.626-.921 2.232l-1.242 1.186zM10.988 30.713c-.614.606-1.368.909-2.263.909-.894 0-1.648-.303-2.262-.909l-5.167-5.098c-.614-.605-.921-1.35-.921-2.232 0-.883.307-1.627.921-2.233l1.202-1.185 2.283 2.252-1.242 1.186L8.705 28.5l1.202-1.225 2.283 2.253-1.202 1.185zm15.9-13.277l2.283-2.253L17.036 3.21l-2.283 2.252 12.135 11.974zM15.674 28.5l2.283-2.292L5.862 14.274l-2.323 2.253L15.674 28.5zm-.24-9.247l4.405-4.307-2.563-2.529-4.365 4.347 2.523 2.49zm2.523 11.46c-.614.606-1.375.909-2.283.909-.908 0-1.669-.303-2.283-.909L1.296 18.779c-.614-.606-.921-1.357-.921-2.252 0-.896.307-1.647.921-2.253l2.283-2.252c.614-.606 1.368-.909 2.263-.909.894 0 1.649.303 2.263.909l2.523 2.49 4.405-4.347-2.523-2.45c-.614-.606-.921-1.357-.921-2.253 0-.896.307-1.646.921-2.252L14.793.957c.614-.606 1.368-.909 2.263-.909.894 0 1.649.303 2.263.91L31.454 12.93c.614.606.921 1.35.921 2.232 0 .883-.307 1.627-.921 2.233l-2.283 2.252c-.614.606-1.375.91-2.283.91-.908 0-1.669-.304-2.283-.91l-2.483-2.489-4.405 4.347 2.523 2.49c.614.605.921 1.35.921 2.232 0 .882-.307 1.627-.921 2.232l-2.283 2.253z' />
		</svg>
	);
};

export const HourGlass = ({ size = 42, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 33 42'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<path d='M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z' />
		</svg>
	);
};

export const Level = ({ size = 32, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 32 32'
			{...props}
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M11.8584 22.0177L16 19.5044L20.1416 22.0177L19.0442 17.3097L22.7257 14.1239L17.8761 13.7345L16 9.27434L14.1239 13.7345L9.27434 14.1239L12.9558 17.3097L11.8584 22.0177ZM16 32L11.2566 27.3274H4.67257V20.7434L0 16L4.67257 11.2566V4.67257H11.2566L16 0L20.7434 4.67257H27.3274V11.2566L32 16L27.3274 20.7434V27.3274H20.7434L16 32ZM16 28.0354L19.5398 24.4956H24.4956V19.5398L28.0354 16L24.4956 12.4602V7.50442H19.5398L16 3.9646L12.4602 7.50442H7.50442V12.4602L3.9646 16L7.50442 19.5398V24.4956H12.4602L16 28.0354Z' />
		</svg>
	);
};

export const Logo = ({ size = 117, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 117 92'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<path
				d='M8.98 47.098l.034.068c.02-.018.744-.022.764-.04l-.798-.028zm.066.131c1.369 2.682 3.985 4.918 8.56 6.454a40.012 40.012 0 011.35-2.95c-3.43-.703-6.874-1.876-9.91-3.504z'
				fill='#A73978'
				stroke='#4A1935'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M22.883 35.656c-4.317 4.428-8.673 15.36-7.784 21.794-10.896 12.17 9.41 26.222 20.066 30.97 12.943 5.769 37.088 1.382 41.17-8.411 17.72-5.812 11.038-15.324 8.996-18.353-12.834-19.031-14.116-31.899-25.429-37.279-14.683-6.983-25.303-.738-37.02 11.28z'
				fill='#36AD68'
				stroke='#1B4A3B'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M86.444 39.834l-.023.004c-4.269 3.607-7.879 2.926-11.6 2.867 0 0 1.716 3.511 2.6 4.806 3.232-2.365 6.453-4.74 9.023-7.677z'
				fill='#A73978'
				stroke='#4A1935'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M1 26.045C21.947 13.228 15.751-1.7 39.26 1.418c9.442 1.252 13.705 5.091 18.906 14.587C66.53 31.273 70.566 30.418 77.251 34c0 0 7.428 3.53 9.543 5.115-10.626 7.043-17.061.83-27.728 2.084-19.489 2.289-13.636 6.89-28.088 9.85-5.95 1.22-14.732-.135-21.426-3.788 5.866-5.133 14.145-11.096 19.266-17.997 2.085-2.81-.957-1.406 3.06-11.934C23.49 16.56 5.734 33.1 1 26.044z'
				fill='#A47FFF'
				stroke='#8B52FE'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M56.617 67.012c3.153 0 5.708-3.167 5.708-7.073 0-3.907-2.556-7.074-5.708-7.074-3.153 0-5.709 3.167-5.709 7.074 0 3.906 2.556 7.073 5.709 7.073z'
				fill='#fff'
				stroke='#066747'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M58.084 63.663c.86 0 1.557-.942 1.557-2.103 0-1.162-.697-2.103-1.557-2.103s-1.557.941-1.557 2.103c0 1.161.697 2.103 1.557 2.103z'
				fill='#000'
			/>
			<path
				d='M74.517 67.012c3.153 0 5.709-3.167 5.709-7.073 0-3.907-2.556-7.074-5.709-7.074-3.153 0-5.708 3.167-5.708 7.074 0 3.906 2.555 7.073 5.708 7.073z'
				fill='#fff'
				stroke='#066747'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M75.99 63.663c.86 0 1.557-.942 1.557-2.103 0-1.162-.697-2.103-1.556-2.103-.86 0-1.557.941-1.557 2.103 0 1.161.697 2.103 1.556 2.103z'
				fill='#000'
			/>
			<path
				d='M77.482 79.624c-8.001 2.71-9.508-4.07-24.63-2.924M54.626 73.648c-2.236 1.747-.626 3.17-4.411 5.114'
				stroke='#1B4A3B'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M28.934 16.828c4.537-1.426 8.676.8 11.97 1.73'
				stroke='#CC138E'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M28.888 27.441c-.981-.012-2.45 2.039-1.782 2.856 15.32 2.655 28.365 1.855 37.672-4.344.442-.713-1.38-3.211-2.268-2.988-10.632 4.48-21.43 5.138-33.622 4.476z'
				fill='#A73978'
				stroke='#621E45'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M89.568 77.81c2.746-3.253 1.83-10.857 5.276-11.567 2.406-.495 2.043 2.455 3.34 3.156.764.414 2.296-.166 4.142-1.579 2.733-2.091 6.241-.994 3.935 4.971-.37.958-2.602 2.46-2.856 3.543-.206.88 2.394 1.88 1.083 4.104-1.035 1.755-4.248 1.854-6.184 1.004-2.553-1.121-4.552 1.157-6.309.265-1.879-.954-3.037-3.176-2.427-3.898z'
				fill='#36AD68'
				stroke='#1B4A3B'
				strokeWidth={0.5}
				strokeLinecap='round'
			/>
			<path
				d='M94.162 46.795l-7.703 6.486 7.703 5.472M97.398 58.714l7.153-11.148M108.299 46.795l7.702 6.486-7.702 5.472'
				stroke='#AF1D1D'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export const Logout = ({ size = 32, ...props }: IconBaseProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 32 32'
			{...props}
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M2.96293 32C2.16293 32 1.46911 31.7062 0.881466 31.1185C0.293822 30.5309 0 29.8371 0 29.0371V2.96293C0 2.16293 0.293822 1.46911 0.881466 0.881467C1.46911 0.293823 2.16293 0 2.96293 0H15.9704V2.96293H2.96293V29.0371H15.9704V32H2.96293ZM23.8815 24.1481L21.7926 22.0148L26.326 17.4815H10.6667V14.5185H26.2667L21.7334 9.9852L23.8222 7.85187L32 16.0296L23.8815 24.1481Z' />
		</svg>
	);
};

export const HideChameleon = ({ size = 285, ...props }: IconBaseProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		{...props}>
		<path
			fill='#36AD68'
			stroke='#066747'
			strokeLinecap='round'
			strokeWidth={2}
			d='M137.5 1c-6.733.001-13.306 1.836-18.845 5.26-5.54 3.425-9.783 8.277-12.165 13.911C88.928 25.562 73.753 35.4 63.026 48.348 52.3 61.295 46.543 76.725 46.537 92.538c.018 1.166.068 2.332.148 3.496-13.45 12.461-20.68 27.38-20.685 42.681a49.432 49.432 0 0 0 1.685 12.504h219.69A49.37 49.37 0 0 0 249 138.715c-.005-15.301-7.235-30.22-20.685-42.681.08-1.164.129-2.33.147-3.495-.005-15.814-5.762-31.242-16.488-44.19-10.725-12.946-25.899-22.784-43.46-28.176-2.383-5.635-6.626-10.488-12.166-13.913C150.808 2.835 144.234 1 137.5 1Z'
		/>
		<path
			fill='#fff'
			stroke='#D9D9D9'
			strokeLinecap='round'
			strokeWidth={5}
			d='M100.667 103.025c-2.267 0-4.513.847-6.608 2.492-2.094 1.645-3.998 4.055-5.601 7.094-1.604 3.04-2.876 6.648-3.743 10.618-.868 3.971-1.315 8.227-1.315 12.525.022 2.954.255 5.889.692 8.725h33.15a60.58 60.58 0 0 0 .693-8.725c0-4.298-.447-8.554-1.315-12.525-.867-3.97-2.139-7.578-3.743-10.618-1.603-3.039-3.507-5.449-5.602-7.094-2.095-1.645-4.34-2.492-6.608-2.492Z'
		/>
		<path
			fill='#000'
			stroke='#2F2F2F'
			strokeLinecap='round'
			strokeWidth={5}
			d='M104.069 130.611a4.702 4.702 0 0 0-3.38 1.449 5.033 5.033 0 0 0-1.4 3.496c.016.76.202 1.507.542 2.181.341.674.827 1.257 1.421 1.705h5.634a4.907 4.907 0 0 0 1.421-1.705c.34-.674.526-1.42.542-2.181a5.038 5.038 0 0 0-1.4-3.497 4.702 4.702 0 0 0-3.38-1.448Z'
		/>
		<path
			fill='#fff'
			stroke='#D9D9D9'
			strokeLinecap='round'
			strokeWidth={5}
			d='M173.799 103.025c-2.267 0-4.513.847-6.608 2.492-2.095 1.645-3.998 4.055-5.601 7.094-1.604 3.04-2.876 6.648-3.743 10.618-.868 3.971-1.315 8.227-1.315 12.525.022 2.954.255 5.889.693 8.725h33.149c.438-2.836.671-5.771.692-8.725 0-4.298-.446-8.554-1.314-12.525-.868-3.97-2.139-7.578-3.743-10.618-1.603-3.039-3.507-5.449-5.602-7.094-2.095-1.645-4.34-2.492-6.608-2.492Z'
		/>
		<path
			fill='#000'
			stroke='#2F2F2F'
			strokeLinecap='round'
			strokeWidth={5}
			d='M170.024 130.611a4.7 4.7 0 0 0-3.38 1.448 5.039 5.039 0 0 0-1.401 3.497c.001.749.165 1.487.481 2.161a4.929 4.929 0 0 0 1.345 1.725h5.91a4.917 4.917 0 0 0 1.345-1.725c.316-.674.48-1.412.481-2.161a5.034 5.034 0 0 0-1.401-3.497 4.7 4.7 0 0 0-3.38-1.448Z'
		/>
		<path
			fill='#36AD68'
			stroke='#066747'
			strokeLinecap='round'
			strokeWidth={2}
			d='M47.455 155.67c-.249 4.627-16.61 23.308-21.511 2.826-1.621-6.775-7.237-11.805-14.17-7.065-13.04 8.915-13.521-4.165-5.122-13.6 14.166-15.912 42.742-17.211 58.558-3.709 4.404 3.76 13.798 23.727 3.072 17.309-7.248-4.337-19.826-14.405-20.827 4.239ZM237.34 155.67c.249 4.627 16.61 23.308 21.511 2.826 1.621-6.775 7.237-11.805 14.17-7.065 13.039 8.915 13.521-4.165 5.121-13.6-14.166-15.912-42.741-17.211-58.557-3.709-4.404 3.76-13.799 23.727-3.073 17.309 7.249-4.337 19.827-14.405 20.828 4.239Z'
		/>
	</svg>
);

export const Github = ({ size, ...props }: IconBaseProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			{...props}>
			<title>GitHub</title>
			<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
		</svg>
	);
};

export const Google = ({ size, ...props }: IconBaseProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			{...props}>
			<title>Google</title>
			<path d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' />
		</svg>
	);
};

export const LogoIcon = ({ size, ...props }: IconBaseProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 117 92'
			fill='none'
			{...props}>
			<path
				fill='#A73978'
				stroke='#4A1935'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='m8.98 47.098.034.068c.02-.018.744-.022.764-.04l-.798-.028Zm.066.131c1.369 2.682 3.985 4.918 8.56 6.454a40.012 40.012 0 0 1 1.35-2.95c-3.43-.703-6.874-1.876-9.91-3.504Z'
			/>
			<path
				fill='#36AD68'
				stroke='#1B4A3B'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M22.883 35.656c-4.317 4.428-8.673 15.36-7.784 21.794-10.896 12.17 9.41 26.222 20.066 30.97 12.943 5.769 37.088 1.382 41.17-8.411 17.72-5.812 11.038-15.324 8.996-18.353-12.834-19.031-14.116-31.899-25.429-37.279-14.683-6.983-25.303-.738-37.02 11.28Z'
			/>
			<path
				fill='#A73978'
				stroke='#4A1935'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='m86.444 39.834-.023.004c-4.269 3.607-7.879 2.926-11.6 2.867 0 0 1.716 3.511 2.6 4.806 3.232-2.365 6.453-4.74 9.023-7.677Z'
			/>
			<path
				fill='#A47FFF'
				stroke='#8B52FE'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M1 26.045C21.947 13.228 15.751-1.7 39.26 1.418c9.442 1.252 13.705 5.091 18.906 14.587C66.53 31.273 70.566 30.418 77.251 34c0 0 7.428 3.53 9.543 5.115-10.626 7.043-17.061.83-27.728 2.084-19.489 2.289-13.636 6.89-28.088 9.85-5.95 1.22-14.732-.135-21.426-3.788 5.866-5.133 14.145-11.096 19.266-17.997 2.085-2.81-.957-1.406 3.06-11.934C23.49 16.56 5.734 33.1 1 26.044Z'
			/>
			<path
				fill='#fff'
				stroke='#066747'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M56.617 67.012c3.153 0 5.708-3.167 5.708-7.073 0-3.907-2.556-7.074-5.708-7.074-3.153 0-5.709 3.167-5.709 7.074 0 3.906 2.556 7.073 5.709 7.073Z'
			/>
			<path
				fill='#000'
				d='M58.084 63.663c.86 0 1.557-.942 1.557-2.103 0-1.162-.697-2.103-1.557-2.103s-1.557.941-1.557 2.103c0 1.161.697 2.103 1.557 2.103Z'
			/>
			<path
				fill='#fff'
				stroke='#066747'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M74.517 67.012c3.153 0 5.709-3.167 5.709-7.073 0-3.907-2.556-7.074-5.709-7.074-3.153 0-5.708 3.167-5.708 7.074 0 3.906 2.555 7.073 5.708 7.073Z'
			/>
			<path
				fill='#000'
				d='M75.99 63.663c.86 0 1.557-.942 1.557-2.103 0-1.162-.697-2.103-1.556-2.103-.86 0-1.557.941-1.557 2.103 0 1.161.697 2.103 1.556 2.103Z'
			/>
			<path
				stroke='#1B4A3B'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M77.482 79.624c-8.001 2.71-9.508-4.07-24.63-2.924M54.626 73.648c-2.236 1.747-.626 3.17-4.411 5.114'
			/>
			<path
				stroke='#CC138E'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M28.934 16.828c4.537-1.426 8.676.8 11.97 1.73'
			/>
			<path
				fill='#A73978'
				stroke='#621E45'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M28.888 27.441c-.981-.012-2.45 2.039-1.782 2.856 15.32 2.655 28.365 1.855 37.672-4.344.442-.713-1.38-3.211-2.268-2.988-10.632 4.48-21.43 5.138-33.622 4.476Z'
			/>
			<path
				fill='#36AD68'
				stroke='#1B4A3B'
				strokeLinecap='round'
				strokeWidth={0.5}
				d='M89.568 77.81c2.746-3.253 1.83-10.857 5.276-11.567 2.406-.495 2.043 2.455 3.34 3.156.764.414 2.296-.166 4.142-1.579 2.733-2.091 6.241-.994 3.935 4.971-.37.958-2.602 2.46-2.856 3.543-.206.88 2.394 1.88 1.083 4.104-1.035 1.755-4.248 1.854-6.184 1.004-2.553-1.121-4.552 1.157-6.309.265-1.879-.954-3.037-3.176-2.427-3.898Z'
			/>
			<path
				stroke='#AF1D1D'
				strokeLinecap='round'
				d='m94.162 46.795-7.703 6.486 7.703 5.472M97.398 58.714l7.153-11.148M108.299 46.795l7.702 6.486-7.702 5.472'
			/>
		</svg>
	);
};
