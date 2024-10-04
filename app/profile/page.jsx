import { PlatformNavbar } from '@/components/nav-bar';
import { EditIcon } from '@/components/svgs';
import Image from 'next/image';

const fakeUser = {
	name: 'Emily Jhonson',
	level: 'iniciante',
	points: 850,
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti hic vitae iusto animi ',
	img: 'https://ui-avatars.com/api/?background=random&name=Emily+Jhonson&format=png&size=128',
};

const ProfilePage = () => {
	return (
		<div
			className='flex flex-col-reverse md:flex-row relative
			w-full h-screen text-text-900 bg-background-50'>
			<div className='fixed md:relative w-full h-20 md:h-screen md:w-48'>
				{/* NAVBAR */}
				<PlatformNavbar current='profile' />
			</div>
			<div
				className='flex flex-col h-full md:w-4/5 overflow-auto 
				items-center px-8 py-16 flex-grow'>
				<section
					className='flex flex-col md:flex-row-reverse justify-between items-center
					w-full'>
					{/* INFO DE PERFIL  */}
					<div className='flex justify-center items-center p-4'>
						<div
							className='relative rounded-full w-32 h-32
							xl:w-48 xl:h-48 overflow-hidden'>
							<Image
								src={fakeUser?.img}
								alt='Foto de Perfil'
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<div className=''>
						<h1 className='font-bold text-4xl mb-8'>
							{fakeUser?.name}
							<button
								className='hover:text-purple-500 focus:text-purple-500
								hover:scale-110 focus:scale-110 active:scale-95 inline
								mx-2 focus:outline-none'>
								<EditIcon size={14} />
							</button>
						</h1>
						<h2 className='font-semibold text-lg'>
							Nível: {fakeUser?.level}
						</h2>
						<h2 className='font-semibold text-lg'>
							Pontuação: {fakeUser?.points}XP
						</h2>
						<p className='mt-6 font-medium text-sm'>
							{fakeUser?.description}
							<button
								className='hover:text-purple-500 focus:text-purple-500
								hover:scale-110 focus:scale-110 active:scale-95 inline 
								mx-2 focus:outline-none'>
								<EditIcon size={14} />
							</button>
						</p>
					</div>
				</section>
				<hr className='border-black w-full self-center my-6' />
				<p className='flex items-start w-full'>Conquistas</p>
				<section className='flex flex-row flex-wrap w-full h-full flex-grow justify-around'>
					{/* CONQUISTAS  */}
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
					<div className='w-32 aspect-[3/4] m-2 md:m-4 bg-gray-400 rounded-xl'></div>
				</section>
			</div>
		</div>
	);
};

export default ProfilePage;
