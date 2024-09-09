'use client';
import Link from 'next/link';
import { HorizontalLogo } from '@/components/logo';

/**
 * Um elemento de barra de navegação que está sempre no topo da página.
 *
 * Essa barra de navegação tem um logotipo da ProgQuest, e um link para
 * cada uma das páginas do site: `Home`, `About`, `Contact` e `Sign-Up`.
 *
 * @returns {JSX.Element} A barra de navegação
 */
const Navbar = () => {
	return (
		<header
			className='fixed top-0 left-0 w-full px-5 py-4 bg-background-200
      flex justify-between items-center z-10'>
			<Link href='/'>
				<HorizontalLogo className='text-white' />
			</Link>

			<nav>
				<Link
					href='/'
					className='relative text-md text-white font-medium ml-10'>
					Home
				</Link>
				<Link
					href='/'
					className='relative text-md text-white font-medium ml-10'>
					About
				</Link>
				<Link
					href='/'
					className='relative text-md text-white font-medium ml-10'>
					Contact
				</Link>
				<Link
					href='/auth'
					className='relative text-md text-white font-medium ml-10'>
					Sign-Up
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
