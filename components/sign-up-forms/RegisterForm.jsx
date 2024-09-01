import Link from 'next/link';

import { FaEnvelope, FaGithub, FaGoogle, FaLock, FaUser } from 'react-icons/fa';
import { DefaultButton } from '@/components/buttons/DefaultButton';

/**
 * Um quadro com forms de cadastro para credenciais e OAuth
 *
 * Nesse quadro conta com caixas de texto para as credenciais do usuário
 * e botões para cadastrar com Google ou Github
 *
 * TODO: Fazer a autenticação funcional
 * @returns {JSX.Element}
 */
const RegisterForm = () => {
	return (
		<form className='flex flex-col w-full h-full gap-2 p-2'>
			{/* Register Form */}
			<h1 className='text-center font-bold text-3xl'>Registrar</h1>

			{/* Usuário */}
			<div className='flex flex-row w-full m-2'>
				<input
					className='w-full h-full bg-pink-200 rounded-full
							text-purple-300 px-4 py-2 gap-2'
					type='text'
					placeholder='Usuário'
					name='username'
					required
				/>
				<FaUser className='flex-none m-2 transform-y-1/2' />
			</div>

			{/* Email */}
			<div className='flex flex-row w-full m-2'>
				<input
					className='w-full h-full bg-pink-200 rounded-full
							text-purple-300 px-4 py-2 gap-2'
					type='email'
					placeholder='Email'
					name='email'
					required
				/>
				<FaEnvelope className='flex-none m-2 transform-y-1/2' />
			</div>

			{/* Senha */}
			<div className='flex flex-row w-full m-2'>
				<input
					className='w-full h-full bg-pink-200 rounded-full
							text-purple-300 px-4 py-2 gap-2'
					type='password'
					placeholder='Senha'
					name='password'
					required
				/>
				<FaLock className='flex-none m-2 transform-y-1/2' />
			</div>

			{/* Entrar */}
			<DefaultButton
				type='submit'
				className='col-span-2'>
				Registrar
			</DefaultButton>
		</form>
	);
};

export default RegisterForm;
