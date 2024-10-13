'use client';

const ChallengeCup = ({ size = 204 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 204 204'
			fill='currentColor'
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
export default ChallengeCup;
