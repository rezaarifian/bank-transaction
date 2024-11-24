import React from 'react';
import {TextInput, View} from 'react-native';

// styles
import Colors from '@theme/Colors';
import styles from './styles';
import TouchableOpacity from '@components/TouchableOpacity';
import Text from '@components/Text';

type SearchBarProps = {
  query: string;
  onChange: (text: string) => void;
  placeholder?: string;
  onPressSorted: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({query, onChange, placeholder, onPressSorted}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={onChange}
        placeholder={placeholder || 'Cari nama, bank atau nominal'}
        placeholderTextColor={Colors.GREY_01}
      />
      <TouchableOpacity onPress={onPressSorted}>
        <Text size={16} style={styles.textFilter}>URUTKAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
