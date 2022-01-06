import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const App: React.FC<{}> = () => {
  let [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Counter App</Text>
      <Text style={styles.paragraph}>{count}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            onPress={() => setCount(count - 1)}
            title="Reduce"
            color="#D81E5B"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => setCount(count + 1)}
            title="Increase"
            color="#59C9A5"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#23395B',
    padding: 5,
  },
  paragraph: {
    margin: 40,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFD98',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 60,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
});
export default App;
