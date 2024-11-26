'use client';

import ProfileInfo from '@/components/profile/ProfileInfo';

/**
 * Componente da Página de Perfil
 *
 * Essa página é responsável por mostrar as informações do usuário, como seu nome,
 * nível e descrição. Além disso, também exibe as conquistas do usuário.
 *
 * @returns {JSX.Element} Elemento JSX da página de perfil
 */
const ProfilePage = () => {
	return (
		<div className='flex flex-col items-center py-16 px-8 h-full md:px-16'>
			<ProfileInfo />
			<hr className='self-center my-6 w-full border-black' />
			<p className='flex items-start w-full'>Conquistas</p>
			<section
				className='grid grid-cols-2 gap-4 m-4 mb-24 w-full max-w-screen-2xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
					xl:grid-cols-7 2xl:grid-cols-9'>
				{/* CONQUISTAS  */}
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
				<div className='min-w-32 min-h-44 aspect-[3/4] bg-gray-400 rounded-xl'></div>
			</section>
		</div>
	);
};
export default ProfilePage;
