import { ActivityIndicator, Button, Image, Pressable, ScrollView, Text, View } from 'react-native';
import tw from '../components/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components/header';

export default function App() {



  return (
    <SafeAreaView style={tw`flex-1 bg-base-white p-6`}>
      <Header />
    </SafeAreaView>
  );
}
