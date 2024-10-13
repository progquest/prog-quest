import { PlatformNavbar } from '@/components/nav-bar';
import ProfileInfo from '@/components/profile/ProfileInfo';

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
				<ProfileInfo />
				<hr className='border-black w-full self-center my-6' />
				<p className='flex items-start w-full'>Conquistas</p>
				<section
					className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
					xl:grid-cols-7 2xl:grid-cols-9 w-full max-w-screen-2xl gap-4 m-4'>
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
		</div>
	);
};

export default ProfilePage;
