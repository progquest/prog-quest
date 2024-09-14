'use client';
import { SecondaryButton } from '@/components/buttons';
import { CreatorsCarousel } from '@/components/misc';
import { Navigation } from '@/components/nav-bar';

/**
 * Componete da Página inicial do site
 * @returns {JSX.Element} Next Component: 'Home Page'
 */
const Home = () => {
	return (
		<div className='bg-white w-full min-h-screen'>
			<Navigation />
			{/* Banner */}
			<div
				className='w-full min-h-[90vh] bg-primary-300 rounded-b-[4rem] flex flex-col
				lg:grid mt-16 lg:grid-cols-2'>
				<div
					className='p-20 pt-0 lg:p-20 flex flex-col items-center
					lg:items-start text-center lg:text-left'>
					<h1
						className='text-4xl text-black mt-16
						sm:text-5xl md:text-7xl md:leading-[5rem]'>
						ProgQuest: <br /> Mais alguma.
					</h1>
					<p
						className='text-xl mt-12 font-semibold pr-5
						lg:mt-16 '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, magni nemo ipsum autem ullam id, culpa minima
						sunt numquam blanditiis ex, assumenda deleniti. Quis
						aliquid deserunt, excepturi incidunt doloremque ut.
					</p>
					<SecondaryButton
						onClick={() => {}}
						className='mt-12 text-2xl mx-2 p-6 px-12'>
						Acessar
					</SecondaryButton>
				</div>
				<div className='p-20 pt-0 lg:p-20 flex justify-center items-center'>
					<div
						className='bg-gray-300 rounded-[4rem] 
						min-w-[25rem] min-h-[25rem]
						md:min-w-[30rem] md:min-h-[30rem]
						lg:min-w-[35rem] lg:min-h-[35rem]
						xl:min-w-[40rem] xl:min-h-[40rem]'></div>
				</div>
			</div>
			{/* Hero Section */}
			<div
				className='w-full min-h-[90vh] flex flex-col-reverse
				lg:flex-row mt-16'>
				<div className='p-20 pt-0 lg:p-20 flex justify-center items-center'>
					<div
						className='bg-gray-300 rounded-[4rem] 
						min-w-[25rem] min-h-[25rem]
						md:min-w-[30rem] md:min-h-[30rem]
						lg:min-w-[35rem] lg:min-h-[35rem]
						xl:min-w-[40rem] xl:min-h-[40rem]'></div>
				</div>
				<div
					className='p-20 pt-0 lg:p-20 flex flex-col items-center
						lg:items-end text-center lg:text-right'>
					<h1
						className='text-4xl text-black mt-16
						sm:text-5xl md:text-7xl md:leading-[5rem]'>
						Por dentro <br /> dessa viagem
					</h1>
					<p
						className='text-xl mt-12 font-semibold pl-5
						lg:mt-16 '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, magni nemo ipsum autem ullam id, culpa minima
						sunt numquam blanditiis ex, assumenda deleniti. Quis
						aliquid deserunt, excepturi incidunt doloremque ut.
					</p>
					<SecondaryButton
						onClick={() => {}}
						className='mt-12 text-2xl mx-2 p-6 px-12
						bg-purple-500 hover:bg-purple-400 focus:bg-purple-400'>
						Acessar
					</SecondaryButton>
				</div>
			</div>
			{/* Knowlage Section */}
			<div className='w-full min-h-[90vh] flex flex-col mt-16'>
				<div className='flex justify-center items-center p-3'>
					<h1
						className='text-4xl text-black sm:text-5xl md:text-7xl
						md:leading-[5rem] text-center md:max-w-2xl'>
						Níveis de Conhecimento
					</h1>
				</div>
				<div className='flex flex-col md:flex-row justify-evenly px-10'>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow min-h-[30rem] m-5
						xl:min-h-[35rem]'></div>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow min-h-[30rem] m-5
						xl:min-h-[35rem]'></div>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow min-h-[30rem] m-5
						xl:min-h-[35rem]'></div>
				</div>
			</div>
			{/* Creators Carrousel */}
			<div className='w-full min-h-[90vh] flex flex-col mt-16'>
				<div
					className='flex justify-center md:justify-end items-center p-3
					mb-12'>
					<h1
						className='text-4xl text-black sm:text-5xl md:text-7xl
						md:leading-[5rem] text-center md:max-w-2xl mx-48'>
						Membros Criadores
					</h1>
				</div>
				<CreatorsCarousel />
			</div>
		</div>
	);
};

export default Home;
