import { FC } from "react";
import { InfoIcon } from "../data/svgs/info-icon";
import { PlayIcon } from "../data/svgs/play-icon";
import { TopTen } from "../data/svgs/top-ten";
const HomePage: FC = () => {
	return (
		<div className="shadow-2xl">
			<div id="video-item">
				<video autoPlay loop className="h-screen w-screen object-cover">
					<source src={require("../data/video/trailer.mp4")} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
				<div className="absolute w-4/12 left-32 bottom-[15vh] flex flex-col gap-4">
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
						<TopTen />{" "}
						<span className="drop-shadow-md ml-2">#4 in TV Shows Today</span>
					</div>
					<div>
						<div className="flex gap-4 text-lg">
							<button className="bg-white flex text-black rounded-md px-5 py-2">
								<PlayIcon />
								PLAY
							</button>
							<button className="bg-gray-800/50 flex rounded-md px-5 py-2">
								<InfoIcon />
								More Info
							</button>
						</div>
					</div>
					<div className="text-xl">
						When a young boy vanishes, a small town uncovers a mystery involving
						secret experiments, terrifying supernatural forces and one strange
						little girl.
					</div>
				</div>
			</div>
			<div>hel</div>
		</div>
	);
};
export default HomePage;
