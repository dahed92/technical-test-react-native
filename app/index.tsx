import { ActivityIndicator, Button, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import tw from '../components/tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components/header';
import { productStatus, useGetProducts } from '@/hooks/useGetProduct';
import { useCallback, useMemo, useState } from 'react';
import { ProductCard } from '@/components/productCard';
import { product } from '@/constants/items';

export default function App() {

  const [productStatusQeury, setproductStatusQuery] = useState<productStatus>()

  const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useGetProducts(productStatusQeury)

  const finalData = useMemo(() => (data?.pages ?? []).flatMap((p) => p.items), [data])


  return (
    <SafeAreaView style={tw`flex-1 bg-base-white p-6`}>
      <Header updateProductStatus={setproductStatusQuery} />
      <FlatList
        data={finalData}
        keyExtractor={(product) => product.id.toString()}
        renderItem={(item) => <ProductCard {...item.item} />}
        removeClippedSubviews
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        onEndReachedThreshold={0.4}
        onEndReached={() => hasNextPage && fetchNextPage()}
      />
    </SafeAreaView>
  );
}
