'use client';

import { ChallengeCup } from '@/components/svgs';

/**
 * Componente que representa um quadrado de desafio no grid.
 *
 * Esse componente recebe 3 props:
 * - `children`: O texto que será exibido no quadrado.
 * - `type`: O tipo do quadrado, que pode ser:
 *   - `'locked'`: Indica que o desafio está travado.
 *   - `'unlocked'`: Indica que o desafio está liberado.
 *   - `'done'`: Indica que o desafio já foi feito.
 * - `number`: O número do desafio. Se não for fornecido, o valor padrão é 1.
 *
 * O estilo do quadrado muda de acordo com o tipo. Se o tipo for `'locked'`, o quadrado
 * será cinza. Se o tipo for `'unlocked'`, o quadrado será roxo. Se o tipo for `'done'`,
 * o quadrado será verde.
 *
 * @param {React.ReactNode} children - O texto que será exibido no quadrado.
 * @param {string} type - O tipo do quadrado.
 * @param {number} number - O número do desafio.
 * @returns {React.ReactElement} O elemento JSX do quadrado de desafio.
 */
const ChallengeSquare = ({ children, type = 'locked', number = 1 }) => {
	return (
		<div className=''>
			<div
				className={`min-w-32 min-h-44 aspect-[3/4]
				rounded-xl flex flex-col overflow-hidden ${
					type === 'locked'
						? 'bg-gray-300 text-gray-600'
						: type === 'unlocked'
						? 'bg-primary-50 text-primary-400'
						: 'bg-lime-50 text-lime-500'
				} border-2 border-current`}>
				<div className='relative flex justify-center items-center h-4/5 w-full'>
					<ChallengeCup size={120} />
					<h1
						className='absolute top-[43%] left-1/2 text-white
						-translate-x-1/2 -translate-y-1/2 text-center'>
						{number}
					</h1>
				</div>
				<div className='w-full h-1/5 bg-current flex justify-center items-center'>
					<p
						className='text-lg font-semibold text-white
						flex justify-center items-center gap-2'>
						{children ? children : 'Desafio'}
					</p>
				</div>
			</div>
		</div>
	);
};
export default ChallengeSquare;
