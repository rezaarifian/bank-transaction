import React from 'react';
import {
  Modal,
  View,
  FlatList,
} from 'react-native';

// components
import TouchableOpacity from '@components/TouchableOpacity';
import Text from '@components/Text';

// styles
import styles from './styles';

// Define sorting options
const sortingOptions = [
  { label: 'Nama A-Z', value: 'name-asc' },
  { label: 'Nama Z-A', value: 'name-desc' },
  { label: 'Tanggal Terbaru', value: 'date-newest' },
  { label: 'Tanggal Terlama', value: 'date-oldest' },
];

type SortModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedOption: string | null;
  onSelect: (value: string) => void;
};

const SortModal: React.FC<SortModalProps> = ({
  visible,
  onClose,
  selectedOption,
  onSelect,
}) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>URUTKAN</Text>
          <FlatList
            data={sortingOptions}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => {
                  onSelect(item.value);
                  onClose();
                }}
              >
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioOuter,
                      item.value === selectedOption && styles.radioSelectedOuter,
                    ]}
                  >
                    {item.value === selectedOption && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Text style={styles.optionText}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Tutup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SortModal;
