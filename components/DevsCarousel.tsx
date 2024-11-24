'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { creators as creatorsData } from './misc/creators-data.json';

export const DevsCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prev = () =>
		setCurrentSlide((curr) =>
			curr === 0 ? creatorsData.length - 1 : curr - 1
		);
	const next = () =>
		setCurrentSlide((curr) =>
			curr === creatorsData.length - 1 ? 0 : curr + 1
		);

	return (
		<div className='overflow-hidden relative mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
			<div
				className='flex relative transition-transform duration-500 ease-out'
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
				{creatorsData.map((data, index) => {
					const { image, name, position, description } = data;
					return (
						<div
							key={index}
							className='relative min-w-full aspect-[30/3] flex justify-between items-center text-white'>
							<div className='bg-purple-300 w-[90%] mx-auto my-[3%] rounded-[4rem] px-[5%] py-[8%] pl-[36%]'>
								<h1 className='mb-4 text-[1.5rem] leading-[1.51rem] lg:text-4xl'>
									{name}
								</h1>
								<h2 className='mb-4 text-[1.5rem] leading-[1.51rem] before:lg:text-4xl'>
									{position}
								</h2>
								<p>{description}</p>
							</div>
							<Image
								src={image}
								alt={`Foto de ${name}`}
								width={300}
								height={400}
								className='absolute top-1/2 left-[10%] -translate-y-1/2 rounded-[1.5rem] md:rounded-[4rem] aspect-[3/4] w-[27%]'
							/>
						</div>
					);
				})}
			</div>
			<div className='flex absolute inset-0 justify-between items-center p-4'>
				<button
					onClick={prev}
					className='p-1 text-gray-800 rounded-full shadow bg-white/80 hover:bg-white focus:bg-white'>
					<MdArrowLeft size={40} />
				</button>
				<button
					onClick={next}
					className='p-1 text-gray-800 rounded-full shadow bg-white/80 hover:bg-white focus:bg-white'>
					<MdArrowRight size={40} />
				</button>
			</div>
		</div>
	);
};
