import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-neutral-50 shadow hover:bg-primary/90',
				destructive:
					'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90',
				outline:
					'border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900',
				secondary:
					'bg-secondary text-neutral-50 shadow-sm hover:bg-secondary/80',
				ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
				link: 'text-neutral-900 underline-offset-4 hover:underline',
				depth: 'bg-primary text-neutral-50 hover:bg-[#9662FE] active:bg-[#9662FE] transition-[0.15s_cubic-bezier(0,0,0.6,1)] before:transition-[0.15s_cubic-bezier(0,0,0.6,1)] relative rounded-xl [transform-style:preserve-3d] before:[content:""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary-dark before:rounded-[inherit] before:[transform:translate3d(0,0.75em,-1em)] hover:translate-y-[0.15em] hover:before:[transform:translate3d(0,0.6em,-1em)] active:translate-y-[0.75em] active:before:[transform:translate3d(0,0,-1em)] focus-visible:before:ring-1 focus-visible:before:ring-neutral-950 before:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.1),0_1px_2px_-1px_rgb(0_0_0_/_0.1)]',
				secdepth:
					'bg-secondary text-neutral-50 hover:bg-[#5DB660] active:bg-[#5DB660] transition-[0.15s_cubic-bezier(0,0,0.6,1)] before:transition-[0.15s_cubic-bezier(0,0,0.6,1)] relative rounded-xl [transform-style:preserve-3d] before:[content:""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-secondary-dark before:rounded-[inherit] before:[transform:translate3d(0,0.75em,-1em)] hover:translate-y-[0.15em] hover:before:[transform:translate3d(0,0.6em,-1em)] active:translate-y-[0.75em] active:before:[transform:translate3d(0,0,-1em)] focus-visible:before:ring-1 focus-visible:before:ring-neutral-950 before:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.1),0_1px_2px_-1px_rgb(0_0_0_/_0.1)]',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
				xl: 'h-12 rounded-full px-8 py-3',
				'2xl': 'h-16 rounded-full px-10 py-4',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
