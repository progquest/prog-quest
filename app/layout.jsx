import "@/styles/globals.css";
import { Sidebar, SidebarItem } from "@/components/Sidebar";
import { FaFileCode, FaTrophy } from "react-icons/fa6";

/**
 * Objeto da metadata do site
 *
 * Dados:
 *  - title: Título do site
 *  - description: Descrição do Site
 *  - manifest: Arquivo manifest usado para pwa
 */
export const metadata = {
	title: "ProgQuest",
	description: "Aprenda a Programar",
	manifest: "/manifest.json",
	icons: { apple: "/icon.png" },
	application: {
		name: "Help Chameleon",
		short_name: "Hameleon",
		theme_color: "#a61fad",
		background_color: "#e6e6e6",
		display: "standalone",
	},
	apple: {
		mobileWebAppCapable: "yes",
		appleTouchIcon: {
			image: {
				src: "/icon.png",
				sizes: "192x192",
				type: "image/png",
			},
		},
	},
	mobileWebAppCapable: "yes",
};

/**
 * Elemento do layout do site
 *
 * Esse elemento estará em todas as páginas do site. Útil para coisas como ma NavBar,
 * Header ou Footer
 * @param {*} props Propriedades do Elemento
 * @returns {JSX.Element}
 */
const RootLayout = ({ children }) => {
	return (
		<html lang='pt-br'>
			<body>
				<div className='main'></div>

				{/* Elemento pricipal
				 Manterá as páginas dentro desse elemento */}

				<main className='app flex flex-row'>
					<Sidebar>
						<SidebarItem
							icon={<FaFileCode size={20} />}
							text={"Exercícios"}
							alert
						/>
						<SidebarItem
							icon={<FaTrophy size={20} />}
							text={"Desafios"}
							alert
						/>
					</Sidebar>
					{children}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
