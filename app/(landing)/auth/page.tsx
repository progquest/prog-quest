import { HideChameleon } from '@/components/CustomSVGs';
import { LoginForm } from '@/components/LoginForm';
import { LogoLink } from '@/components/LogoLink';
import InitUser from '@/lib/store/InitUser';
import { createClientServer } from '@/lib/supabase/server';

export const AuthPage = async () => {
	const supabase = await createClientServer();

	const { data } = await supabase.auth.getUser();

	return (
		<div className='flex flex-col w-full h-screen bg-white'>
			<InitUser user={data.user} />
			<LogoLink
				href='/home'
				className='max-h-12 [&_svg]:max-w-20 m-5'
			/>
			<div className='block flex-1 content-center items-center'>
				<div className='relative p-10 mx-auto mt-8 max-w-min rounded-lg ring-1 bg-neutral-200 ring-neutral-500'>
					<HideChameleon className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[90%]' />
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
