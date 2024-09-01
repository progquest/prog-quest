'use client';
import React from 'react';

export const DefaultButton = ({
	className = '',
	children,
	type = 'button',
	onClick = () => {},
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`flex flex-row justify-center items-center
			p-2.5 gap-2.5 bg-purple-200 shadow-button-default active:shadow-button-active
			rounded-2xl m-2.5 text-white text-md lg:text-xl active:translate-y-[4px]
			font-semibold mouse-pointer hover:underline transition-all
			${className}`}>
			{children}
		</button>
	);
};
