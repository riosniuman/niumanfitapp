import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../contexts/AuthContext";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }}  />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
    </Stack>
  );
}
