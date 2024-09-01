import Link from 'next/link';

import { FaGithub, FaGoogle, FaLock, FaUser } from 'react-icons/fa';
import { DefaultButton } from '../buttons/DefaultButton';

/**
 * Um quadro com forms de login para credenciais e OAuth
 *
 * Nesse quadro conta com caixas de texto para as credenciais do usuário
 * e botões para logar com Google ou Github
 *
 * TODO: Fazer a autenticação funcional
 * @returns {JSX.Element}
 */
const LoginForm = () => {
	return (
		<form className='flex flex-col w-full h-full gap-2 p-2'>
			{/* Login Form */}
			<h1 className='text-center font-bold text-3xl'>Entrar</h1>

			{/* Usuário */}
			<div className='flex flex-row w-full m-2'>
				<input
					className='w-full h-full bg-pink-200 rounded-full
							text-gray-500 px-4 py-2 gap-2'
					type='text'
					placeholder='Usuário'
					required
				/>
				<FaUser className='flex-none m-2 transform-y-1/2' />
			</div>

			{/* Senha */}
			<div className='flex flex-row w-full m-2'>
				<input
					className='w-full h-full bg-pink-200 rounded-full
							text-gray-500 px-4 py-2 gap-2'
					type='password'
					placeholder='Senha'
					required
				/>
				<FaLock className='flex-none m-2 transform-y-1/2' />
			</div>

			{/* Esqueceu a senha? */}
			<Link
				href={'#'}
				className='text-gray-500 text-right	hover:underline 
				mx-2.5 decoration-purple-100 text-xs md:text-md'>
				Esqueceu a senha?
			</Link>
			{/* Entrar */}
			<DefaultButton
				type='submit'
				className='col-span-2'>
				Entrar
			</DefaultButton>
		</form>
	);
};

export default LoginForm;
