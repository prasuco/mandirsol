import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["devotion", "donation"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Hero content */}
      <div className="flex flex-col max-w-6xl mx-auto items-center space-y-4 relative z-20 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-500 font-medium text-sm"
        >
          Built for Devotees, Trusted by Mandirs
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:text-7xl text-4xl text-center font-extrabold leading-tight text-gray-900 max-w-4xl"
        >
          Support Mandirs Digitally
          <br />
          <span className="text-gray-600">With </span>
          <span className="text-gray-900 font-bold inline-block min-w-50 text-left">
            {text}
            <span className="animate-pulse text-gray-400">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed"
        >
          Verifiable donations via eSewa & Solana stablecoins.
          <br />
          Transparent records, NFT rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
           <button
              onClick={() => setShowModal(true)}
              className="btn bg-gray-900 text-white hover:bg-gray-800 btn-lg text-lg px-8 rounded-md border-2 border-gray-900"
            >
             Join Waitlist
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </motion.div>

        {showModal && (
          <dialog className="modal modal-open">
            <div className="modal-box bg-white text-gray-700">



              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Join the Waitlist
              </h3>

              <button className="btn btn-ghost rounded-full  absolute top-1 right-1" >
                x
              </button>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="ce1766fc-e595-4938-942f-ab63c2e4b9a0"
                />
                <div>
                  <label className="label">
                    <span className="label-text text-gray-700">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input input-bordered w-full bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-gray-700">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="input input-bordered w-full bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-gray-700">
                      Message (Optional)
                    </span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your mandir or interest..."
                    className="textarea textarea-bordered w-full bg-white"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-3xl"
        >
          <div className="relative overflow-hidden ">
            <img
              className="w-full h-auto"
              src="/hero.png"
              alt="Mandir Sewa platform preview"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-180 from-primary/5 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
