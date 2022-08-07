import { FC, useState } from "react";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const NetflixApp: FC = () => {
	const [isProfilePage, setIsProfilePage] = useState(true);
	return (
		<div className="h-screen from-[#141414] to-[#141414] bg-gradient-to-b text-white">
			<Header isProfilePage={isProfilePage} />
			<div className="h-full">
				{isProfilePage ? (
					<ProfilePage setIsProfilePage={setIsProfilePage} />
				) : (
					<HomePage />
				)}
			</div>
		</div>
	);
};
export default NetflixApp;
