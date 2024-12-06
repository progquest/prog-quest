import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-neutral-50 shadow-sm hover:bg-primary/90',
				destructive:
					'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90',
				outline:
					'border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900',
				secondary:
					'bg-secondary text-neutral-50 shadow-sm hover:bg-secondary/80',
				defaultDepth:
					'bg-primary mb-3 text-neutral-50 relative [transform-style:preserve-3d] before:absolute before:size-full before:rounded-[inherit] hover:bg-[#9662fe] before:bg-primary-dark before:[transform:translate3d(0,0.75em,-1em)] hover:translate-y-[0.15em] hover:before:[transform:translate3d(0,0.6em,-1em)] active:translate-y-[0.75em] active:before:[transform:translate3d(0,0,-1em)] focus-visible:before:ring-1 focus-visible:before:ring-neutral-950 before:disabled:hidden transition-all before:transition-all',
				secondaryDepth:
					'bg-secondary mb-3 text-neutral-50 relative [transform-style:preserve-3d] before:absolute before:size-full before:rounded-[inherit] hover:bg-[#5DB660] before:bg-secondary-dark before:[transform:translate3d(0,0.75em,-1em)] hover:translate-y-[0.15em] hover:before:[transform:translate3d(0,0.6em,-1em)] active:translate-y-[0.75em] active:before:[transform:translate3d(0,0,-1em)] focus-visible:before:ring-1 focus-visible:before:ring-neutral-950 before:disabled:hidden transition-all before:transition-all',
				ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
				link: 'text-neutral-900 underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'size-9',
				xl: 'h-12 px-8 py-3',
				'2xl': 'h-16',
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
