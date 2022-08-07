import { FC } from "react";
import { profiles } from "../data/profiles";
interface IProfilePage {
	setIsProfilePage: (isProfilePage: boolean) => void;
}

const ProfilePage: FC<IProfilePage> = ({ setIsProfilePage }) => {
	return (
		<div className="h-full flex flex-col justify-center items-center gap-9">
			<div className="text-5xl text-white">Who's Watching?</div>
			<div className="flex gap-8 text-center">
				{profiles.map((profile) => (
					<div
						className="flex flex-col text-lg justify-center gap-5 text-white/40 hover:text-white/100 cursor-pointer"
						onClick={() => setIsProfilePage(false)}
						key={profile.id}
					>
						<img
							className="object-cover h-40 w-40 rounded-md hover:border-4 border-white"
							src={profile.avatar}
							alt={profile.user}
						/>
						{profile.user}
					</div>
				))}
			</div>
			<div className="border opacity-50 px-8 py-3 hover:opacity-100">
				Manage Profiles
			</div>
		</div>
	);
};
export default ProfilePage;
