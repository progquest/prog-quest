'use client';

import Link from 'next/link';
import { SecondaryButton } from '@/components/buttons';
import {
	AccountCircle,
	Challenges,
	Exercise,
	Level,
	Logo,
	Logout,
} from '@/components/svgs';

const PlatformNavbar = () => {
	return (
		<aside
			className='h-full w-full md:h-screen bg-primary-400
			rounded-t-xl md:rounded-r-xl md:rounded-l-none'>
			<nav
				className='w-full h-full flex flex-row md:flex-col justify-center
				md:justify-between items-center md:py-8 md:px-0 py-0 px-8 gap-6'>
				<div className='flex flex-row md:flex-col gap-6'>
					{/* LOGO */}
					<Link
						href='/'
						className='hidden md:flex gap-2 active:scale-95
					items-center flex-row hover:scale-105 focus:scale-105'>
						<Logo size={48} />
						<h2 className='text-lg text-white font-bold'>
							ProgQuest
						</h2>
					</Link>

					<hr className='bg-white rounded-sm w-full h-px' />

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
				</div>
				{/* SAIR */}
				<Link
					href='#'
					className='md:px-3 md:w-full hidden md:block'>
					<SecondaryButton
						className='text-sm py-3 md:py-2 px-3 gap-2 w-full
						bg-red-500 hover:bg-red-400 focus:bg-red-400
						justify-start items-center'>
						<Logout />
						<p className='hidden md:block'>Sair</p>
					</SecondaryButton>
				</Link>
			</nav>
		</aside>
	);
};

export default PlatformNavbar;
