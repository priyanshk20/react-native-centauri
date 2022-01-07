import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App: React.FC<{}> = () => {
  const [input, setInput] = useState('');

  const maxLength = 280;
  const remainingChar = maxLength - input.length;

  const checkColor = (remainingChar: number): string => {
    let currColor = '#90e0ef';

    if (remainingChar < 0) {
      currColor = 'red';
    }
    if (remainingChar < 10 && remainingChar >= 0) {
      currColor = 'yellow';
    }
    return currColor;
  };

  const checkDisabled = (remainingChar: number): boolean => {
    let currState = false;

    if (remainingChar < 0) {
      currState = true;
    }
    return currState;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TWEET CHARACATER COUNT</Text>
      <TextInput
        style={[styles.input, {borderColor: checkColor(remainingChar)}]}
        value={input}
        onChangeText={setInput}
        multiline={true}
        placeholder="Write your tweet in the box"
      />
      <Text style={[styles.heading, {color: checkColor(remainingChar)}]}>
        {maxLength - input.length} characters left
      </Text>

      <TouchableOpacity disabled={checkDisabled(remainingChar)} style={styles.button}>
        <Text>Tweet!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 0,
    backgroundColor: '#03045e',
  },
  input: {
    borderWidth: 5,
    borderRadius: 25,
    margin: 10,
    padding: 10,
    height: 220,
    fontSize: 20,
    textAlignVertical: 'top',
    backgroundColor: 'lightgray',
    color: 'black',
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: '#90e0ef',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#90e0ef',
    padding: 10,
    margin:60,
  },
});

export default App;
