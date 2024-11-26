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

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className='rounded-full'>
					<UserAvatarImage
						avatar_url={user?.user_metadata.avatar_url}
						user_name={user?.user_metadata.user_name}
					/>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>
					{user?.user_metadata.user_name || 'Perfil'}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
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
	);
};

export const UserAvatarImage = ({
	avatar_url,
	user_name,
}: {
	avatar_url: string;
	user_name: string;
}) => {
	return (
		<Avatar className='ring-2 ring-primary-bright'>
			<AvatarImage
				src={avatar_url}
				alt={user_name}
			/>
			<AvatarFallback className='bg-neutral-50 text-primary'>
				<MdPerson
					size='70%'
					fill='currentColor'
				/>
			</AvatarFallback>
		</Avatar>
	);
};
