'use client';
import { Navigation } from '@/components/nav-bar';

/**
 * Componete da Página inicial do site
 * @returns {JSX.Element} Next Component: 'Home Page'
 */
const Home = () => {
	return (
		<div className='w-full text-sm bg-white h-max'>
			<Navigation />
			{/* Banner */}
			<div
				className='w-full bg-primary-300 rounded-b-[4rem] flex flex-col
				lg:flex-row mt-2'>
				<div className='flex flex-col items-center p-20 pb-10 text-center md:pb-20 lg:items-start lg:text-left'>
					<h1 className='mt-8 text-4xl text-black sm:text-5xl'>
						ProgQuest: <br /> Mais alguma.
					</h1>
					<p className='pr-5 mt-8 text-xl font-semibold'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, magni nemo ipsum autem ullam id, culpa minima
						sunt numquam blanditiis ex, assumenda deleniti. Quis
						aliquid deserunt, excepturi incidunt doloremque ut.
					</p>
					{/* <SecondaryButton
						onClick={() => {}}
						className='p-6 px-12 mx-2 mt-8 text-2xl'>
						Acessar
					</SecondaryButton> */}
				</div>
				<div className='flex justify-center items-center p-16 pt-2 md:pt-24'>
					<div
						className='bg-gray-300 rounded-[4rem] 
						min-w-[25rem] min-h-[25rem]'></div>
				</div>
			</div>
			{/* Hero Section */}
			<div className='flex flex-col-reverse w-full lg:flex-row xl:mt-16'>
				<div className='flex justify-center items-center p-12'>
					<div
						className='bg-gray-300 rounded-[4rem] 
						min-w-[25rem] min-h-[25rem]'></div>
				</div>
				<div className='flex flex-col items-center p-12 text-center lg:items-end lg:text-right'>
					<h1 className='text-4xl text-black sm:text-5xl'>
						Por dentro <br /> dessa viagem
					</h1>
					<p className='pl-5 mt-8 text-xl font-semibold'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, magni nemo ipsum autem ullam id, culpa minima
						sunt numquam blanditiis ex, assumenda deleniti. Quis
						aliquid deserunt, excepturi incidunt doloremque ut.
					</p>
					{/* <SecondaryButton
						onClick={() => {}}
						className='p-6 px-12 mx-2 mt-8 text-2xl bg-purple-500 hover:bg-purple-400 focus:bg-purple-400'>
						Acessar
					</SecondaryButton> */}
				</div>
			</div>
			{/* Knowlage Section */}
			<div className='w-full flex flex-col mt-8 min-h-[35rem] xl:mt-16'>
				<div className='flex justify-center items-center p-3'>
					<h1 className='text-4xl text-center text-black sm:text-5xl md:max-w-2xl'>
						Níveis de Conhecimento
					</h1>
				</div>
				<div className='grid flex-row flex-grow grid-cols-2 justify-evenly px-10 lg:flex'>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow m-5'></div>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow m-5'></div>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow m-5 col-span-2'></div>
				</div>
			</div>
			{/* Creators Carrousel */}
			<div className='flex flex-col mt-8 w-full'>
				<h1 className='m-10 text-4xl text-center text-black sm:text-5xl'>
					Membros Criadores
				</h1>

				{/* <CreatorsCarousel /> */}
			</div>
			{/* Footer */}
			<div className='mt-16 h-[8rem] bg-background-200'></div>
		</div>
	);
};

export default Home;
