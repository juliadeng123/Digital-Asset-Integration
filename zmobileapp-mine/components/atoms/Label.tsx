import { Text, View } from "react-native";

export default function Label({ lableText }) {
        return (
                <View>
                        <Text
                                style={{
                                        color:"purple"
                                }}
                        >
                                {lableText}
                        </Text>
                </View>
        )
}