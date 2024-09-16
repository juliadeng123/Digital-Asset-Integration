import { View } from "react-native";
import Post from "@/components/molecules/Post";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Post
        nameText="Jane Doe"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/0/03/Woman_redhead_natural_portrait_1.jpg"
        messageText="Nice to meet you all! Welcome to my first post!"
      />
    </View>
  );
}
