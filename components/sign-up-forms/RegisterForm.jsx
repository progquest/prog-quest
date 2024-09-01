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
		<div
			className='flex flex-col w-[90%] md:w-[60%] lg:w-[35%]
				place-content-center border border-background-200 rounded-xl
				bg-pink-100 p-5'>
			{/* Login Form */}
			<form className='flex flex-col w-full h-full gap-2 p-2'>
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
			{/* Botões */}
			<div className='grid grid-cols-2 gap'>
				{/* Divisor */}
				<hr
					className='border border-gray-500 
						col-span-2 mt-2.5 mx-2.5 rounded-full'
				/>

				{/* Google Login */}
				<DefaultButton className='col-span-2 md:col-span-1 '>
					<FaGoogle />
					Google
				</DefaultButton>

				{/* Github Login */}
				<DefaultButton className='col-span-2 md:col-span-1 '>
					<FaGithub />
					Github
				</DefaultButton>
			</div>

			{/* Link de cadastro */}
			<div
				className='visible md:invisible overflow-hidden md:h-0
						flex flex-col w-full text-center justify-center p-6 pt-2 gap-1/2'>
				<p>Já tem uma conta?</p>
				<Link
					href={'/auth/sign-in'}
					className='font-bold text-sm text-purple-200 hover:underline
                        decoration-purple-200'>
					Entre aqui!
				</Link>
			</div>

			{/* Termos e Condições */}
			<Link
				href={'/tos'}
				className='text-center hover:underline decoration-purple-200 text-sm'>
				Termos e condições de uso
			</Link>
		</div>
	);
};

export default RegisterForm;
