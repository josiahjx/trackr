'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import coinbase from '../assets/coinbase.svg';
import solana from '../assets/solana.svg';
import phantom from '../assets/phantom.svg';
import ethe from '../assets/ethe.jpeg';


const TrustIndicators = () => {
  const logos = [
    {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Coinbase_Logo.png/1200px-Coinbase_Logo.png",
      src: coinbase,
      alt: "Coinbase",
      isLocal: true
    },
    {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Solana_logo.svg/2560px-Solana_logo.svg.png",
      src: solana,
      alt: "Solana",
      isLocal: true
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/80px-Ethereum-icon-purple.svg.png",
      // src: ethe,
      alt: "Ethereum",
      isLocal: false
    },
    {
      // src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CoinDesk_logo.svg/2560px-CoinDesk_logo.svg.png",
      src: phantom,
      alt: "Phantom",
      isLocal: true
    }
  ];

  return (
    <div className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -800, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="min-w-[120px]">
                {logo.isLocal ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={32}
                    className="h-8 mx-auto opacity-70 hover:opacity-100 transition"
                  />
                ) : (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={60}
                    height={33}
                    className="h-8 mx-auto opacity-70 hover:opacity-100 transition"
                    unoptimized
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators; 