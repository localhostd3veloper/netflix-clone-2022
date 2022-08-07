import { FC } from "react";
const HomePage: FC = () => {
	return (
		<div className="">
			<div className="h-screen">
				<video autoPlay loop className="h-screen w-screen fixed object-cover">
					<source src={require("./trailer.mp4")} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>
				<div className="fixed w-4/12 left-32 bottom-20">
					<img
						src="https://1000logos.net/wp-content/uploads/2021/04/Stranger-Things-logo.png"
						className="w-60"
						alt="Stranger Things"
					/>
					<div className=" text-xl">
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
