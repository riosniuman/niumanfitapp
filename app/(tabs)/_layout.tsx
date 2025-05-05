import { SessionProvider, useSession } from "@/contexts/AuthContext";
import { useFonts } from "expo-font";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";


export default function RootLayout() {


  return (
    <SessionProvider>
      <Stack>
          <Stack.Screen name="explore" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </SessionProvider>
  );
}
