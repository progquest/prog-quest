'use client';

import { useState } from 'react';
import { Todoroki, Endeavor, AllMight } from '@/components/svgs/characters';

const Levels = ['iniciante', 'intermediário', 'avançado'];
const Descriptions = [
	<div>
		O seu nível de conhecimento atual é
		<div className='text-primary-300 font-semibold inline'> Iniciante!</div>{' '}
		Este é apenas o começo da sua jornada. Você pode refazer o teste para
		subir de nível, enfrentando mais desafios que esperam por você! <br />{' '}
		<br /> Prepare-se para aprimorar suas habilidades e tornar-se um
		verdadeiro herói da programação.{' '}
		<div className='text-primary-300 font-semibold inline'>Plus Ultra!</div>
	</div>,
	<div>
		O seu nível de conhecimento atual é
		<div className='text-primary-300 font-semibold inline'>
			{' '}
			Intermediário!
		</div>{' '}
		Você está progredindo de maneira impressionante nesta jornada de
		conhecimento.
		<br /> <br /> Continue desafiando-se e enfrentando os testes com
		determinação. A estrada da maestria está à sua frente, e você está no
		caminho certo para se tornar um verdadeiro mestre da programação.{' '}
		<div className='text-primary-300 font-semibold inline'>Plus Ultra!</div>
	</div>,
	<div>
		O seu nível de conhecimento atingiu o
		<div className='text-primary-300 font-semibold inline'> Avançado!</div>{' '}
		Toda a minha admiração por você, pois você se tornou verdadeiramente
		excepcional nesta jornada.
		<br /> <br />
		Você não está apenas dominando a programação, você está moldando o seu
		futuro com o seu conhecimento! Continue avançando!
		<div className='text-primary-300 font-semibold inline'>
			{' '}
			Plus Ultra!
		</div>
	</div>,
];
const Icons = [
	<Todoroki
		size={60}
		className='w-[70%] h-[70%]'
	/>,
	<Endeavor
		size={60}
		className='w-[70%] h-[70%]'
	/>,
	<AllMight
		size={60}
		className='w-[70%] h-[70%]'
	/>,
];

const LevelPage = () => {
	const [level, setLevel] = useState(0);

	return (
		<div
			className='flex flex-col h-full md:w-4/5 overflow-auto 
			items-center justify-center px-8 py-16 lg:px-16 flex-grow'>
			<div className='flex flex-col gap-6 w-full aspect-[12/5] min-h-80'>
				<div className='flex flex-row gap-6 h-1/2'>
					<div
						className='w-1/4 aspect-[3/4] bg-gray-200 border-2 
						border-gray-400 rounded-tl-3xl flex flex-col
						justify-center items-start py-6 px-4 gap-2 lg:px-8'>
						<div
							className='flex flex-row justify-center 
							items-center gap-2 w-full'>
							<div className='w-3 h-3 bg-primary-300 rounded-full'></div>
							<div className='w-3 h-3 bg-primary-300 rounded-full'></div>
						</div>
						<div
							className='bg-gray-400 rounded-lg aspect-square
							w-full flex justify-center items-center'>
							{Icons[level]}
						</div>
						<p className='w-full text-center text-gray-600 text-sm font-semibold'>
							{Levels[level].toUpperCase()}
						</p>
					</div>
					<div
						className='bg-gray-200 border-2 border-gray-400 
						flex-grow rounded-tr-3xl px-3 py-4'>
						<div
							className='overflow-y-scroll w-full h-full
							snap-y scroll-my-3 text-xs md:text-sm xl:text-lg 
							2xl:text-2xl'>
							{Descriptions[level]}
						</div>
					</div>
				</div>
				<div
					className='flex bg-gray-200 border-2 border-gray-400
					w-full h-1/2 rounded-b-[80px] lg:rounded-b-full flex-row px-12 py-8
					justify-center items-center'>
					<div
						className={`h-[50%] aspect-square min-h-10
						rounded-full scale-150 flex
						justify-center items-center
						${level >= 0 ? 'bg-primary-300' : 'bg-gray-400'}`}>
						<Todoroki
							size={30}
							className='w-[80%] h-[80%]'
						/>
					</div>
					<div
						className={`min-h-8 aspect-[3/1] h-[35%]
						${level > 0 ? 'bg-primary-200' : 'bg-gray-300'}`}></div>
					<div
						className={`h-[50%] aspect-square min-h-10
						rounded-full scale-150 flex
						justify-center items-center
						${level >= 1 ? 'bg-primary-300' : 'bg-gray-400'}`}>
						<Endeavor
							size={30}
							className='w-[80%] h-[80%]'
						/>
					</div>
					<div
						className={`min-h-8 aspect-[3/1] h-[35%]
						${level > 1 ? 'bg-primary-200' : 'bg-gray-300'}`}></div>
					<div
						className={`h-[50%] aspect-square min-h-10
						rounded-full scale-150 flex
						justify-center items-center
						${level >= 2 ? 'bg-primary-300' : 'bg-gray-400'}`}>
						<AllMight
							size={30}
							className='w-[80%] h-[80%]'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LevelPage;
