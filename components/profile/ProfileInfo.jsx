'use client';

import { useState } from 'react';
import { EditIcon } from '@/components/svgs';
import Image from 'next/image';
import { MdCheck } from 'react-icons/md';

const fakeUser = {
	name: 'Emily Jhonson',
	level: 'iniciante',
	points: 850,
	bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti hic vitae iusto animi ',
	img: 'https://ui-avatars.com/api/?background=random&name=Emily+Jhonson&format=png&size=128',
};

/**
 * Componente que renderiza as informações do usuário
 *
 * Este componente é responsável por renderizar as informações do usuário,
 * como seu nome, nível, pontos, biografia e imagem de perfil.
 *
 * @returns {JSX.Element} Elemento JSX que representa as informações do usuário
 */
const ProfileInfo = () => {
	const [bio, setBio] = useState(fakeUser?.bio);
	const [changeBio, setChangeBio] = useState(false);

	const [name, setName] = useState(fakeUser?.name);
	const [changeName, setChangeName] = useState(false);

	const handleBioChange = (e) => {
		const value = e.target.value;

		if (value !== fakeUser?.bio) {
			fakeUser.bio = value;
			setBio(value);
		}
	};

	const handleNameChange = (e) => {
		const value = e.target.value;

		if (value !== fakeUser?.name) {
			fakeUser.name = value;
			setName(value);
		}
	};

	return (
		<section
			className='flex flex-col md:flex-row-reverse 
			justify-between items-center w-full'>
			{/* INFO DE PERFIL  */}
			<div className='flex justify-center items-center p-4'>
				<div
					className='relative rounded-full w-32 h-32
							xl:w-48 xl:h-48 overflow-hidden'>
					<Image
						src={fakeUser?.img}
						alt='Foto de Perfil'
						fill
						sizes='100%'
						className='object-cover'
					/>
				</div>
			</div>
			<div className='flex-grow'>
				{changeName ? (
					<div className='mb-8 w-full flex flex-row justify-start items-center'>
						<input
							type='text'
							className='border-b-2 rounded-lg font-bold text-4xl
							border-purple-500 bg-gray-100 px-3 py-1 w-full h-min'
							onChange={handleNameChange}
							value={name}
						/>

						<button
							onClick={() => setChangeName((prev) => !prev)}
							className='hover:text-purple-500 focus:text-purple-500
							hover:scale-110 focus:scale-110 active:scale-95 inline
							mx-2'>
							<MdCheck size={14} />
						</button>
					</div>
				) : (
					<div className='mb-8 w-full flex flex-row justify-start items-center'>
						<h1 className='font-bold text-4xl'>{name}</h1>

						<button
							onClick={() => setChangeName((prev) => !prev)}
							className='hover:text-purple-500 focus:text-purple-500
							hover:scale-110 focus:scale-110 active:scale-95 inline
							mx-2'>
							<EditIcon size={14} />
						</button>
					</div>
				)}
				<h2 className='font-semibold text-lg'>
					Nível: {fakeUser?.level}
				</h2>
				<h2 className='font-semibold text-lg'>
					Pontuação: {fakeUser?.points}XP
				</h2>
				{changeBio ? (
					<div className='mt-6 w-full flex flex-row items-center justify-start'>
						<textarea
							className='font-medium text-sm border-b-2 rounded-lg
							border-purple-500 bg-gray-100 px-3 py-1 w-full h-min'
							type='text'
							onChange={handleBioChange}
							value={bio}
						/>
						<button
							type='submit'
							onClick={() => setChangeBio((prev) => !prev)}
							className='hover:text-purple-500 focus:text-purple-500
							hover:scale-110 focus:scale-110 active:scale-95 mx-2'>
							<MdCheck size={14} />
						</button>
					</div>
				) : (
					<div className='mt-6 w-full flex flex-row items-center justify-start'>
						<p className='font-medium text-sm'>{bio}</p>
						<button
							onClick={() => setChangeBio((prev) => !prev)}
							className='hover:text-purple-500 focus:text-purple-500
							hover:scale-110 focus:scale-110 active:scale-95 mx-2'>
							<EditIcon size={14} />
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProfileInfo;
