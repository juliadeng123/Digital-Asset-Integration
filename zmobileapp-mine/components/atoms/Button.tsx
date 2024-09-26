import { Button as NativeButton, View } from "react-native";

export default function Button( {buttonTitle} ) {
        return (
                <View>
                        <NativeButton 
                                color="red"
                                title={buttonTitle}
                        />
                </View>
        )
}