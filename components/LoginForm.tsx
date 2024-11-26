'use client';

import { signInWithGithub } from '@/lib/supabase/oauth';
import { Github, Google } from './CustomSVGs';
import TermsOfService from './TermsOfService';
import { Button } from './ui/button';
import { createClientBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';

export const LoginForm = () => {
	const supabase = createClientBrowser();

	const handleLoginWithGitHub = () => {
		const promise = signInWithGithub(supabase);

		toast.promise(promise, {
			loading: 'Entrando...',
			success: 'Sucesso',
			error: 'Houve um erro! Por favor tente novamente.',
		});
	};

	return (
		<div className='space-y-5'>
			<h1 className='text-xl font-bold text-center'>Fazer Login</h1>
			<Button
				size='xl'
				variant='depth'
				onClick={handleLoginWithGitHub}>
				<Github fill='currentColor' />
				Entrar com GitHub
			</Button>
			<Button
				size='xl'
				variant='depth'
				disabled>
				<Google fill='currentColor' />
				Entrar com Google
			</Button>
			<TermsOfService />
		</div>
	);
};
