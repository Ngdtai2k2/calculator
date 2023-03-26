import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/ButtonStyles";
import Row from "./src/components/Row";
import calculator, { initialState } from "./src/utils/Calculator";

export default class App extends Component {
  state = initialState;

  click = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          {/* hiển thị */}
          <Text style={styles.result}>
            {parseFloat(this.state.initialValue).toLocaleString()}
          </Text>
          {/* Row sẽ render ra màn hình với các thành phần con này được đặt trong một container View*/}
          <Row>
            {/* xoá */}
            {/* onpress là callback function */}
            <Button text="AC" theme="top" onPress={() => this.click("clear")} />
            {/* đổi dấu */}
            <Button text="+/-" theme="top" onPress={() => this.click("change")} />
            {/* phần trăm */}
            <Button text="%" theme="top" onPress={() => this.click("percentage")} />
            {/* Chia */}
            <Button text="÷" theme="right" onPress={() => this.click("operator", "/")} />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.click("number", 7)} />
            <Button text="8" onPress={() => this.click("number", 8)} />
            <Button text="9" onPress={() => this.click("number", 9)} />
            {/* nhân */}
            <Button text="x" theme="right" onPress={() => this.click("operator", "*")} />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.click("number", 4)} />
            <Button text="5" onPress={() => this.click("number", 5)} />
            <Button text="6" onPress={() => this.click("number", 6)} />
            {/* trừ */}
            <Button text="-" theme="right" onPress={() => this.click("operator", "-")} />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.click("number", 1)} />
            <Button text="2" onPress={() => this.click("number", 2)} />
            <Button text="3" onPress={() => this.click("number", 3)} />
            {/* cộng */}
            <Button text="+" theme="right" onPress={() => this.click("operator", "+")} />
          </Row>

          <Row >
            <Button text="0" theme="zero" onPress={() => this.click("number", 0)} />
            <Button text="," onPress={() => this.click("number", ".")} />
            {/* kết quả */}
            <Button text="=" theme="right" onPress={() => this.click("equal", "=")} />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
  result: {
    color: "#fff",
    fontSize: 100,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});