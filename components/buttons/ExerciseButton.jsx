'use client';

import { MdCheck, MdStar } from 'react-icons/md';
import { ChallengeCup } from '../svgs';
import { FloatingIsland, FloatingIslandRock } from '../svgs/exercise-props';
import Link from 'next/link';
import Image from 'next/image';

const ExerciseButton = ({
	id,
	index,
	totalCount,
	locked = false,
	current = false,
	variant = 'grass',
	character = undefined,
}) => {
	const cycleLength = 8;
	const cycleIndex = index % cycleLength;

	let indentationLevel;

	if (cycleIndex <= 2) {
		indentationLevel = cycleIndex;
	} else if (cycleIndex <= 4) {
		indentationLevel = 4 - cycleIndex;
	} else if (cycleIndex <= 6) {
		indentationLevel = 4 - cycleIndex;
	} else {
		indentationLevel = cycleIndex - 8;
	}

	const rightPositon = indentationLevel * 20;

	const isFirst = index === 0;
	const isLast = index === totalCount;
	const isCompleted = !current && !locked;

	const Icon = isCompleted ? MdCheck : isLast ? ChallengeCup : MdStar;

	const href = isCompleted ? `/lesson/${id}` : '/lesson';

	const bgColor = isCompleted
		? 'lime-400'
		: locked
		? 'gray-400'
		: 'primary-400';
	const iconColor = isCompleted
		? 'lime-500'
		: locked
		? 'gray-500'
		: 'purple-900';

	const IslandVariant =
		variant === 'rock' ? FloatingIslandRock : FloatingIsland;

	return (
		<Link
			href={href}
			aria-disabled={locked}
			style={{
				pointerEvents: locked ? 'none' : 'auto',
				right: `${rightPositon}%`,
				marginTop: isFirst && !isCompleted ? 24 : 4,
			}}
			className='relative flex-grow group'>
			<div className='size-[165px] relative flex justify-center items-center'>
				{current && (
					<div
						className='absolute px-3 py-2.5 border-2 rounded-xl
							font-bold uppercase text-primary-400 bg-white
							animate-bounce tracking-wide z-10 -top-8'>
						começar
						<div
							className='absolute left-1/2 -bottom-2 size-0 border-x-8
								border-x-transparent border-t-8 transform -translate-x-1/2'
						/>
					</div>
				)}
				{character && (
					<div className='absolute size-32 -top-1/2 -translate-y-[15%]'>
						<div className='relative w-full h-full'>
							<Image
								src={character}
								alt=''
								fill
								sizes='100%'
							/>
						</div>
					</div>
				)}
				<div
					className={`size-20 border-b-8 rounded-full
							left-1/2 top-[10%] absolute scale-y-75
							-translate-x-1/2 flex justify-center 
							items-center p-4 text-${iconColor} 
							bg-${bgColor} border-${iconColor}
							transition-all group-active:border-b-4
							group-hover:scale-x-105 group-focus:scale-x-105
							group-hover:scale-y-[0.8] group-focus:scale-y-[0.8]`}>
					<Icon size={'100%'} />
				</div>
				<IslandVariant size={180} />
			</div>
		</Link>
	);
};
export default ExerciseButton;
