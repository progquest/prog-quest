'use client';

import { ChallengeCup } from './CustomSVGs';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

type ChallangeFrameProps = {
	variant?: 'unlocked' | 'locked' | 'done';
	number?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const challengeVariants = cva(
	'min-w-32 min-h-44 aspect-[3/4] rounded-xl flex flex-col overflow-hidden border-2 border-current',
	{
		variants: {
			variant: {
				unlocked: 'bg-primary text-primary-bright',
				locked: 'bg-gray-300 text-gray-600',
				done: 'bg-secondary text-secondary-bright',
			},
		},
		defaultVariants: {
			variant: 'locked',
		},
	}
);

/**
 * Componente que representa um quadrado de desafio no grid.
 *
 * Esse componente recebe 2 props:
 * - `type`: O tipo do quadrado, que pode ser:
 *   - `'locked'`: Indica que o desafio está travado.
 *   - `'unlocked'`: Indica que o desafio está liberado.
 *   - `'done'`: Indica que o desafio já foi feito.
 * - `number`: O número do desafio. Se não for fornecido, o valor padrão é 1.
 *
 * O estilo do quadrado muda de acordo com o tipo. Se o tipo for `'locked'`, o quadrado
 * será cinza. Se o tipo for `'unlocked'`, o quadrado será roxo. Se o tipo for `'done'`,
 * o quadrado será verde.
 */
export const ChallengeFrame = React.forwardRef<
	HTMLDivElement,
	ChallangeFrameProps
>(({ children, variant, number = 1, className, ...props }, ref) => {
	return (
		<div
			className={cn(challengeVariants({ variant, className }))}
			ref={ref}
			{...props}>
			<div className='flex relative justify-center items-center w-full h-4/5'>
				<ChallengeCup size={120} />
				<h1 className='absolute top-[43%] left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-center'>
					{number}
				</h1>
			</div>
			<div className='flex justify-center items-center w-full h-1/5 bg-current'>
				<p className='flex gap-2 justify-center items-center text-lg font-semibold text-white'>
					{children ? children : 'Desafio'}
				</p>
			</div>
		</div>
	);
});
ChallengeFrame.displayName = 'ChallengeFrame';
