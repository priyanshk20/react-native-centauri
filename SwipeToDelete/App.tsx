import {FlatList, View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const DATA = [
  {
    id: '1',
    title: 'Mail-1',
  },
  {
    id: '2',
    title: 'Mail-2',
  },
  {
    id: '3',
    title: 'Mail-3',
  },
  {
    id: '4',
    title: 'Mail-4',
  },
  {
    id: '5',
    title: 'Mail-5',
  },
  {
    id: '6',
    title: 'Mail-6',
  },
  {
    id: '7',
    title: 'Mail-7',
  },
  {
    id: '8',
    title: 'Mail-8',
  },
  {
    id: '9',
    title: 'Mail-9',
  },
  {
    id: '10',
    title: 'Mail-10',
  },
];

const rightActions = mails => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 1,
        backgroundColor: 'red',
      }}>
      <Text style={{color: '#fff', fontSize: 20}}>Deleting Mail</Text>
    </View>
  );
};

const Mail = ({title, id, deleteMail}) => {
  return (
    <Swipeable
      renderRightActions={rightActions}
      onSwipeableRightOpen={() => deleteMail(id)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Swipeable>
  );
};

const App = () => {
  const [mails, setMails] = useState(DATA);

  const deleteMail = mailId => {
    const newMails = mails.filter(mail => mail.id !== mailId);
    setMails(newMails);
  };

  const renderMails = ({ mails }) => (
    <Mail title={mails.title} 
    id={mails.id}
    deleteItem={deleteMail}
    />
  );

  return (
    <View style={styles.container}>
    <FlatList
     data={mails}
     renderItem={renderMails}
     keyExtractor={mails => mails.id}
   />
 </View>
  );
};

const styles = StyleSheet.create({
  mailStyle: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default App;
