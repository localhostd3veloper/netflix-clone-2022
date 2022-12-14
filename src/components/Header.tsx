import { FC, useEffect, useState } from "react";
import { navs } from "../data/static/navs";
import { profiles } from "../data/static/profiles";
import { BellIcon } from "../data/svgs/bell-icon";
import { SearchIcon } from "../data/svgs/search-icon";

interface HeaderProps {
	isProfilePage: boolean;
	setIsProfilePage: (isProfilePage: boolean) => void;
}

const Header: FC<HeaderProps> = ({ isProfilePage, setIsProfilePage }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const isScrollAtTop = () => {
		if (scrollPosition <= 0) {
			return true;
		} else {
			return false;
		}
	};

	useEffect(() => {
		window.onscroll = () => {
			setScrollPosition(window.scrollY);
		};
	}, [scrollPosition]);
	return (
		<div
			className={`from-black ${
				isScrollAtTop() ? "to-transparent" : "to-[#141414]"
			}  bg-gradient-to-b fixed px-16 py-5 top-0 flex gap-12 items-center w-full duration-500 transition-colors z-10`}
		>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix"
				className="h-6"
			/>
			{!isProfilePage ? (
				<>
					<div className="text-[0.85rem] flex gap-5 text-white tracking-wide font-semi-bold">
						{navs.map((nav) => (
							<div
								key={nav.id}
								className={`${
									nav.id !== 0 ? "opacity-60 hover:opacity-100" : null
								} duration-500 cursor-pointer`}
							>
								{nav.name}
							</div>
						))}
					</div>
					<div className="ml-auto gap-6 flex items-center">
						<SearchIcon /> <BellIcon />{" "}
						<img
							onClick={() => setIsProfilePage(true)}
							src={profiles[0].avatar}
							alt="avatar"
							className="h-8 w-8 rounded"
						/>
					</div>
				</>
			) : null}
		</div>
	);
};
export default Header;
