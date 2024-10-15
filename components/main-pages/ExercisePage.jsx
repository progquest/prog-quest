'use client';

import { DefaultButton, ExerciseButton } from '../buttons';

// Valores debug !!!TIRAR QUANDO TIVER O BACKEND!!!
const lessons = [
	{
		id: 0,
		completed: true,
		variant: 'grass',
		character: '/assets/mascote/ash-1.png',
	},
	{
		id: 1,
		completed: false,
		variant: 'grass',
	},
	{
		id: 2,
		completed: false,
		variant: 'grass',
	},
	{
		id: 3,
		completed: false,
		variant: 'grass',
	},
	{
		id: 4,
		completed: false,
		variant: 'rock',
	},
	{
		id: 5,
		completed: false,
		variant: 'rock',
	},
	{
		id: 6,
		completed: false,
		variant: 'rock',
		character: '/assets/mascote/goku.png',
	},
	{
		id: 7,
		completed: false,
		variant: 'rock',
	},
	{
		id: 8,
		completed: false,
		variant: 'rock',
	},
];
const activeLesson = {
	id: 1,
};

const ExercisePage = () => {
	return (
		<div className='flex flex-col bg-blue-400 items-center px-8 py-16 lg:px-16 gap-32'>
			<div
				className='w-full max-w-screen-lg flex flex-row justify-center items-center
				bg-primary-400 shadow-button-default h-24 text-2xl
				py-6 rounded-2xl gap-4 font-bold text-white shadow-primary-500'>
				Conceitos de POO
			</div>
			<div
				className='flex flex-col items-center w-full h-full mb-20 relative 
				max-w-screen-md'>
				{lessons.map((lesson, index) => {
					const isCurrent = lesson.id === activeLesson?.id;
					const isLocked = !lesson.completed && !isCurrent;

					return (
						<ExerciseButton
							id={lesson.id}
							index={index}
							current={isCurrent}
							locked={isLocked}
							totalCount={lessons.length - 1}
							key={lesson.id}
							variant={lesson.variant || 'grass'}
							character={lesson?.character}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default ExercisePage;
