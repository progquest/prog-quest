import Link from "next/link";
import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

const LoginForm = () => {
	return (
		<div className='w-md bg-transparent text-white'>
			<form action=''>
				<h1 className='text-4xl text-center'>Login</h1>

				<div className='relative w-full h-1/2 my-[30px] mx-0'>
					<input
						className='w-full h-full bg-tranparent border-none
                    outline-2 outline-[rgba(255,255,255,.2)] rounded-lg'
						type='text'
						placeholder='Username'
						required
					/>
					<FaUser />
				</div>
				<div className='relative w-full h-1/2 my-[30px] mx-0'>
					<input
						className='w-full h-full bg-tranparent border-none
                    outline-2 outline-[rgba(255,255,255,.2)] rounded-lg'
						type='password'
						placeholder='Password'
						required
					/>
					<FaLock />
				</div>
				<div className=''>
					<label>
						<input type='checkbox' />
						Lembre-se de mim
					</label>
					<Link href={"#"}>Esqueceu a senha?</Link>
				</div>

				<button type='submit'>Entrar</button>
				<div className=''>
					<p>
						Não tem uma conta?{" "}
						<Link href={"/register"}>Cadastrar</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
