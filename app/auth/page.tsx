'use client';

import { Github, Google, HideChameleon } from '@/components/CustomSVGs';
import { LogoLink } from '@/components/LogoLink';
import TermsOfService from '@/components/TermsOfService';

import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/store/user';
import { createClientBrowser } from '@/lib/supabase/client';
import { signInWithGithub } from '@/lib/supabase/oauth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const AuthPage = () => {
	const supabase = createClientBrowser();
	const router = useRouter();
	const { user } = useUser();

	useEffect(() => {
		if (user) {
			router.push('/');
		}
	}, []);

	const handleLoginWithGitHub = async () => {
		const { error } = await signInWithGithub(supabase);

		if (error) {
			console.log(error.message);
		}
	};

	return (
		<div className='relative w-full h-screen bg-white'>
			<LogoLink
				href='/home'
				className='absolute top-5 w-full lg:left-5 lg:w-min text-primary'
			/>
			<div className='block content-center items-center size-full'>
				<div className='relative p-10 mx-auto max-w-min rounded-lg ring-1 bg-neutral-200 ring-neutral-500'>
					<HideChameleon className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[150px]' />
					<div className='space-y-8'>
						<h1 className='text-3xl font-bold text-center'>
							Fazer Login
						</h1>
						<Button
							size='2xl'
							variant='depth'
							onClick={handleLoginWithGitHub}>
							<Github fill='currentColor' />
							Entrar com GitHub
						</Button>
						<Button
							size='2xl'
							variant='depth'
							disabled>
							<Google fill='currentColor' />
							Entrar com Google
						</Button>
						<TermsOfService />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
