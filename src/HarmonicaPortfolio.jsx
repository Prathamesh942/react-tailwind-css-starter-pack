import { useState } from "react";
import { motion } from "framer-motion";

export default function HarmonicaPortfolio() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const recordings = [
    { title: "Imagine", file: "/recordings/ig.mp3" },
    { title: "Annie's song", file: "/recordings/a.mp3" },
    { title: "Can't help falling in love", file: "/recordings/i.mp3" },
    { title: "Kal ho na ho", file: "/recordings/khnh.mp3" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center text-center space-y-6 px-10 text-white">
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src="https://i.pinimg.com/736x/99/68/e6/9968e6f1e8894e6dd69b3c4823185429.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {currentTrack && (
        <div className="mt-4  bg-opacity-70 p-4 rounded-lg ">
          <audio controls autoPlay src={currentTrack} className="w-full mt-2" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 bg-opacity-80 p-6 rounded-lg "
      >
        <div className="space-y-4">
          {recordings.map((rec, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#3f332a56] p-3 rounded-lg"
            >
              <span className="text-lg">{rec.title}</span>
              <button
                onClick={() => setCurrentTrack(rec.file)}
                className="px-4 py-2 bg-white text-black rounded-lg "
              >
                Play
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
