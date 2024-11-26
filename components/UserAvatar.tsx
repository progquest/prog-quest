'use client';

import { useUser } from '@/lib/store/user';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MdPerson } from 'react-icons/md';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { createClientBrowser } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { signOut } from '@/lib/supabase/oauth';
import { LogIn, LogOut } from 'lucide-react';

export const UserAvatar = () => {
	const { user } = useUser();

	const triggerAlert = () => {
		const trigger = document.getElementById('are-u-sure-trigger');
		if (trigger) trigger.click();
	};

	const handleSignOut = async () => {
		const supabase = createClientBrowser();

		const promise = signOut(supabase);

		toast.promise(promise, {
			loading: 'Saindo, por favor aguarde um instante...',
			success: 'Sucesso!',
			error: 'Houve um erro! Por favor tente novamente.',
		});

		useUser.setState({ user: null });
	};

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className='rounded-full'>
						<Avatar className='ring-2 ring-primary-bright'>
							<AvatarImage
								src={user?.user_metadata.avatar_url}
								alt={user?.user_metadata.user_name}
							/>
							<AvatarFallback className='bg-neutral-50 text-primary'>
								<MdPerson
									size='70%'
									fill='currentColor'
								/>
							</AvatarFallback>
						</Avatar>
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56'>
					<DropdownMenuLabel>
						{user?.user_metadata.user_name || 'Perfil'}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{user && (
						<DropdownMenuItem asChild>
							<Link
								href='/'
								className='cursor-pointer'>
								<MdPerson fill='currentColor' />
								Meu Perfil
							</Link>
						</DropdownMenuItem>
					)}
					{user && (
						<DropdownMenuItem
							className='cursor-pointer'
							onClick={triggerAlert}>
							<LogOut fill='currentColor' />
							Sair
						</DropdownMenuItem>
					)}
					{!user && (
						<DropdownMenuItem
							className='cursor-pointer'
							asChild>
							<Link href='/auth'>
								<LogIn fill='currentColor' />
								Entrar
							</Link>
						</DropdownMenuItem>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<button
						id='are-u-sure-trigger'
						className='hidden absolute'></button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Não</AlertDialogCancel>
						<AlertDialogAction onClick={handleSignOut}>
							Sim
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};
