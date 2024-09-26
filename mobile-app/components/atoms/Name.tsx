import { Text, View } from "react-native";

export default function Label({ nameText }) {
    return (
        <View>
           <Text
                style={{
                    color:"black",
                    fontSize: "20px",
                    fontWeight: "bold"
                }}
           >
            {nameText}
           </Text>
        </View>
    )
}