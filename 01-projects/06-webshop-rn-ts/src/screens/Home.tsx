import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { fontSizes, spacing } from '../constants/sizes';

const Item = ({ title }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const Home: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);
  const dataWithId = data?.map((x, i) => {
    return { id: i, title: x };
  });

  console.log('dataWITHID', dataWithId);

  const onPress = () => {
    // NOTE 1 at bottom
    searchRepositories(term);
  };

  const renderItem = ({ item }: any) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <Text>Hello from the Home Screen</Text>
      <TextInput style={styles.input} onChangeText={setTerm} value={term} />
      <Button title='search' onPress={onPress} />
      {error && <h3>{error}</h3>}
      {loading && <ActivityIndicator size='small' color='000' />}
      {!error && !loading && (
        <FlatList
          data={dataWithId}
          renderItem={renderItem}
          keyExtractor={(item): any => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: fontSizes.sm,
  },
});
