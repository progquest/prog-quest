import { DefaultButton } from '@/components/buttons/DefaultButton';
import Link from 'next/link';

/**
 * Componete da Página inicial do site
 * @returns {JSX.Element} Next Component: 'Home Page'
 */
const Home = () => {
	return (
		<h1>
			Landing Page
			<Link href={'/login'}>
				<DefaultButton>Login Page</DefaultButton>
			</Link>
		</h1>
	);
};

export default Home;
