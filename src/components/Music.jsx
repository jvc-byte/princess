import { ArrowLeft, Play, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  nightlight,
  sparks,
  openarms,
  bruno,
  greenday,
  kanye,
  sunsetz,
  souljaboy,
} from "../assets";

function Music() {
  const navigate = useNavigate();
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const audioRef = useRef(new Audio());

  const nightlightAudio = new URL(
    "/src/assets/audio/nightlight.mp3",
    import.meta.url
  ).href;

  const openarmsAudio = new URL(
    "/src/assets/audio/openarms.mp3",
    import.meta.url
  ).href;

  // Customize and add your own songs
  const songs = [
    {
      title: "Nightlight",
      artist: "ILLENIUM, Annika wells",
      albumCover: nightlight,
      audioUrl: nightlightAudio,
      left: "5%",
      top: "5%",
    },
    {
      title: "Open Arms (feat. Travis Scott)",
      artist: "SZA, Travis scott",
      albumCover: openarms,
      audioUrl: openarmsAudio,
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      albumCover: bruno,
      left: "15%",
      top: "40%",
    },
    {
      title: "Last Night on Earth",
      artist: "Green Day",
      albumCover: greenday,
      left: "30%",
      top: "75%",
    },
    {
      title: "American Boy",
      artist: "Estelle, Kanye West",
      albumCover: kanye,
      left: "5%",
      top: "65%",
    },
    {
      title: "Sparks",
      artist: "Coldplay",
      albumCover: sparks,
      left: "25%",
      top: "90%",
    },
    {
      title: "Kiss Me Thru The Phone",
      artist: "Soulja Boy, Sammie",
      albumCover: souljaboy,
      left: "35%",
      top: "50%",
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      albumCover: sunsetz,
      left: "10%",
      top: "25%",
    },
  ];

  const handlePlay = (songIndex) => {
    const song = songs[songIndex];

    if (currentlyPlaying === songIndex) {
      // If clicking the currently playing song, pause it
      audioRef.current.pause();
      setCurrentlyPlaying(null);
    } else {
      // If a different song is playing, stop it
      audioRef.current.pause();

      // Play the new song
      audioRef.current.src = song.audioUrl;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setCurrentlyPlaying(songIndex);
    }
  };

  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
          Songs that remind me of you
        </h1>

        <div
          ref={containerRef}
          className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12"
        >
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: song.left,
                top: song.top,
              }}
              drag
              dragConstraints={containerRef}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={song.albumCover}
                    alt="Album cover"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">
                    {song.title}
                  </h2>
                  <p className="text-white/70 text-xs truncate">
                    {song.artist}
                  </p>
                </div>
                <button
                  onClick={() => handlePlay(index)}
                  className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  {currentlyPlaying === index ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center w-full mt-4 mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
