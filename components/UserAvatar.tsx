'use client';

import { useUser } from '@/lib/store/user';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MdPerson } from 'react-icons/md';

export const UserAvatar = () => {
	const { user } = useUser();

	return (
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
	);
};
