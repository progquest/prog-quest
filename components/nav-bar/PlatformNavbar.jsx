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
import { CurrentMainPage } from '@/app/(aplication)/app/page';
import { useContext } from 'react';

/**
 * Componente de barra lateral que aparece na tela do usuário.
 * A barra tem uma lista de navegação com links para as páginas de exercícios,
 * níveis, desafios, perfil e sair.
 *
 * @returns {JSX.Element} Componente da barra lateral
 */
const PlatformNavbar = () => {
	const [page, setPage] = useContext(CurrentMainPage);

	return (
		<aside className='h-full w-full bg-white border-gray-400 border-t md:border-r'>
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
					<button
						onClick={() => setPage('exercise')}
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={page === 'exercise'}
							className='py-3 md:py-2 px-3 gap-2'>
							<Exercise size={24} />
							<p className='hidden md:block'>Exercícios</p>
						</BorderButton>
					</button>
					<button
						onClick={() => setPage('level')}
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={page === 'level'}
							className='py-3 md:py-2 px-3 gap-2'>
							<Level size={24} />
							<p className='hidden md:block'>Nível</p>
						</BorderButton>
					</button>
					<button
						onClick={() => setPage('challenge')}
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={page === 'challenge'}
							className='py-3 md:py-2 px-3 gap-2'>
							<Challenges size={24} />
							<p className='hidden md:block'>Desafios</p>
						</BorderButton>
					</button>
					<button
						onClick={() => setPage('profile')}
						className='md:w-full group text-black font-semibold
						rounded-full text-sm focus:outline-none
						hover:text-primary-400 focus:text-primary-400'>
						<BorderButton
							selected={page === 'profile'}
							className='py-3 md:py-2 px-3 gap-2'>
							<AccountCircle size={24} />
							<p className='hidden md:block'>Perfil</p>
						</BorderButton>
					</button>
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
