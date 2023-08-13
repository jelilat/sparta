'use client'
import React from 'react'
import Header from '../components/Header'
import Hero from '@/components/Hero';
import TopCollections from '@/components/Top';
import RecentCollections from '@/components/Recent';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi'
import { chains, wagmiConfig } from '@/components/wagmi';

export default function Home() {

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={lightTheme({
        accentColor: "#5d50b4",
      })}
        chains={chains}>
        <Header />
        <Hero />
        <TopCollections />
        <RecentCollections />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
