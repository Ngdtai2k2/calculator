import { StyleSheet, Text, TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
  //các phím bình thường 
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 1,
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },

  buttonZero: { 
    //phím 0 sẽ to gấp đôi các phím khác
    width: 178, 
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTop: {
    backgroundColor: "lightgrey",
    color: "#fff",
  },
  buttonRight: { //cột nút bên phải 
    backgroundColor: "orange",
  },
});
export default ({ onPress, text, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (theme === "zero") {
    // push thêm các định nghĩa của styles.buttonZero
    buttonStyles.push(styles.buttonZero);
  }
  if (theme === "top") {
    buttonStyles.push(styles.buttonTop);
  } else if (theme === "right") {
    buttonStyles.push(styles.buttonRight);
  }

  return (
    //tạo ra một button
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

