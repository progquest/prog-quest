import LoginForm from "@/components/login-form/LoginForm";
import Image from "next/image";
// "./public/assets/icons/login-page-icon/icon.svg"
import React from "react";

const Login = () => {
	return (
		<>
			{/* Logo Icon */}
			<div className='absolute top-8 left-8 flex flex-row items-center m-2.5'>
				<Image
					src={"./assets/icons/login-page-icon/logo-icon.svg"}
					alt='logo'
					width={115}
					height={90}
					className=''
				/>
				<h1 className='text-4xl font-bold text-bpurple'>ProgQuest</h1>
			</div>
			{/* Register Button */}
			<button
				className=' absolute top-8 right-8
                        flex flex-row justify-center items-center
                        bg-bpurple shadow-def-button 
                        rounded-full m-2.5 text-white text-2xl 
                        font-semibold px-8 py-2.5'
			>
				Registrar
			</button>

			{/* Login Form */}
			<div className='flex flex-col justify-center items-center min-h-screen bg-bgray'>
				<LoginForm />
			</div>
		</>
	);
};

export default Login;
