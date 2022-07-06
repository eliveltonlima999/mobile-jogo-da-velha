import React, { useEffect, useState } from 'react';
import { TouchableHighlight, ViewStyle, StyleProp } from 'react-native';

import O from '../O';
import X from '../X';

type ButtonProps = {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  value?: string;
};

function Button({ style, value, onPress }: ButtonProps) {
  const [icon, setIcon] = useState<JSX.Element>(<></>);

  useEffect(() => {
    if (value === 'x') {
      setIcon(<X />);
    } else if (value === 'o') {
      setIcon(<O />);
    } else {
      setIcon(<></>);
    }
  }, [value]);

  return (
    <TouchableHighlight underlayColor="#eeeeee" style={style} onPress={onPress}>
      {icon}
    </TouchableHighlight>
  );
}

export default Button;
