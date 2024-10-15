'use client';

import {
	ChallengPage,
	ExercisePage,
	LevelPage,
	ProfilePage,
} from '@/components/main-pages';
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
	const [page, setPage] = useState('exercise');

	return (
		<div className='flex flex-col-reverse md:flex-row relative w-full h-screen'>
			<div className='fixed bottom-0 w-full h-20 md:top-0 md:h-screen md:w-48 z-10'>
				{/* NAVBAR */}
				<CurrentMainPage.Provider value={[page, setPage]}>
					<PlatformNavbar />
				</CurrentMainPage.Provider>
			</div>
			<div className='h-full w-full md:pl-48 bg-gray-50'>
				{page === 'profile' ? (
					<ProfilePage />
				) : page === 'challenge' ? (
					<ChallengPage />
				) : page === 'level' ? (
					<LevelPage />
				) : page === 'exercise' ? (
					<ExercisePage />
				) : (
					<div>{page}</div>
				)}
			</div>
		</div>
	);
};
export default MainPage;
