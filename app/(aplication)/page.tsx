import { SideBar } from '@/components/SideBar';
import InitUser from '@/lib/store/InitUser';
import { createClientServer } from '@/lib/supabase/server';

const Home = async () => {
	const supabase = await createClientServer();

	const { data } = await supabase.auth.getUser();

	return (
		<div className='flex flex-col-reverse min-h-screen lg:flex-row'>
			<SideBar />
			<div className='flex-1'>AppHome</div>
			<InitUser user={data.user} />
		</div>
	);
};

export default Home;
