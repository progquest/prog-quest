import React from 'react';

export const DefaultButton = ({
	className = '',
	children,
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={`flex flex-row justify-center items-center
			p-2.5 gap-2.5 bg-purple-100 shadow-button-default active:shadow-button-active
			rounded-full m-2.5 text-white text-md lg:text-xl active:translate-y-[4px]
			font-semibold mouse-pointer hover:underline transition-all
			${className}`}>
			{children}
		</button>
	);
};
