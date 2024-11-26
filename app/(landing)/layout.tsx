import type { Metadata } from 'next';
import '../globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
	title: 'ProgQuest',
	description: 'Aprenda a Programar',
	manifest: '/manifest.json',
	icons: { apple: '/icon-192x192.png', icon: '/favicon.ico' },
	applicationName: 'Help Chameleon',
	appleWebApp: {
		capable: true,
		title: 'Help Chameleon',
		startupImage: '/icon-192x192.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased font-poppins scroll-smooth'>
				{children}
				<Toaster
					position='top-center'
					closeButton
				/>
			</body>
		</html>
	);
}
