import { View } from "react-native";
// import Button from "@/components/atoms/Button";
// import Label from "@/components/atoms/Label";
import InputForm from "@/components/molecules/InputForm";

export default function Index() {
  return (
    <View       
      style={{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      }}
    >
      {/* <Button buttonTitle="I'm a button"/>
      <Label lableText="I'm a lable!"/> */}

      <InputForm
        labelText="Button Label"
        buttonTitle="Button!"
        placeholderText="I'm an input form!"
        placeholderTextColor="red"
      />
      <InputForm
        labelText="Button Label"
        buttonTitle="Button!"
        placeholderText="I'm an input form!"
        placeholderTextColor="pink"
      />

    </View>
  )
}