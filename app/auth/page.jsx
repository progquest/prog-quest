'use client';
import { DefaultButton } from '@/components/buttons/DefaultButton';
import { LoginForm, RegisterForm } from '@/components/sign-up-forms';
import TermsOfService from '@/components/terms-of-service/TermsOfService';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Página de Login
 *
 * Essa página renderiza:
 *  - O logotipo da ProgQuest
 *  - Um botão de cadastro
 *  - O formulário de login, com campos para o usuário e senha
 *
 * @returns {JSX.Element} Elemento JSX da página de login
 */
const Login = () => {
	const [isRegister, setIsRegister] = useState(false);
	const [tosVisible, setTosVisible] = useState(false);

	return (
		<div className='relative flex w-screen h-screen text-text-900 bg-background-100 overflow-hidden'>
			<div
				className={`absolute flex items-center justify-center w-screen h-screen
				transition-all bg-black bg-opacity-20 ${!tosVisible && 'invisible'}`}>
				<TermsOfService setVisible={setTosVisible}></TermsOfService>
			</div>

			<div className='flex flex-col overflow-auto w-full h-full px-8 py-4'>
				<nav className='flex flex-row w-full md:justify-between justify-center'>
					{/* Logo Icon */}
					<div className='flex flex-row gap-4 items-center'>
						<Image
							src={'./assets/icons/login-page-icon/logo-icon.svg'}
							alt='logo'
							width={60}
							height={45}
							className='w-[60px] h-[45px] md:w-[120px] md:h-[90px]'
						/>
						<h1 className='text-2xl md:text-4xl font-bolder text-purple-100'>
							ProgQuest
						</h1>
					</div>

					{/* Register/Login Button */}
					<DefaultButton
						className={`invisible md:visible overflow-hidden h-0 w-0
							md:h-max md:w-max py-2 px-8`}
						onClick={() => setIsRegister((prev) => !prev)}>
						{isRegister ? 'Fazer Login' : 'Registrar'}
					</DefaultButton>
				</nav>

				{/* Login Form */}
				<div className='flex flex-col w-full h-full justify-center items-center gap-0'>
					{/* Chameleon Icon */}
					<Image
						src={'/assets/icons/login-page-icon/hide-chameleon.svg'}
						width={80}
						height={80}
						className='w-20 mt-[-10px] mb-[-5px] md:w-60 md:-mb-[15px] z-10'
						alt='Camaleão olhando por cima da tela de login'
					/>
					<div
						className='flex flex-col w-[90%] md:w-[60%] lg:w-[35%]
						place-content-center border border-background-200 rounded-xl
						bg-pink-100 p-5'>
						{/* Form de Registro/Login */}
						{isRegister ? (
							<RegisterForm setTosVisible={setTosVisible} />
						) : (
							<LoginForm />
						)}

						{/* Botões OAuth */}
						<div className='grid grid-cols-2 gap mx-2.5 -mt-6 md:-mt-2'>
							{/* Divisor */}
							<hr
								className='border border-gray-500 
								col-span-2 mt-2.5 mx-2.5 rounded-full'
							/>

							{/* Google Login */}
							<DefaultButton className='col-span-2 md:col-span-1 '>
								<Image
									src={'/assets/icons/misc/logo-google.svg'}
									width={20}
									height={20}
									alt='Google Logo'
								/>
								Google
							</DefaultButton>

							{/* Github Login */}
							<DefaultButton className='col-span-2 md:col-span-1 '>
								<Image
									src={'/assets/icons/misc/logo-github.svg'}
									width={20}
									height={20}
									alt='Github Logo'
								/>
								Github
							</DefaultButton>
						</div>

						{/* Link de cadastro/login */}
						<div
							className='visible md:invisible overflow-hidden md:-my-6
						flex flex-col w-full text-center justify-center p-6 gap-1/2'>
							<p>{isRegister ? 'Já' : 'Não'} tem uma conta?</p>
							<div
								onClick={() => setIsRegister((prev) => !prev)}
								className='font-bold text-sm text-purple-200 hover:underline
                        		decoration-purple-200 cursor-pointer'>
								{isRegister ? 'Entre' : 'Cadastre'} aqui!
							</div>
						</div>

						{/* Termos e Condições */}
						{!isRegister && (
							<div
								onClick={() => setTosVisible(true)}
								className='text-center hover:underline
								decoration-purple-200 text-sm cursor-pointer'>
								Termos e condições de uso
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
