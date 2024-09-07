'use client';
import React from 'react';

/**
 * Um botão padronizado com os estilos adequados
 *
 * Sombra, cor e cor de text pre selecionadas
 * @returns Um botão padronizado
 */
const DefaultButton = ({ className = '', children, ...props }) => {
	return (
		<button
			{...props}
			className={`flex flex-row justify-center items-center
			p-2.5 gap-2.5 bg-purple-200 shadow-button-default active:shadow-button-active
			rounded-2xl m-2.5 text-white text-md lg:text-xl active:translate-y-[4px]
			font-semibold mouse-pointer hover:underline transition-all
			${className}`}>
			{children}
		</button>
	);
};

export default DefaultButton;
