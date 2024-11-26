'use client';

import { useUser } from '@/lib/store/user';
import { createClientBrowser } from '@/lib/supabase/client';
import { signOut } from '@/lib/supabase/oauth';
import { toast } from 'sonner';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export const LogOutAlert = () => {
	const supabase = createClientBrowser();

	const handleSignOut = async () => {
		const promise = signOut(supabase);

		toast.promise(promise, {
			loading: 'Saindo, por favor aguarde um instante...',
			success: 'Sucesso!',
			error: 'Houve um erro! Por favor tente novamente.',
		});

		useUser.setState({ user: null });
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<button
					id='are-u-sure-trigger'
					className='hidden absolute'></button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
					<AlertDialogDescription>
						Você irá desconectar de sua conta nessa sessão.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Não</AlertDialogCancel>
					<AlertDialogAction onClick={handleSignOut}>
						Sim
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
