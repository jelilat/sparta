'use client'
import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl';
import Header from '../components/Header'
import Hero from '@/components/Hero';

export default function Home() {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "./build/karting.loader.js",
  //   dataUrl: "./build/karting.data",
  //   frameworkUrl: "./build/karting.framework.js",
  //   codeUrl: "./build/karting.wasm",
  // })
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <Unity unityProvider={unityProvider} style={{
        width: "100%",
        height: "100vh",
      }} /> */}
    </div>
  );
}
