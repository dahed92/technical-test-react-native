import { Slot, Stack } from 'expo-router';
import { useDeviceContext } from 'twrnc';
import tw from '../components/tailwind';
import { queryClient } from '../utils/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Header } from '@/components/header';

export default function RootLayout() {
  useDeviceContext(tw);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );

}
