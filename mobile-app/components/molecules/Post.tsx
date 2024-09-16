import { View, TextInput } from "react-native";
import Message from "@/components/atoms/Message";
import Name from "@/components/atoms/Name";
import ProfileImage from "@/components/atoms/ProfileImage";

export default function InputForm({ messageText, nameText, imgSrc}) {
    return (
        <View
            style={{
                flexDirection:"row",
                gap: 15,
                alignItems:"center"
            }}
        >
            <ProfileImage imgSrc={imgSrc}/>
            <View
                style={{
                    flexDirection:"column",
                    justifyContent:"left"
                }}
            >
                <Name nameText={nameText}/>
                <Message messageText={messageText}/>
            </View>
        </View>
    )
}