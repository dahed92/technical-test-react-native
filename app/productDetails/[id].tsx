import { useGetProcutDetails } from "@/hooks/useGetProduct";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { View, Text } from "react-native";

export default function ProductDetail() {

    const { id } = useLocalSearchParams()
    const finalId = useMemo(() => Array.isArray(id) ? id[0] : id, [id])

    const { data, isLoading, isFetched } = useGetProcutDetails(finalId)

    return (
        <View>
            <Text>id</Text>
        </View>
    )
}