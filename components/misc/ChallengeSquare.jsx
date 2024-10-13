'use client';

import { ChallengeCup } from '@/components/svgs';

const ChallengeSquare = ({ children, type = 'locked', number = 1 }) => {
	return (
		<div className=''>
			<div
				className={`min-w-32 min-h-44 aspect-[3/4]
				rounded-xl flex flex-col overflow-hidden ${
					type === 'locked'
						? 'bg-gray-300 text-gray-600'
						: type === 'unlocked'
						? 'bg-primary-50 text-primary-400'
						: 'bg-lime-50 text-lime-500'
				} border-2 border-current`}>
				<div className='relative flex justify-center items-center h-4/5 w-full'>
					<ChallengeCup size={120} />
					<h1
						className='absolute top-[43%] left-1/2 text-white
						-translate-x-1/2 -translate-y-1/2 text-center'>
						{number}
					</h1>
				</div>
				<div className='w-full h-1/5 bg-current flex justify-center items-center'>
					<p
						className='text-lg font-semibold text-white
						flex justify-center items-center gap-2'>
						{children ? children : 'Desafio'}
					</p>
				</div>
			</div>
		</div>
	);
};
export default ChallengeSquare;
