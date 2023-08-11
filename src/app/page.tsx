'use client'
import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./build/karting.loader.js",
    dataUrl: "./build/karting.data",
    frameworkUrl: "./build/karting.framework.js",
    codeUrl: "./build/karting.wasm",
  })
  return (
    <div className="App">
      <Unity unityProvider={unityProvider} style={{
        width: "100%",
        height: "100vh",
      }} />
    </div>
  );
}
