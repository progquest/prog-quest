'use client';

import { useState } from 'react';
import { Todoroki, Endeavor, AllMight } from '@/components/svgs/characters';

const Levels = ['iniciante', 'intermediário', 'avançado'];
const Descriptions = [
	<div>
		O seu nível de conhecimento atual é
		<div className='inline font-semibold text-primary-300'> Iniciante!</div>{' '}
		Este é apenas o começo da sua jornada. Você pode refazer o teste para
		subir de nível, enfrentando mais desafios que esperam por você! <br />{' '}
		<br /> Prepare-se para aprimorar suas habilidades e tornar-se um
		verdadeiro herói da programação.{' '}
		<div className='inline font-semibold text-primary-300'>Plus Ultra!</div>
	</div>,
	<div>
		O seu nível de conhecimento atual é
		<div className='inline font-semibold text-primary-300'>
			{' '}
			Intermediário!
		</div>{' '}
		Você está progredindo de maneira impressionante nesta jornada de
		conhecimento.
		<br /> <br /> Continue desafiando-se e enfrentando os testes com
		determinação. A estrada da maestria está à sua frente, e você está no
		caminho certo para se tornar um verdadeiro mestre da programação.{' '}
		<div className='inline font-semibold text-primary-300'>Plus Ultra!</div>
	</div>,
	<div>
		O seu nível de conhecimento atingiu o
		<div className='inline font-semibold text-primary-300'> Avançado!</div>{' '}
		Toda a minha admiração por você, pois você se tornou verdadeiramente
		excepcional nesta jornada.
		<br /> <br />
		Você não está apenas dominando a programação, você está moldando o seu
		futuro com o seu conhecimento! Continue avançando!
		<div className='inline font-semibold text-primary-300'>
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

/**
 * Página de nível de conhecimento do usuário
 *
 * Esta página mostrará qual nível de conhecimento o usuário está atualmente,
 * e uma breve descrição do que o nível significa.
 *
 * @returns {JSX.Element} Elemento JSX da página de nível de conhecimento
 */
const LevelPage = () => {
	const [level, setLevel] = useState(0);

	return (
		<div className='flex flex-col justify-center items-center py-16 px-8 h-full lg:px-16'>
			<div className='flex flex-col gap-6 w-full aspect-[12/5] min-h-80'>
				<div className='flex flex-row gap-6 h-1/2'>
					<div
						className='w-1/4 aspect-[3/4] bg-gray-200 border-2 
						border-gray-400 rounded-tl-3xl flex flex-col
						justify-center items-start py-6 px-4 gap-2 lg:px-8'>
						<div
							className='flex flex-row gap-2 justify-center w-full 
							items-center'>
							<div className='w-3 h-3 rounded-full bg-primary-300'></div>
							<div className='w-3 h-3 rounded-full bg-primary-300'></div>
						</div>
						<div
							className='flex justify-center items-center bg-gray-400 rounded-lg aspect-square
							w-full'>
							{Icons[level]}
						</div>
						<p className='w-full text-sm font-semibold text-center text-gray-600'>
							{Levels[level].toUpperCase()}
						</p>
					</div>
					<div
						className='py-4 px-3 bg-gray-200 rounded-tr-3xl border-2 border-gray-400 
						flex-grow'>
						<div
							className='overflow-y-scroll w-full text-xs h-full
							snap-y scroll-my-3 md:text-sm xl:text-lg 
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
