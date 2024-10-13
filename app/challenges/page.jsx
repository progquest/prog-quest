import { ChallengeSquare } from '@/components/misc';
import { PlatformNavbar } from '@/components/nav-bar';
import { HourGlass } from '@/components/svgs';

const ChallengesPage = () => {
	return (
		<div
			className='flex flex-col-reverse md:flex-row relative
			w-full h-screen text-text-900 bg-background-50'>
			<div className='fixed md:relative w-full h-20 md:h-screen md:w-48 z-10'>
				{/* NAVBAR */}
				<PlatformNavbar current='challenge' />
			</div>
			<div
				className='flex flex-col h-full md:w-4/5 overflow-auto 
				items-center px-8 py-16 lg:px-16 flex-grow'>
				<div
					className='w-full grid grid-cols-2 sm:grid-cols-3 
					gap-x-8 gap-y-4 md:gap-8 lg:gap-12 max-w-screen-md'>
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
		</div>
	);
};
export default ChallengesPage;
