import { Image, View } from "react-native";

export default function Label({ imgSrc }) {
    return (
        <View>
           <Image
                source={{uri: imgSrc}}
                style = {{ width: 75, height: 75 }}
           >
           </Image>
        </View>
    )
}