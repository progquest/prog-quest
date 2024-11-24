'use client';

import { default as ChallengeSquare } from '@/components/misc/ChallengeSquare';
import { HourGlass } from '@/components/svgs';

/**
 * Página de desafios
 *
 * Esta página é um grid de quadrados que representam os desafios do usuário.
 * Cada quadrado tem um número que representa a ordem do desafio e um ícone de ampulheta
 * que representa o tempo de resolução do desafio.
 *
 * @returns {JSX.Element} Elemento JSX da página de desafios
 */
const ChallengePage = () => {
	return (
		<div className='flex flex-col flex-grow items-center px-8 py-16 lg:px-16'>
			<div className='grid grid-cols-2 gap-y-4 gap-x-8 w-full max-w-screen-md sm:grid-cols-3 md:gap-8 lg:gap-12'>
				<ChallengeSquare
					type='done'
					number={1}>
					<HourGlass size={24} /> 10 min
				</ChallengeSquare>
				<ChallengeSquare
					type='unlocked'
					number={2}>
					<HourGlass size={24} /> 10 min
				</ChallengeSquare>
				<ChallengeSquare number={3}>
					<HourGlass size={24} /> 20 min
				</ChallengeSquare>
				<ChallengeSquare number={4}>
					<HourGlass size={24} /> 10 min
				</ChallengeSquare>
				<ChallengeSquare number={5}>
					<HourGlass size={24} /> 20 min
				</ChallengeSquare>
				<ChallengeSquare number={6}>
					<HourGlass size={24} /> 30 min
				</ChallengeSquare>
				<ChallengeSquare number={7}>
					<HourGlass size={24} /> 10 min
				</ChallengeSquare>
				<ChallengeSquare number={8}>
					<HourGlass size={24} /> 10 min
				</ChallengeSquare>
				<ChallengeSquare number={9}>
					<HourGlass size={24} /> 10 min
				</ChallengeSquare>
			</div>
		</div>
	);
};
export default ChallengePage;
