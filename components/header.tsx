import { memo, useState } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "./tailwind";

type filerStatus = "tous" | "rupture" | "bas"

export const Header = memo(function Header() {

    const [currentStatus, setCurrentStatus] = useState<filerStatus>("tous")

    const activeStatusStyle = {
        btn: tw`text-2xl bg-blue-500 text-base-white p-2 rounded`,
        text: tw`color-blue-500`
    };
    const passiveStatusStyle = {
        btn: tw`text-2xl bg-gray-50 text-base-white p-2 rounded`,
        text: tw`color-gray-500`
    };


    return (
        <View style={tw``}>
            <View style={tw``}>
                <Text style={tw`text-2xl font-bold`}>Stock Manager</Text>
            </View>

            <View style={tw`flex flex-row gap-2`}>
                <Pressable onPress={() => setCurrentStatus('tous')} style={currentStatus === "tous" ? activeStatusStyle.btn : passiveStatusStyle.btn}>
                    <Text style={currentStatus === "tous" ? activeStatusStyle.text : passiveStatusStyle.text}>
                        Tous
                    </Text>
                </Pressable>
                <Pressable onPress={() => setCurrentStatus("rupture")} style={currentStatus === "rupture" ? activeStatusStyle.btn : passiveStatusStyle.btn}>
                    <Text style={currentStatus === "rupture" ? activeStatusStyle.text : passiveStatusStyle.text}>
                        En rupture
                    </Text>
                </Pressable>
                <Pressable onPress={() => setCurrentStatus("bas")} style={currentStatus === "bas" ? activeStatusStyle.btn : passiveStatusStyle.btn}>
                    <Text style={currentStatus === "bas" ? activeStatusStyle.text : passiveStatusStyle.text}>
                        Stock bas
                    </Text>
                </Pressable>
            </View>
        </View>)
})