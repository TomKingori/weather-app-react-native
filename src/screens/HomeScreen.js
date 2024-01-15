import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={60}
        source={require("../../assets/images/bg.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className={ios ? "flex flex-1" : "flex flex-1 mt-14"}>
        {/* Search section */}
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 flex-1 text-base text-white"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon color="white" size="25" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full top-16 bg-gray-300 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index+1 != locations.length
                let borderClass = showBorder? 'border-b-2 border-b-gray-400' : ''
                return (
                  <TouchableOpacity
                  key={index}
                  className={"flex-row items-center border-0 p-3 px-4 mb-1 " + borderClass}
                  >
                  <MapPinIcon size="20" color="gray" />
                    <Text className="text-black text-lg ml-2">Nairobi, Kenya</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
}
