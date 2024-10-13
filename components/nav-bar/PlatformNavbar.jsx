'use client';

import Link from 'next/link';
import {
	AccountCircle,
	Challenges,
	Exercise,
	Level,
	Logo,
	Logout,
} from '@/components/svgs';
import { BorderButton } from '@/components/buttons';

const PlatformNavbar = ({ current = 'exercise' }) => {
	return (
		<aside className='h-full w-full border-gray-400 border-t md:border-r'>
			<nav
				className='w-full h-full flex flex-row md:flex-col justify-center
				md:justify-between items-center md:py-8 md:px-4 py-0 px-8 gap-6'>
				<div className='flex flex-row md:flex-col gap-6 md:w-full'>
					{/* LOGO */}
					<Link
						href='/'
						className='hidden md:flex gap-2 active:scale-95
						items-center flex-row hover:scale-105 focus:scale-105
						focus:outline-none'>
						<Logo size={48} />
						<h2 className='text-lg text-primary-400 font-bold'>
							ProgQuest
						</h2>
					</Link>

					<hr className='hidden md:block bg-white rounded-sm w-full h-px' />

					{/* NAVEGAÇÃO */}
					<Link
						href='#'
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={current === 'exercise'}
							className='py-3 md:py-2 px-3 gap-2'>
							<Exercise size={24} />
							<p className='hidden md:block'>Exercícios</p>
						</BorderButton>
					</Link>
					<Link
						href='#'
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={current === 'level'}
							className='py-3 md:py-2 px-3 gap-2'>
							<Level size={24} />
							<p className='hidden md:block'>Nível</p>
						</BorderButton>
					</Link>
					<Link
						href='#'
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={current === 'challenge'}
							className='py-3 md:py-2 px-3 gap-2'>
							<Challenges size={24} />
							<p className='hidden md:block'>Desafios</p>
						</BorderButton>
					</Link>
					<Link
						href='#'
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={current === 'profile'}
							className='py-3 md:py-2 px-3 gap-2'>
							<AccountCircle size={24} />
							<p className='hidden md:block'>Perfil</p>
						</BorderButton>
					</Link>
				</div>
				{/* SAIR */}
				<div className='md:w-full'>
					<Link
						href='#'
						className='md:w-full group text-red-700 font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton className='py-3 md:py-2 px-3 gap-2'>
							<Logout size={24} />
							<p className='hidden md:block'>Sair</p>
						</BorderButton>
					</Link>
				</div>
			</nav>
		</aside>
	);
};

export default PlatformNavbar;
