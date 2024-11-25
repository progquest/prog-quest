'use client';
import { LogoIcon } from './CustomSVGs';
import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

export const LogoLink = ({
	className,
	href,
	...props
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<Link
			className={cn(
				'flex flex-row gap-1 justify-center items-center text-2xl font-extrabold',
				className
			)}
			href={href}
			{...props}>
			<LogoIcon size='4rem' />
			<span className='hidden md:block'>ProgQuest</span>
		</Link>
	);
};
