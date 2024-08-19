import LoginForm from "@/components/login-form/LoginForm";
import Image from "next/image";
import React from "react";

const Login = () => {
	return (
		<div className='flex w-screen h-screen text-gray-900 bg-background-gray'>
			<div className='flex flex-col overflow-auto w-full h-full px-8 py-4'>
				<nav className='flex flex-row w-full md:justify-between justify-center'>
					{/* Logo Icon */}
					<div className='flex flex-row gap-4 items-center'>
						<Image
							src={"./assets/icons/login-page-icon/logo-icon.svg"}
							alt='logo'
							width={60}
							height={45}
							className='w-[60px] h-[45px] md:w-[120px] md:h-[90px]'
						/>
						<h1 className='text-2xl md:text-4xl font-bolder text-button-purple'>
							ProgQuest
						</h1>
					</div>

					{/* Register Button */}

					<button
						className='py-2 px-8 text-center font-bold
							invisible md:visible overflow-hidden h-0 w-0 md:h-max md:w-max
							text-lg bg-button-purple shadow-def-button transition-all
							rounded-full active:translate-y-[4px] active:shadow-def-button-pressed
							text-white hover:underline'
					>
						Registrar
					</button>
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
