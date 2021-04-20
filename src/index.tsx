import React from "react";
import { StatusBar } from "expo-status-bar";

import { AudioProvider } from "./hooks/audio";

import Player from "./pages/Player";

import { Background } from "./style";

const Main: React.FC = () => {
  return (
    <AudioProvider>
      <StatusBar style="light" />
      <Background>
        <Player />
      </Background>
    </AudioProvider>
  );
};

export default Main;
