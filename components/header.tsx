import { memo, useCallback, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "./tailwind";
import { productStatus } from "@/hooks/useGetProduct";


type headerProps = {
    updateProductStatus: (status?: productStatus) => void
}
export const Header = memo(function Header({ updateProductStatus }: headerProps) {

    const [currentStatus, setCurrentStatus] = useState<productStatus>()

    const activeStatusStyle = {
        btn: tw`text-2xl bg-blue-500 text-base-white p-2 rounded`,
        text: tw`color-blue-500`
    };
    const passiveStatusStyle = {
        btn: tw`text-2xl bg-gray-50 text-base-white p-2 rounded`,
        text: tw`color-gray-500`
    };

    useEffect(() => {
        updateProductStatus(currentStatus)
    }, [currentStatus])


    return (
        <View style={tw``}>
            <View style={tw``}>
                <Text style={tw`text-2xl font-bold`}>Stock Manager</Text>
            </View>

            <View style={tw`flex flex-row gap-2`}>
                <Pressable onPress={() => setCurrentStatus(undefined)} style={currentStatus === undefined ? activeStatusStyle.btn : passiveStatusStyle.btn}>
                    <Text style={currentStatus === undefined ? activeStatusStyle.text : passiveStatusStyle.text}>
                        Tous
                    </Text>
                </Pressable>
                <Pressable onPress={() => setCurrentStatus("out_of_stock")} style={currentStatus === "out_of_stock" ? activeStatusStyle.btn : passiveStatusStyle.btn}>
                    <Text style={currentStatus === "out_of_stock" ? activeStatusStyle.text : passiveStatusStyle.text}>
                        En rupture
                    </Text>
                </Pressable>
                <Pressable onPress={() => setCurrentStatus("low_stock")} style={currentStatus === "low_stock" ? activeStatusStyle.btn : passiveStatusStyle.btn}>
                    <Text style={currentStatus === "low_stock" ? activeStatusStyle.text : passiveStatusStyle.text}>
                        Stock bas
                    </Text>
                </Pressable>
            </View>
        </View>)
})