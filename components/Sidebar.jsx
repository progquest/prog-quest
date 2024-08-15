"use client";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const SidebarContext = createContext();
export const Sidebar = ({ children }) => {
	const [expanded, setExpanded] = useState(true);

	return (
		<aside className='h-screen'>
			<nav className='h-full flex flex-col bg-white border-r shadow-sm'>
				{/* Logo Section */}

				<div className='p-4 pb-2 flex justify-between items-center'>
					<Image
						src={"https://img.logoipsum.com/243.svg"}
						width={32}
						height={32}
						alt='logo'
						className={`overflow-ihden transition-all ${
							expanded ? "w-32" : "w-0"
						}`}
					/>
					<button
						onClick={() => setExpanded((curr = !curr))}
						className='p-1.5 ronded-full bg-gray-50 hover:bg-gray-100'
					>
						{expanded ? (
							<BsChevronBarRight />
						) : (
							<BsChevronBarLeft />
						)}
					</button>
				</div>

				{/* Menu Section */}

				<SidebarContext.Provider value={{ expanded }}>
					<ul className='flex-1 px-3'>{children}</ul>
				</SidebarContext.Provider>

				{/* User Section */}

				<div className='border-t flex p-3'>
					{/* Profile Image */}

					<Image
						src={
							"https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Kodie"
						}
						width={64}
						height={64}
						alt='profile'
						className='w-10 h-10 rounded-md'
					/>
					{/* Profile Name & Email */}

					<div
						className={`flex justify-between items-center overflow-ihden transition-all ${
							expanded ? "w-352 ml-3" : "w-0"
						}`}
					>
						<div className='leading-4'>
							<h4 className='font-semibold'>Kodie</h4>
							<span className='text-xs text-gray-600'>
								kodie@gmail.com
							</span>
						</div>
						<PiDotsThreeOutlineVerticalFill size={20} />
					</div>
				</div>
			</nav>
		</aside>
	);
};

export const SidebarItem = ({ icon, text, active, alert }) => {
	const { expanded } = useContext(SidebarContext);
	return (
		<li
			className={`relative flex items-center py-2 px-3 my-1 
                        font-medium rounded-md crusor-pointer 
                        transition-colors group ${
							active
								? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
								: "hover:bg-indigo-50 text-gray-600"
						}`}
		>
			{icon}
			<span
				className={`overflow-hidden transition-all ${
					expanded ? "w-52 ml-3" : "w-0"
				}`}
			>
				{text}
			</span>
			{alert && (
				<div
					className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
						expanded ? "" : "top-2"
					}`}
				/>
			)}

			{!expanded && (
				<div
					className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm
                invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 gorup-hover:translate-x-0`}
				>
					{text}
				</div>
			)}
		</li>
	);
};
