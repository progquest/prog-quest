import Image from 'next/image';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

const CreatorsCarousel = ({ data = [] }) => {
	return (
		<div className='relative flex justify-center items-center w-full'>
			<MdArrowLeft
				size={32}
				className='absolute left-0 top-[50%] -translate-y-[50%] z-10'
			/>
			<div
				className=' relativeflex justify-evenly items-center bg-purple-400 rounded-[4rem]
				w-full min-h-[30vh]'>
				<div
					className='p-20 pt-0 flex flex-col items-center
						md:items-start text-center md:text-left md:ml-[50%]'>
					<h1
						className='text-4xl text-white mt-40
						sm:text-5xl md:text-7xl md:leading-[5rem]'>
						Nome
					</h1>
					<h2
						className='text-2xl text-white mt-2
						sm:text-3xl md:text-4xl md:leading-[5rem]'>
						Cargo
					</h2>
					<p className='text-xl text-black mt-8 font-semibold pr-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, magni nemo ipsum autem ullam id, culpa minima
					</p>
				</div>
				<div
					className='absolute -top-[50%] left-[50%] -translate-x-[50%] w-[40%] h-[80%]
					bg-gray-400 rounded-[4rem]'></div>
			</div>
			{/* {data.map((item, idx) => {
				return (
					<Image
						key={idx}
						src={item.src}
						alt={item.alt}
						width={item.width}
						height={item.height}
						className='w-full h-full object-cover rounded-[4rem]
						shadow-2xl shadow-black/60'
					/>
				);
			})} */}
			<MdArrowRight
				size={32}
				className='absolute right-0 top-0 z-10'
			/>
		</div>
	);
};

export default CreatorsCarousel;
