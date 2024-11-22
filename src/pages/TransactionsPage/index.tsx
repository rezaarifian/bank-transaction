import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

// styles
import Colors from '@theme/Colors';
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Transactions'>;
};

const TransactionsPage: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTintColor: Colors.WHITE,
      headerTitle: 'Transactions',
      headerStyle: {backgroundColor: Colors.PRIMARY_01},
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text
        // size={24}
        // family={'plusJakartaBold'}
        // lineHeight={28}
        numberOfLines={1}
        style={styles.marginBottom24}
      >
        Transactions List
      </Text>
    </View>
  );
};

export default TransactionsPage;
