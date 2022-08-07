import { FC, useState } from "react";
import { InfoIcon } from "../data/svgs/info-icon";
import { MutedIcon } from "../data/svgs/muted-icon";
import { PlayIcon } from "../data/svgs/play-icon";
import { SoundIcon } from "../data/svgs/sound-icon";
import { TopTen } from "../data/svgs/top-ten";
const HomePage: FC = () => {
	const [isSoundOn, setIsSoundOn] = useState(true);
	return (
		<div className="shadow-2xl">
			<div id="video-item">
				<video
					muted={!isSoundOn}
					autoPlay
					loop
					className="h-screen w-screen object-cover"
				>
					<source src={require("../data/video/trailer.mp4")} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
				<div className="absolute  left-16 right-0 bottom-[15vh] flex flex-col gap-4">
					<div className="flex items-center gap-2 text-xs tracking-widest">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png"
							alt="N"
							className="h-5 w-4"
						/>
						SERIES
					</div>
					<img
						src="https://1000logos.net/wp-content/uploads/2021/04/Stranger-Things-logo.png"
						className="w-60"
						alt="Stranger Things"
					/>
					<div className="flex text-3xl items-center">
						<TopTen />
						<span className="drop-shadow-md ml-2 font-bold">
							#4 in TV Shows Today
						</span>
					</div>
					<div className="text-xl w-2/6 font-light">
						When a young boy vanishes, a small town uncovers a mystery involving
						secret experiments, terrifying supernatural forces and one strange
						little girl.
					</div>
					<div>
						<div className="flex gap-4 text-lg items-center w-full justify-between">
							<div className="flex gap-5">
								<button className="bg-white flex text-black rounded-md px-7 items-center py-2">
									<PlayIcon />
									PLAY
								</button>
								<button className="bg-gray-800/50 flex items-center rounded-md px-5 py-2">
									<InfoIcon />
									More Info
								</button>
							</div>
							<div
								className="hover:opacity-70  rounded-full ml-auto border p-2"
								onClick={() => setIsSoundOn(!isSoundOn)}
							>
								{isSoundOn ? <SoundIcon /> : <MutedIcon />}
							</div>
							<div className="bg-gray-800/40 border-l-2 w-1/12 tracking-wider text-center">
								U/A 13+
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-24 bg-[#141414]"></div>
		</div>
	);
};
export default HomePage;
