import InitUser from '@/lib/store/InitUser';
import { createClientServer } from '@/lib/supabase/server';

const Home = async () => {
	const supabase = await createClientServer();

	const { data } = await supabase.auth.getUser();

	return (
		<>
			<div className=''>AppHome</div>
			<InitUser user={data.user} />
		</>
	);
};

export default Home;
