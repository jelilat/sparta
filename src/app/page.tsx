'use client'
import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl';
import Header from '../components/Header'
import Hero from '@/components/Hero';
import TopCollections from '@/components/Top';
import RecentCollections from '@/components/Recent';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi'
import { chains, wagmiConfig } from '@/components/wagmi';

export default function Home() {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "./build/karting.loader.js",
  //   dataUrl: "./build/karting.data",
  //   frameworkUrl: "./build/karting.framework.js",
  //   codeUrl: "./build/karting.wasm",
  // })

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
        {/* <Unity unityProvider={unityProvider} style={{
          width: "100%",
          height: "100vh",
        }} /> */}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
