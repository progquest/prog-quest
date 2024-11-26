import { DevsCarousel } from '@/components/DevsCarousel';
import { LogoLink } from '@/components/LogoLink';
import { Button } from '@/components/ui/button';
import { UserAvatar } from '@/components/UserAvatar';
import InitUser from '@/lib/store/InitUser';
import { createClientServer } from '@/lib/supabase/server';

import Link from 'next/link';

const LandingPage = async () => {
	const supabase = await createClientServer();

	const { data } = await supabase.auth.getUser();

	return (
		<div className=''>
			<InitUser user={data.user} />
			<div className='sticky top-0 w-full h-20 bg-primary'>
				<nav
					id='nav-bar'
					className='flex flex-row justify-between gap-8 items-center px-3 md:px-8 w-full h-full lg:py-4 text-neutral-50'>
					<LogoLink
						href='#'
						className='text-white'
					/>
					<div className='flex-1 max-w-xl flex items-center gap-5 justify-end'>
						<div className='md:hidden'>MOBILE BAR</div>
						<ul className='hidden md:flex flex-row flex-1 gap-4 justify-between font-semibold items-center'>
							<li className=''>
								<Link href='#header'>Início</Link>
							</li>
							<li className=''>
								<Link href='#about'>Sobre</Link>
							</li>
							<li className=''>
								<Link href='#knowlage'>Conhecimento</Link>
							</li>
							<li className=''>
								<Link href='#devs'>Desenvolvedores</Link>
							</li>
						</ul>
						<UserAvatar />
					</div>
				</nav>
			</div>
			<header
				className='w-full'
				id='header'>
				<div className='w-full min-h-[calc(100vh-20rem)] rounded-b-[5rem] bg-primary flex flex-col md:flex-row gap-8 md:gap-4 text-neutral-50 justify-center p-5 items-center'>
					<div className='flex justify-center items-center size-full'>
						<div className='block size-[20rem] lg:size-[25rem] text-center md:text-left space-y-5 md:space-y-12 content-center'>
							<div className='space-y-5'>
								<h1 className='text-4xl font-bold'>
									ProgQuest: <br />
									mais alguma
								</h1>
								<p className='p-2 rounded-md text-neutral-300 text-md'>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Corporis voluptatem
									deserunt ut laboriosam culpa maiores
									consequatur
								</p>
							</div>
							<Button
								variant='secondary'
								size='2xl'
								className='py-8 text-4xl font-semibold'
								asChild>
								<Link href={data.user ? '/' : '/auth'}>
									Entre Aqui!
								</Link>
							</Button>
						</div>
					</div>
					<div className='flex justify-center items-center size-full'>
						<div className='size-[20rem] lg:size-[25rem] bg-neutral-300 rounded-[4rem]'></div>
					</div>
				</div>
			</header>
			<section
				id='about'
				className='w-full min-h-[calc(100vh-20rem)] block content-center mt-8'>
				<div className='flex flex-col-reverse gap-8 mx-auto md:gap-4 md:flex-row'>
					<div className='flex justify-center items-center size-full'>
						<div className='size-[20rem] lg:size-[25rem] bg-neutral-300 rounded-[4rem]'></div>
					</div>
					<div className='flex justify-center items-center size-full'>
						<div className='size-[20rem] lg:size-[25rem] text-center md:text-right space-y-5 md:space-y-12'>
							<div className='space-y-5'>
								<h1 className='text-4xl font-bold'>
									ProgQuest: <br />
									mais alguma
								</h1>
								<p className='p-2 rounded-md text-neutral-700 text-md'>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Corporis voluptatem
									deserunt ut laboriosam culpa maiores
									consequatur
								</p>
							</div>
							<Button
								size='2xl'
								className='py-8 text-4xl font-semibold'
								asChild>
								<Link href={data.user ? '/' : '/auth'}>
									Entre Aqui!
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section
				id='knowlage'
				className='w-full min-h-[calc(100vh-20rem)] block content-center mt-8 space-y-6'>
				<div className='block content-center space-y-5'>
					<h1 className='mx-auto max-w-lg text-4xl font-bold text-center'>
						Níveis de Conhecimento
					</h1>
					<div className='flex flex-col gap-5 px-10 mx-auto max-w-min align-center lg:justify-evenly lg:flex-row'>
						<div className='min-w-[20rem] max-w-[20rem] min-h-[25rem] bg-neutral-300 rounded-[4rem]'></div>
						<div className='min-w-[20rem] max-w-[20rem] min-h-[25rem] bg-neutral-300 rounded-[4rem]'></div>
						<div className='min-w-[20rem] max-w-[20rem] min-h-[25rem] bg-neutral-300 rounded-[4rem] col-span-2'></div>
					</div>
				</div>
				<div className='w-full'></div>
			</section>
			<section
				id='devs'
				className='w-full min-h-[calc(100vh-20rem)] block content-center'>
				<h1 className='mx-auto max-w-lg text-4xl font-bold text-center'>
					Desenvolvedores
				</h1>

				<DevsCarousel />
			</section>
			{/* Footer */}
			<div className='h-[4rem] bg-neutral-500'></div>
		</div>
	);
};
export default LandingPage;
