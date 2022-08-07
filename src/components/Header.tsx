import { FC } from "react";
import { navs } from "../data/navs";

interface HeaderProps {
	isProfilePage: boolean;
}

const Header: FC<HeaderProps> = ({ isProfilePage }) => {
	return (
		<div className="bg-transparent px-16 py-6 fixed flex gap-12 items-center w-full">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix"
				className="h-7"
			/>
			<div className="text-sm flex gap-6 text-white tracking-wide font-semi-bold">
				{!isProfilePage &&
					navs.map((nav) => (
						<div
							key={nav.id}
							className={`${
								nav.id !== 0 ? "opacity-40 hover:opacity-100" : null
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
