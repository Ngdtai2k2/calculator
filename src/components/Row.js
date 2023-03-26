import { StyleSheet, View } from "react-native";

const Row = ({ children }) => {
  // prop (đối tượng) children chứa tất cả các thành phần con truyền vào component 
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // tất cả thành phần con trong View sẽ sắp xếp theo chiều ngang
    flexDirection: "row",
  },
});

export default Row;