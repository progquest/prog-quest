import Navbar from '@/components/nav-bar/Navbar';

/**
 * Componete da Página inicial do site
 * @returns {JSX.Element} Next Component: 'Home Page'
 */
const Home = () => {
	return (
		<div className='bg-background-100 w-full'>
			<Navbar />
		</div>
	);
};

export default Home;
