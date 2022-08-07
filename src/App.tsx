import { FC, useState } from "react";
import Header from "./components/Header";
const NetflixApp: FC = () => {
	const [isProfilePage] = useState(false);
	return (
		<div className="h-screen from-[#141414] to-[#141414]/95 bg-gradient-to-b">
			<Header isProfilePage={isProfilePage} />
		</div>
	);
};
export default NetflixApp;
