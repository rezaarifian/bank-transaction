import React from 'react';
import {Text as TextNative, TextStyle} from 'react-native';

// styles
import Colors from '@theme/Colors';

type TextDecorationProps =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through';

type TextProps = {
  testID?: string;
  children: unknown;
  style?: TextStyle;
  color?: string;
  size?: number;
  decoration?: TextDecorationProps;
  numberOfLines?: number;
  lineHeight?: number;
};

type Props = TextNative['props'] & TextProps;

const Text: React.FC<Props> = (props) => {
  const {
    testID = 'text',
    children,
    style,
    color = Colors.ALMOST_BLACK,
    size = 14,
    decoration = 'none',
    numberOfLines,
    lineHeight,
    ...rest
  } = props;

  return (
    <TextNative
      testID={testID}
      accessibilityLabel={testID}
      numberOfLines={numberOfLines}
      {...rest}
      style={[
        {
          color,
          fontSize: size,
          textDecorationLine: decoration,
          lineHeight: lineHeight,
        },
        style,
      ]}
    >
      {children}
    </TextNative>
  );
};

export default Text;
