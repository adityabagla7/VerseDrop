import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IKKA = () => {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			<Header />

			{/* Know the artist — red background, two-column grid */}
			<main className="flex-1">
				<section className="w-full bg-red-600 text-white">
					<div className="container mx-auto px-2 md:px-2 py-20">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div className="flex items-center justify-start pl-0">
								<h2 className="font-black text-white leading-none text-[6rem] md:text-[10rem] lg:text-[12rem] text-left md:-ml-6 lg:-ml-12">IKKA</h2>
							</div>

							<div className="pr-0 md:-mr-6 lg:-mr-20">
								<h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-6">KNOW THE STORY</h3>
								<div className="prose prose-invert max-w-none text-base md:text-lg">
									<p>
										Delhi-bred and street-taught, Ikka turned chaos into craft, rising as one of Indian hip-hop’s OG pioneers with a voice that’s raw, fearless, and unfiltered.
									</p>

									<p>
										Ikka, born Ankit Singh Patial in Geeta Colony, Delhi, grew up amid struggle, street lessons, and big dreams. From baggy jeans bought at Palika Bazaar to sleepless nights writing rhymes in friends’ cars, he lived hip-hop long before he rapped it. Today, Ikka stands as a pioneer who blended hustle with heart, turning his story into bars that inspire millions. From a restless kid in Jagatpuri to a household name in Indian rap, Ikka’s journey is nothing short of raw grit and reinvention. Childhood wasn’t easy, shifting homes, money tight, and a father fighting alcoholism. But his parents backed his love for music, and when hip-hop arrived through Eminem, 50 Cent, and Jay-Z, Ikka found his mirror. He embraced the culture fully: baggy hoodies, knock-off sneakers, comic books, and freestyle cyphers with friends. His name came from a flip “Akki” became “Ikka,” meaning ace: you can beat a king, but never an ace.
									</p>

									<p>
										Starting as a lyricist, Ikka broke ground writing Punjabi hits despite not knowing the language natively, even earning a PTC Punjabi nomination. His breakthrough track Half Window Down made noise, but it was songs like Interview and Shuruwat that proved his pen held more than just rhymes, it held his life story. From Mafia Munde beginnings to judging MTV Hustle, Ikka has constantly evolved, dropping albums like I and Nishu, and his Samurai EP series, blending anime, raw emotion, and sharp bars. An OG hustler at heart, Ikka is proof that hip-hop isn’t a trend, it’s lived.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full overflow-hidden">
					<div className="w-full overflow-hidden">
						<video
							className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
							src={"src/assets/ikkavideo.mp4"}
							autoPlay
							muted
							loop
							controls
							playsInline
						/>
					</div>
				</section>

				
			</main>

			<Footer />
		</div>
	);
};

export default IKKA;
