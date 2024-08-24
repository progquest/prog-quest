import { DefaultButton } from '@/components/buttons/DefaultButton';
import LoginForm from '@/components/login-form/LoginForm';
import Image from 'next/image';
import React from 'react';

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
	return (
		<div className='flex w-screen h-screen text-text-900 bg-background-100'>
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

					{/* Register Button */}
					<DefaultButton
						className={`invisible md:visible overflow-hidden h-0 w-0
							md:h-max md:w-max py-2 px-8`}>
						Registrar
					</DefaultButton>
				</nav>

				{/* Login Form */}
				<div className='flex flex-col w-full h-full justify-center items-center gap-0'>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
