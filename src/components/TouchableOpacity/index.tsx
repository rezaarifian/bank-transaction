import Colors from '@theme/Colors';
import React, {useCallback, useRef} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
  View,
} from 'react-native';

// styles
import styles from './styles';

type DebouncedTouchableOpacityProps = TouchableOpacityProps & {
  testID?: string;
  onPress?: (event: GestureResponderEvent) => void;
  debounceTime?: number;
  children: React.ReactNode;
  isLoading?: boolean;
  spinnerColor?: string;
};

const TouchableOpacity: React.FC<DebouncedTouchableOpacityProps> = ({
  testID = 'touchable-opacity-debounce',
  onPress,
  debounceTime = 300,
  children,
  isLoading = false,
  spinnerColor = Colors.WHITE,
  ...props
}) => {
  const lastPressRef = useRef<number>(0);

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      if (!onPress) return;

      const now = Date.now();

      if (now - lastPressRef.current >= debounceTime) {
        lastPressRef.current = now;

        onPress(event);
      }
    },
    [debounceTime, onPress],
  );

  return (
    <RNTouchableOpacity
      testID={testID}
      onPress={handlePress}
      style={props.style}
      {...props}
    >
      {isLoading ? (
        <View style={styles.containerChildren}>
          <ActivityIndicator
            testID={'loading-touch'}
            size="small"
            color={spinnerColor}
            style={styles.marginRight8}
          />
          {children}
        </View>
      ) : (
        children
      )}
    </RNTouchableOpacity>
  );
};

export default TouchableOpacity;
