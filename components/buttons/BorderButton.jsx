'use client';

/**
 * Um botão com borda e fundo transparente
 *
 * @param {string} [className] - Classes tailwind adicionais.
 * @param {boolean} [selected=false] - Se o botão está selecionado
 * @returns {JSX.Element} O botão com borda e fundo transparente
 */
const BorderButton = ({ children, className = '', selected = false }) => {
	return (
		<div
			className={
				!selected
					? `w-full flex flex-row rounded-full mouse-pointer
					transition-all items-center border-transparent border
					hover:bg-primary-50 hover:border-primary-400
					group-focus:bg-primary-50 group-focus:border-primary-400
					` + className
					: `w-full flex flex-row rounded-full mouse-pointer
					transition-all items-center border text-primary-400
					bg-primary-50 border-primary-400
					` + className
			}>
			{children}
		</div>
	);
};
export default BorderButton;
