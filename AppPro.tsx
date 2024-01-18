import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro() {
  const darkMode = useColorScheme() === 'dark';
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <View>
          <Text style={darkMode ? styles.darkText : styles.whiteText}>
            Hello World!
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
  },
  whiteText: {
    color: '#000',
  },
  darkText: {
    color: '#FFF',
  },
});

export default AppPro;
