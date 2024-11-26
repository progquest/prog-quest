'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { AccountCircle, Exercise, Logout } from './CustomSVGs';
import { LogoLink } from './LogoLink';

export const SideBar = ({ page }: { page: 'exercise' | 'profile' }) => {
	return (
		<div className='flex sticky bottom-0 left-0 flex-row gap-4 justify-center p-4 w-full h-20 lg:top-0 lg:h-screen lg:flex-col lg:max-w-60 lg:justify-between'>
			<div className='flex flex-row gap-4 lg:flex-col'>
				<LogoLink
					href='/home'
					className='hidden text-primary lg:flex'
				/>
				<hr className='hidden lg:block' />
				<Button
					asChild
					variant='outline'
					size='lg'
					className='justify-start text-xl text-primary hover:text-primary/80'>
					<Link href='/exercise'>
						<Exercise fill='currentColor' />
						Exercícios
					</Link>
				</Button>
				<Button
					asChild
					variant='outline'
					size='lg'
					className='justify-start text-xl text-primary hover:text-primary/80'>
					<Link href='/profile'>
						<AccountCircle fill='currentColor' />
						Perfil
					</Link>
				</Button>
			</div>
			<div className='flex flex-col gap-4'>
				<hr className='hidden lg:block' />
				<Button
					variant='destructive'
					size='lg'
					className='justify-start text-xl'
					onClick={() => {
						const trigger =
							document.getElementById('are-u-sure-trigger');
						if (trigger) trigger.click();
					}}>
					<Logout fill='currentColor' />
					Sair
				</Button>
			</div>
		</div>
	);
};
