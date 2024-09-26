'use client';
import Link from 'next/link';

/**
 * Um componente que renderiza uma navegação com links para Home, About, Contact e Sign-Up.
 *
 * @param {string} [className] - Classes tailwind adicionais.
 * @returns {JSX.Element} O componente de navegação.
 */
const NavigationItems = ({ className = '' }) => {
	return (
		<nav className={className}>
			<Link
				href='#home'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Home
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
			<Link
				href='#about'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Sobre
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
			<Link
				href='#knowlage'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Conhecimento
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
			<Link
				href='#contact'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Contatos
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
			<Link
				href='/auth'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Fazer Login
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
		</nav>
	);
};

export default NavigationItems;
