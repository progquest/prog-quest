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

const PlatformNavbar = ({ current = 'exercise' }) => {
	return (
		<aside
			className='h-full w-full bg-primary-400
			rounded-t-xl md:rounded-r-xl md:rounded-l-none'>
			<nav
				className='w-full h-full flex flex-row md:flex-col justify-center
				md:justify-between items-center md:py-8 md:px-2 py-0 px-8 gap-6'>
				<div className='flex flex-row md:flex-col gap-6 md:w-full'>
					{/* LOGO */}
					<Link
						href='/'
						className='hidden md:flex gap-2 active:scale-95
						items-center flex-row hover:scale-105 focus:scale-105
						focus:outline-none'>
						<Logo size={48} />
						<h2 className='text-lg text-white font-bold'>
							ProgQuest
						</h2>
					</Link>

					<hr className='hidden md:block bg-white rounded-sm w-full h-px' />

					{/* NAVEGAÇÃO */}
					<Link
						href='#'
						className='md:w-full flex flex-row shadow-md rounded-full
						hover:-translate-y-1 active:translate-y-0 text-white
						focus:-translate-y-1 font-semibold mouse-pointer
						text-sm py-3 md:py-2 px-3 gap-2 transition-all items-center
						bg-lime-500 hover:bg-lime-400 focus:bg-lime-400'
						style={{
							outline:
								current === 'exercise' ? 'solid 2px white' : '',
						}}>
						<Exercise />
						<p className='hidden md:block'>Exercícios</p>
					</Link>
					<Link
						href='#'
						className='md:w-full flex flex-row shadow-md rounded-full
						hover:-translate-y-1 active:translate-y-0 text-white
						focus:-translate-y-1 font-semibold mouse-pointer
						text-sm py-3 md:py-2 px-3 gap-2 transition-all items-center
						bg-lime-500 hover:bg-lime-400 focus:bg-lime-400'
						style={{
							outline:
								current === 'level' ? 'solid 2px white' : '',
						}}>
						<Level />
						<p className='hidden md:block'>Nível</p>
					</Link>
					<Link
						href='#'
						className='md:w-full flex flex-row shadow-md rounded-full
						hover:-translate-y-1 active:translate-y-0 text-white
						focus:-translate-y-1 font-semibold mouse-pointer
						text-sm py-3 md:py-2 px-3 gap-2 transition-all items-center
						bg-lime-500 hover:bg-lime-400 focus:bg-lime-400'
						style={{
							outline:
								current === 'challenge'
									? 'solid 2px white'
									: '',
						}}>
						<Challenges />
						<p className='hidden md:block'>Desafios</p>
					</Link>
					<Link
						href='#'
						className='md:w-full flex flex-row shadow-md rounded-full
						hover:-translate-y-1 active:translate-y-0 text-white
						focus:-translate-y-1 font-semibold mouse-pointer
						text-sm py-3 md:py-2 px-3 gap-2 transition-all items-center
						bg-lime-500 hover:bg-lime-400 focus:bg-lime-400'
						style={{
							outline:
								current === 'profile' ? 'solid 2px white' : '',
						}}>
						<AccountCircle />
						<p className='hidden md:block'>Perfil</p>
					</Link>
				</div>
				{/* SAIR */}
				<div className='hidden md:block md:w-full'>
					<Link
						href='#'
						className='md:w-full flex flex-row shadow-md rounded-full
						hover:-translate-y-1 active:translate-y-0 text-white
						focus:-translate-y-1 font-semibold mouse-pointer
						text-sm py-3 md:py-2 px-3 gap-2 transition-all items-center
						bg-red-500 hover:bg-red-400 focus:bg-red-400'>
						<Logout />
						<p className='hidden md:block'>Sair</p>
					</Link>
				</div>
			</nav>
		</aside>
	);
};

export default PlatformNavbar;
