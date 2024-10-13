'use client';

import { ChallengPage, LevelPage, ProfilePage } from '@/components/main-pages';
import { PlatformNavbar } from '@/components/nav-bar';
import { createContext, useState } from 'react';

export const CurrentMainPage = createContext();

/**
 * Responsável por renderizar a barra de navegação e a página principal
 * de acordo com a página atual.
 *
 * @returns {JSX.Element} Elemento JSX da página principal
 */
const MainPage = () => {
	const [page, setPage] = useState('profile');

	return (
		<div
			className='flex flex-col-reverse md:flex-row relative
			w-full h-screen text-text-900 bg-background-50'>
			<div className='fixed md:relative w-full h-20 md:h-screen md:w-48'>
				{/* NAVBAR */}
				<CurrentMainPage.Provider value={[page, setPage]}>
					<PlatformNavbar />
				</CurrentMainPage.Provider>
			</div>
			{page === 'profile' ? (
				<ProfilePage />
			) : page === 'challenge' ? (
				<ChallengPage />
			) : page === 'level' ? (
				<LevelPage />
			) : (
				<div>{page}</div>
			)}
		</div>
	);
};
export default MainPage;
