import { useState } from "react";
import { motion } from "framer-motion";

export default function HarmonicaPortfolio() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const recordings = [
    { title: "Imagine", file: "/recordings/ig.mp3" },
    { title: "Annie's Song", file: "/recordings/a.mp3" },
    { title: "Can't Help Falling in Love", file: "/recordings/i.mp3" },
    { title: "Kal Ho Na Ho", file: "/recordings/khnh.mp3" },
    { title: "My Heart Will Go On", file: "/recordings/tn.mp3" },
    { title: "Take Me Home, Country Roads", file: "/recordings/tmhcr.mp3" },
    { title: "Fly me to the moon", file: "/recordings/fmttm.mp3" },
    { title: "Blowin' in the wind", file: "/recordings/bitw.mp3" },
  ];

  const bgs = [
    "https://i.pinimg.com/736x/30/0d/0d/300d0d5e5fe20a96a25a06bab83ee057.jpg",
    "https://i.pinimg.com/736x/8f/48/de/8f48def5bfe1aa3c31e32cba5d391847.jpg",
    "https://i.pinimg.com/736x/0d/e9/a5/0de9a51fc3a25d830da608af9b038878.jpg",
    "https://i.pinimg.com/736x/86/32/4d/86324d18a5635017df66df6a8d877bb0.jpg",
    "https://i.pinimg.com/736x/bc/a4/80/bca480a3d79e52007706a45126d54590.jpg",
    "https://i.pinimg.com/736x/d0/17/70/d017709e3521c04bdbc4ba1468b8a9c0.jpg",
    "https://i.pinimg.com/736x/7e/48/64/7e48642733c77d4d97ce127d6b7367bb.jpg",
    "https://i.pinimg.com/736x/71/24/f2/7124f2268e6d7545dcce2e71a1cee8c5.jpg",
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center text-center space-y-6 px-10 text-white">
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#131313]">
        {/* <img
          src={
            currentTrack
              ? bgs[
                  recordings.indexOf(
                    recordings.find((rec) => rec.file === currentTrack)
                  )
                ]
              : "https://i.pinimg.com/736x/99/68/e6/9968e6f1e8894e6dd69b3c4823185429.jpg"
          }
          alt="Background"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Audio Player */}
      {currentTrack && (
        <div className=" p-4 rounded-lg flex flex-col justify-center items-center sticky top-6 bg-[#131313] z-20">
          <img
            src={
              currentTrack
                ? bgs[
                    recordings.indexOf(
                      recordings.find((rec) => rec.file === currentTrack)
                    )
                  ]
                : "https://i.pinimg.com/736x/99/68/e6/9968e6f1e8894e6dd69b3c4823185429.jpg"
            }
            className=" aspect-square object-cover rounded-xl"
            alt=""
          />
          <audio
            controls
            autoPlay
            src={currentTrack}
            className="w-full mt-2 "
          />
        </div>
      )}

      {/* Track List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 bg-opacity-80 p-6 rounded-lg"
      >
        <div className="space-y-4">
          {recordings.map((rec, index) => (
            <div
              key={index}
              className={`flex items-center justify-between rounded-lg overflow-scrol p-2 ${
                currentTrack == rec.file ? "bg-[#474d9642]" : ""
              } `}
              onClick={() => setCurrentTrack(rec.file)}
            >
              <span className="text-lg">{rec.title}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
