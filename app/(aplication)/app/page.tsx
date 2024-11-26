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
		<div className='flex relative flex-col-reverse w-full h-screen md:flex-row'>
			<div className='fixed bottom-0 z-10 w-full h-20 md:top-0 md:h-screen md:w-48'>
				{/* NAVBAR */}
				<CurrentMainPage.Provider value={[page, setPage]}>
					<PlatformNavbar />
				</CurrentMainPage.Provider>
			</div>
			<div className='w-full h-full bg-gray-50 md:pl-48'>
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
