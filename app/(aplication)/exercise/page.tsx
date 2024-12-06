import { SideBar } from '@/components/SideBar';
import { Button } from '@/components/ui/button';
import InitUser from '@/lib/store/InitUser';
import { createClientServer } from '@/lib/supabase/server';
import { Check, Star } from 'lucide-react';

// dados de exercício debug, esses virão do banco de dados
import {
	exercises,
	currentExerciseId,
} from '@/components/misc/exercise-data.json';

const ExercisePage = async () => {
	const supabase = await createClientServer();

	const { data } = await supabase.auth.getUser();

	return (
		<div className='flex flex-col-reverse min-h-screen lg:flex-row'>
			<InitUser user={data.user} />
			<SideBar />
			<div className='flex-1 bg-blue-400/80'>
				<div className='bg-primary rounded-xl p-3 text-center text-neutral-50 my-8 max-w-[80%] mx-auto'>
					<div className='text-2xl font-semibold'>
						Conceitos de POO
					</div>
					<div className='text-lg'>
						Exercícios introdutórios à Programação Orientada a
						Objetos.
					</div>
				</div>
				<div className='my-8 mx-auto flex flex-col items-center relative max-w-screen-sm gap-3'>
					{exercises.map(({ id, completed }, index) => {
						// calculo de ciclos
						// fazemos esse calculo para saber com precisão qual a distância
						// que cada butão precisa estar do centro
						const cycleLength = 8;
						const cycleIndex = index % cycleLength;

						const indentation =
							cycleIndex <= 2
								? cycleIndex
								: cycleIndex <= 6
								? 4 - cycleIndex
								: cycleIndex - cycleLength;

						// caso o exercício não esteja completado e não é
						// o exercicio atual será colocado como 'trancado'
						const isLocked =
							!completed &&
							id !== currentExerciseId &&
							id > currentExerciseId;

						// utilizando um 'checkmark' quando completado
						// e uma estrela quando não
						const Icon = completed ? Check : Star;

						return (
							<Button
								key={index}
								size='icon'
								variant={
									completed
										? 'secondaryDepth'
										: 'defaultDepth'
								}
								className='rounded-full size-20'
								disabled={isLocked}
								style={{
									right: `${indentation * 10}%`,
								}}>
								<Icon />
							</Button>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default ExercisePage;
