import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component Did Update: Count berubah menjadi", count);
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Life Cycle Component
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase Count" onPress={increaseCount} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Decrease Count" onPress={decreaseCount} />
      </View>
      <Text style={styles.countText}>Count: {count}</Text>
    </View>
  );
};

export default LifeCycle;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 5,
  },
  countText: {
    fontSize: 16,
    marginTop: 10,
  },
});
