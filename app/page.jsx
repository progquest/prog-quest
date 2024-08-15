import Image from "next/image";

/**
 * Componete da Página inicial do site
 * @returns {JSX.Element} Next Component: 'Home Page'
 */
const Home = () => {
	const loading = true;

	return (
		<div className='flex w-full h-full text-text-900 bg-backgrond-50'>
			{loading ? (
				<Image
					src={"./assets/icons/gear.svg"}
					alt='loading'
					className='m-auto'
					width={200}
					height={200}
				/>
			) : (
				<div className='flex flex-col-reverse md:flex-row w-full h-full text-text-900'></div>
			)}
		</div>
	);
};

export default Home;
