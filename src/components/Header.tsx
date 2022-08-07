import { FC } from "react";
import { navs } from "../data/static/navs";

interface HeaderProps {
	isProfilePage: boolean;
}

const Header: FC<HeaderProps> = ({ isProfilePage }) => {
	return (
		<div className="bg-transparent fixed px-16 py-5 top-0 flex gap-12 items-center w-full z-50">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix"
				className="h-6"
			/>
			<div className="text-[0.85rem] flex gap-5 text-white tracking-wide font-semi-bold">
				{!isProfilePage &&
					navs.map((nav) => (
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
		</div>
	);
};
export default Header;
