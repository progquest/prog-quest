'use client';

import Link from 'next/link';
import { SecondaryButton } from '@/components/buttons';
import {
	AccountCircle,
	Challenges,
	Exercise,
	Level,
	Logo,
} from '@/components/svgs';

const PlatformNavbar = () => {
	return (
		<aside
			className='flex flex-col h-full w-full justify-evenly md:h-screen bg-primary-400
			rounded-t-xl md:rounded-r-xl md:rounded-l-none'>
			<nav
				className='relative w-full h-full flex flex-row md:flex-col
				justify-evenly items-center py-32'>
				{/* LOGO */}
				<Link
					href='/'
					className='absolute hidden md:flex gap-2 top-12 active:scale-95
					items-center flex-row left-0 hover:scale-105 focus:scale-105'>
					<Logo size={48} />
					<h2 className='text-lg text-white font-bold'>ProgQuest</h2>
				</Link>

				{/* NAVEGAÇÃO */}
				<Link
					href='#'
					className='md:px-3 md:w-full'>
					<SecondaryButton
						className='text-sm py-3 md:py-2 px-3 gap-2 w-full 
						justify-start items-center'>
						<Exercise />
						<p className='hidden md:block'>Exercícios</p>
					</SecondaryButton>
				</Link>
				<Link
					href='#'
					className='md:px-3 md:w-full'>
					<SecondaryButton
						className='text-sm py-3 md:py-2 px-3 gap-2 w-full 
						justify-start items-center'>
						<Level />
						<p className='hidden md:block'>Nível</p>
					</SecondaryButton>
				</Link>
				<Link
					href='#'
					className='md:px-3 md:w-full'>
					<SecondaryButton
						className='text-sm py-3 md:py-2 px-3 gap-2 w-full 
						justify-start items-center'>
						<Challenges />
						<p className='hidden md:block'>Desafios</p>
					</SecondaryButton>
				</Link>
				<Link
					href='#'
					className='md:px-3 md:w-full'>
					<SecondaryButton
						className='text-sm py-3 md:py-2 px-3 gap-2 w-full 
						justify-start items-center outline-white outline'>
						<AccountCircle />
						<p className='hidden md:block'>Perfil</p>
					</SecondaryButton>
				</Link>
			</nav>
		</aside>
	);
};

export default PlatformNavbar;
