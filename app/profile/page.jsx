import { PlatformNavbar } from '@/components/nav-bar';

const ProfilePage = () => {
	return (
		<div
			className='flex flex-col-reverse md:flex-row relative
			w-full h-screen text-text-900 bg-background-50'>
			<div className='fixed md:relative w-full h-20 md:w-48'>
				{/* NAVBAR */}
				<PlatformNavbar />
			</div>
			<div
				className='flex flex-col h-full md:w-4/5 overflow-auto 
				items-center justify-center px-8 py-4 flex-grow'>
				<section className=''>{/* INFO DE PERFIL  */}</section>
				<hr className='my-2 border-black w-full self-center' />
				<p className='flex items-start w-full'>Conquistas</p>
				<section className=''>{/* CONQUISTAS  */}</section>
			</div>
		</div>
	);
};

export default ProfilePage;
