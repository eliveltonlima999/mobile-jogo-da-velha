import React from 'react';
import { View } from 'react-native';

import Button from '../components/Button';
import { TurnEnum } from '../enums/TurnEnum';

import styles from './styles';

function Game() {
  const onChangeTurn = (turn?: TurnEnum) => console.log(turn);
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={[styles.vertical, { borderLeftWidth: 0 }]}>
          <Button
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            turn={TurnEnum.ia}
            onPress={() => onChangeTurn(TurnEnum.ia)}
          />
          <Button
            style={[styles.horizontal]}
            turn={TurnEnum.ia}
            onPress={() => onChangeTurn(TurnEnum.ia)}
          />
          <Button
            style={[styles.horizontal]}
            turn={TurnEnum.ia}
            onPress={() => onChangeTurn(TurnEnum.ia)}
          />
        </View>
        <View style={styles.vertical}>
          <Button
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            onPress={() => onChangeTurn()}
          />
          <Button style={[styles.horizontal]} onPress={onChangeTurn} />
          <Button style={[styles.horizontal]} onPress={onChangeTurn} />
        </View>
        <View style={styles.vertical}>
          <Button
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            turn={TurnEnum.player}
            onPress={() => onChangeTurn(TurnEnum.player)}
          />
          <Button
            style={[styles.horizontal]}
            turn={TurnEnum.player}
            onPress={() => onChangeTurn(TurnEnum.player)}
          />
          <Button
            style={[styles.horizontal]}
            turn={TurnEnum.player}
            onPress={() => onChangeTurn(TurnEnum.player)}
          />
        </View>
      </View>
    </View>
  );
}

export default Game;
