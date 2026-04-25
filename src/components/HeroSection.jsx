import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const paymentMethods = [
  {
    name: 'USDC',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    left: '10%',
    delay: 0,
  },
  {
    name: 'USDT',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    left: '30%',
    delay: 1.5,
  },
  {
    name: 'USDG',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    left: '50%',
    delay: 3,
  },
  {
    name: 'eSewa',
    logo: 'https://dl-media.viber.com/3/share/2/long/vibes/icon/image/0x0/7c1e/086dde33accffc866765f975f7ce2eab8f483c8951e57f4f952000e169897c1e.jpg',
    left: '70%',
    delay: 4.5,
  },
];

const words = ['devotion', 'donation'];

const HeroSection = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      {/* Subtle gradient orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      {/* Flying payment logos */}
      {paymentMethods.map((method) => (
        <motion.div
          key={method.name}
          className="absolute z-10"
          style={{ left: method.left }}
          initial={{ y: -120, opacity: 0 }}
          animate={{
            y: ['-120px', '110vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: method.delay,
            ease: 'linear',
            times: [0, 0.1, 0.9, 1],
          }}
        >
          <div className="bg-white rounded-md shadow-lg border border-gray-200 p-3 flex items-center gap-2 z-[100]">
            <img
              src={method.logo}
              alt={`${method.name} logo`}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="text-sm font-bold text-gray-800">{method.name}</span>
          </div>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="flex flex-col max-w-6xl mx-auto items-center space-y-8 relative z-20 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary/10 text-primary font-semibold text-sm inline-block px-5 py-2 rounded-full border border-primary/20"
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
          <span className="text-secondary">With{' '}</span>
          <span className="text-primary font-bold inline-block min-w-[200px] text-left">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-700 font-medium text-center max-w-2xl mx-auto leading-relaxed"
        >
          Support any mandir via{' '}
          <span className="text-primary font-bold">eSewa</span> or{' '}
          <span className="text-secondary font-bold">Solana stablecoins</span>.
          <br />
          Every donation is verifiable, transparent, and rewarded with{' '}
          <span className="font-semibold">NFTs</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
           <a
             href="/donate"
             className="btn btn-primary btn-lg text-lg px-8 rounded-md"
           >
            Donate Now
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
          </a>
           <a
             href="/mandir/register"
             className="btn btn-outline btn-secondary btn-lg text-lg px-8 rounded-md"
           >
            Register Your Mandir
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 w-full max-w-3xl"
        >
           <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200">
            <img
              className="w-full h-auto"
              src="https://picsum.photos/800/500?random=10"
              alt="Mandir Sewa platform preview"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
