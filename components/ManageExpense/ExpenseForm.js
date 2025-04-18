import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler(enteredValue) {
    console.log(enteredValue);
  }
  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: (value) => console.log(value),
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "sentences",
        }}
      />
    </View>
  );
}

export default ExpenseForm;
