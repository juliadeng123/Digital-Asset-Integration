import { Text, View } from "react-native";

export default function Label({ messageText }) {
    return (
        <View>
           <Text
                style={{
                    color:"black",
                    fontSize:"16px"
                }}
           >
            {messageText}
           </Text>
        </View>
    )
}