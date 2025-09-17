import { memo } from "react";
import { Pressable, View, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { product } from "@/constants/items";

export const ProductCard = memo(function ProductCard({ id, name, category, quantity, min_threshold }: product) {


    //petit status = si quantity <min_threshold on met en organge, si quantity = 0 on met en route sinon en vert

    return (<Pressable>
        <View>
            <Text>{name}</Text>
            <Text>{category.name}</Text>
            <Text>{quantity}</Text>
        </View>
        <View>
            <Text></Text>
            <Entypo name="chevron-right" size={24} color="black" />
        </View>

    </Pressable>)
})