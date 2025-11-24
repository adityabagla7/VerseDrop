import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IKKA = () => {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			<Header />

			{/* Know the artist — red background, two-column grid */}
			<main className="flex-1">
				   <motion.section
					   className="w-full bg-red-600 text-white overflow-hidden"
					   initial={{ x: '-100%' }}
					   animate={{ x: 0 }}
					   transition={{ duration: 0.8, ease: 'easeOut' }}
				   >
					   <div className="container mx-auto px-2 md:px-2 py-20">
						   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							   <div className="flex items-center justify-start pl-0">
								   <motion.h2
									   className="font-black text-white leading-none text-[6rem] md:text-[10rem] lg:text-[12rem] text-left md:-ml-6 lg:-ml-12"
									   initial={{ opacity: 0, y: 60 }}
									   animate={{ opacity: 1, y: 0 }}
									   transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
								   >
									   IKKA
								   </motion.h2>
							   </div>

							   <div className="pr-0 md:-mr-6 lg:-mr-20">
								   <motion.h3
									   className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-6"
									   initial={{ opacity: 0, y: 40 }}
									   animate={{ opacity: 1, y: 0 }}
									   transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
								   >
									   KNOW THE STORY
								   </motion.h3>
								   <motion.div
									   className="prose prose-invert max-w-none text-base md:text-lg"
									   initial={{ opacity: 0, y: 30 }}
									   animate={{ opacity: 1, y: 0 }}
									   transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
								   >
									   <p>
										   Delhi-bred and street-taught, Ikka turned chaos into craft, rising as one of Indian hip-hop’s OG pioneers with a voice that’s raw, fearless, and unfiltered.
									   </p>

									   <p>
										   Ikka, born Ankit Singh Patial in Geeta Colony, Delhi, grew up amid struggle, street lessons, and big dreams. From baggy jeans bought at Palika Bazaar to sleepless nights writing rhymes in friends’ cars, he lived hip-hop long before he rapped it. Today, Ikka stands as a pioneer who blended hustle with heart, turning his story into bars that inspire millions. From a restless kid in Jagatpuri to a household name in Indian rap, Ikka’s journey is nothing short of raw grit and reinvention. Childhood wasn’t easy, shifting homes, money tight, and a father fighting alcoholism. But his parents backed his love for music, and when hip-hop arrived through Eminem, 50 Cent, and Jay-Z, Ikka found his mirror. He embraced the culture fully: baggy hoodies, knock-off sneakers, comic books, and freestyle cyphers with friends. His name came from a flip “Akki” became “Ikka,” meaning ace: you can beat a king, but never an ace.
									   </p>

									   <p>
										   Starting as a lyricist, Ikka broke ground writing Punjabi hits despite not knowing the language natively, even earning a PTC Punjabi nomination. His breakthrough track Half Window Down made noise, but it was songs like Interview and Shuruwat that proved his pen held more than just rhymes, it held his life story. From Mafia Munde beginnings to judging MTV Hustle, Ikka has constantly evolved, dropping albums like I and Nishu, and his Samurai EP series, blending anime, raw emotion, and sharp bars. An OG hustler at heart, Ikka is proof that hip-hop isn’t a trend, it’s lived.
									   </p>
								   </motion.div>
							   </div>
						   </div>
					   </div>
				   </motion.section>

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

				
			{/* Albums Section */}
			<section className="w-full py-16 bg-black">
			  <div className="max-w-none w-full px-0">
			    <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-10 text-center text-white">Check out crazy tracks</h2>
			    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-full">
			      {[
			        {
			          name: "Blood Is Better Than Tears",
			          cover: "src/assets/bloodisbetter.webp", // Replace with real cover
			          spotify: "https://open.spotify.com/album/49ZMHYxRhvlD37JZ14T1Fl",
			          barcode: "src/assets/Spotify_Code.svg" // Replace with real barcode
			        },
			        {
			          name: "FUBU",
			          cover: "src/assets/fubu.webp", // Replace with real cover
			          spotify: "https://open.spotify.com/album/1gMI7E8geD2zjlDj9oTIp1",
			          barcode: "https://i.ibb.co/6bQ7QpT/spotify-barcode.png" // Replace with real barcode
			        },
			        {
			          name: "WOH",
			          cover: "src/assets/WOH.jpeg", // Replace with real cover
			          spotify: "https://open.spotify.com/album/0hYH2JNegSbU72fmNnQ3LW ",
			          barcode: "https://i.ibb.co/6bQ7QpT/spotify-barcode.png" // Replace with real barcode
			        }
			      ].map((album, idx) => (
			        <a
			          key={album.name}
			          href={album.spotify}
			          target="_blank"
			          rel="noopener noreferrer"
			          className={`group relative aspect-square w-full flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${idx === 0 ? 'rounded-l-none' : ''} ${idx === 2 ? 'rounded-r-none' : ''}`}
			          style={{
			            borderRadius: 0,
			            marginLeft: idx === 0 ? 0 : undefined,
			            marginRight: idx === 2 ? 0 : undefined,
			          }}
			        >
			          <img
			            src={album.cover}
			            alt={album.name}
			            className="absolute inset-0 w-full h-full object-cover z-0"
			            style={{ objectFit: 'cover' }}
			          />
			          <div className="absolute inset-0 bg-black/60 opacity-0 transition duration-500 group-hover:opacity-100 z-10 flex flex-col items-center justify-center">
						<button className="bg-transparent rounded-full p-4 mb-4 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white opacity-90">
								<circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" fill="transparent" />
								<polygon points="10,8 18,12 10,16" fill="white" />
							</svg>
						</button>
			          </div>
			        </a>
			      ))}
			    </div>
			  </div>
			</section>

			</main>

			<Footer />
		</div>
	);
};

export default IKKA;
