import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<header
			className='fixed top-0 left-0 w-full px-5 py-1/6 bg-background-200
      flex justify-between items-center z-10'>
			<Link
				href='/'
				className='text-2xl text-white font-bold flex items-center'>
				<Image
					alt='logo'
					src={'/assets/icons/login-page-icon/logo-icon.svg'}
					width={60}
					height={60}
				/>
				ProgQuest
			</Link>

			<nav>
				<Link
					href='/'
					className='relative text-md text-white font-medium ml-10
          before:content-none before:absolute before:w-0 before:h-1
          before:bg-white before:top-full before:left-0 transition-all
          hover:before:w-full'>
					Home
				</Link>
				<Link
					href='/'
					className='relative text-md text-white font-medium ml-10
          before:content-none before:absolute before:w-0 before:h-1
          before:bg-white before:top-full before:left-0 transition-all
          hover:before:w-full'>
					About
				</Link>
				<Link
					href='/'
					className='relative text-md text-white font-medium ml-10
          before:content-none before:absolute before:w-0 before:h-1
          before:bg-white before:top-full before:left-0 transition-all
          hover:before:w-full'>
					Contact
				</Link>
				<Link
					href='/auth'
					className='relative text-md text-white font-medium ml-10
          before:content-none before:absolute before:w-0 before:h-1
          before:bg-white before:top-full before:left-0 transition-all
          hover:before:w-full'>
					Sign-Up
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
