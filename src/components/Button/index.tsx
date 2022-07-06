import React from 'react';
import { TouchableHighlight, ViewStyle, StyleProp } from 'react-native';
import { TurnEnum } from '../../enums/TurnEnum';

import O from '../O';
import X from '../X';

type ButtonProps = {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  turn?: TurnEnum;
};

function Button({ style, turn, onPress }: ButtonProps) {
  let icon;
  if (turn === TurnEnum.ia) {
    icon = <X />;
  } else if (turn === TurnEnum.player) {
    icon = <O />;
  } else {
    icon = <></>;
  }

  return (
    <TouchableHighlight underlayColor="#eeeeee" style={style} onPress={onPress}>
      {icon}
    </TouchableHighlight>
  );
}

export default Button;
