import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";


const Loading = (props) => {
  return (
    <View>
       <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./16587-loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
      <Text>{props.text}</Text>
      </AnimatedLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});

export default Loading;