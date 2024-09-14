'use client';
import { SecondaryButton } from '@/components/buttons';
import { Navigation } from '@/components/nav-bar';

/**
 * Componete da Página inicial do site
 * @returns {JSX.Element} Next Component: 'Home Page'
 */
const Home = () => {
	return (
		<div className='bg-background-100 w-full min-h-screen'>
			<Navigation />
			<div
				className='w-full h-[90v] bg-primary-300 rounded-b-[4rem] flex flex-col
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
						className='bg-white rounded-[4rem] 
						min-w-[25rem] min-h-[25rem]
						md:min-w-[30rem] md:min-h-[30rem]
						lg:min-w-[35rem] lg:min-h-[35rem]
						xl:min-w-[40rem] xl:min-h-[40rem]'></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
