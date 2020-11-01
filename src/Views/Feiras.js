import React from 'react'
import FeiraCard from '../Components/FeirasCard';

export default function Feiras() {
	return (
		<div className="w-11/12 md:w-full flex flex-col items-center">
			<h1 className="text-5xl text-center text-white ml-10 md:ml-0">Feiras disponiveis</h1>
			<div className="mt-10 flex flex-col items-center justify-center md:flex-row md:flex-wrap">
				<FeiraCard />
				<FeiraCard />
				<FeiraCard />
				<FeiraCard />
				<FeiraCard />
				<FeiraCard />
				<FeiraCard />
				<FeiraCard />
			</div>
		</div>
	)
}
