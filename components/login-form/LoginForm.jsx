import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaGoogle, FaLock, FaUser } from "react-icons/fa";

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
		<>
			{/* Chameleon Icon */}
			<Image
				src={"/assets/icons/login-page-icon/hide-chameleon.svg"}
				width={80}
				height={80}
				className='w-20 mt-[-10px] mb-[-5px] md:w-60 md:-mb-[15px] z-10'
				alt='Camaleão olhando por cima da tela de login'
			/>
			<div
				className='flex flex-col w-[90%] md:w-[60%] lg:w-[35%]
				place-content-center border border-background-box-border rounded-xl
				bg-background-box-rect p-5'
			>
				{/* Login Form */}
				<form className='flex flex-col w-full h-full gap-2 p-2'>
					<h1 className='text-center font-bold text-3xl'>Login</h1>

					{/* Usuário */}
					<div className='flex flex-row w-full m-2'>
						<input
							className='w-full h-full bg-input-box rounded-full
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
							className='w-full h-full bg-input-box rounded-full
							text-gray-500 px-4 py-2 gap-2'
							type='password'
							placeholder='Senha'
							required
						/>
						<FaLock className='flex-none m-2 transform-y-1/2' />
					</div>

					{/* Esqueceu a senha? */}
					<Link
						href={"#"}
						className='text-gray-500 text-right	hover:underline decoration-button-purple text-xs md:text-md'
					>
						Esqueceu a senha?
					</Link>

					{/* Botões */}
					<div className='grid grid-cols-2 gap'>
						{/* Entrar */}
						<button
							type='submit'
							className='col-span-2 text-center
							p-2.5 bg-button-purple shadow-def-button 
							rounded-full m-2.5 text-white text-md lg:text-xl
							font-semibold hover:underline
							transition-all active:translate-y-[4px] active:shadow-def-button-pressed'
						>
							Entrar
						</button>

						{/* Divisor */}
						<hr className='border border-gray-500 col-span-2 mt-2.5 mx-2.5 rounded-full' />

						{/* Google Login */}
						<button
							type='button'
							className='col-span-2 md:col-span-1 flex flex-row justify-center items-center
                        p-2.5 gap-2.5 bg-button-purple shadow-def-button 
                        rounded-full m-2.5 text-white text-md lg:text-xl
                        font-semibold mouse-pointer hover:underline
						transition-all active:translate-y-[4px] active:shadow-def-button-pressed'
						>
							<FaGoogle />
							Google
						</button>

						{/* Github Login */}
						<button
							type='button'
							className='col-span-2 md:col-span-1 flex flex-row justify-center items-center
                        p-2.5 gap-2.5 bg-button-purple shadow-def-button 
                        rounded-full m-2.5 text-white text-md lg:text-xl
                        font-semibold mouse-pointer hover:underline
						transition-all active:translate-y-[4px] active:shadow-def-button-pressed'
						>
							<FaGithub />
							Github
						</button>
					</div>
				</form>

				{/* Link de cadastro */}
				<div
					className='visible md:invisible overflow-hidden md:h-0
						flex flex-col w-full text-center justify-center p-6 pt-2 gap-1/2'
				>
					<p>Não tem uma conta?</p>
					<Link
						href={"/register"}
						className='font-bold text-sm text-button-purple hover:underline decoration-button-purple'
					>
						Crie uma conta!
					</Link>
				</div>

				{/* Termos e Condições */}
				<Link
					href={"/tos"}
					className='text-center hover:underline decoration-button-purple text-sm'
				>
					Termos e condições de uso
				</Link>
			</div>
		</>
	);
};

export default LoginForm;
