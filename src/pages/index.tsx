import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import Button from '../components/Button';
import { TurnEnum } from '../enums/TurnEnum';

import styles from './styles';

const INITTABLE = ['', '', '', '', '', '', '', '', ''];

function Game() {
  const [turn, setTurn] = useState(TurnEnum.ia);
  const [table, setTable] = useState(INITTABLE);

  const onChangeTurn = (position: number, turn?: TurnEnum) => {
    const newTable = table;
    if (newTable[position] === '') {
      if (turn === TurnEnum.ia) {
        newTable[position] = 'x';
        setTurn(TurnEnum.player);
      } else if (turn === TurnEnum.player) {
        setTurn(TurnEnum.ia);
        newTable[position] = 'o';
      } else {
        newTable[position] = '';
      }
      setTable([...newTable]);
    }
  };

  const onResetTable = () => {
    setTable([...INITTABLE]);
    setTurn(TurnEnum.ia);
  };

  useEffect(() => console.log('table', table), [table]);

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={[styles.vertical, { borderLeftWidth: 0 }]}>
          <Button
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            value={table[0]}
            disabled={!!table[0]}
            onPress={() => onChangeTurn(0, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[1]}
            disabled={!!table[1]}
            onPress={() => onChangeTurn(1, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[2]}
            disabled={!!table[2]}
            onPress={() => onChangeTurn(2, turn)}
          />
        </View>
        <View style={styles.vertical}>
          <Button
            value={table[3]}
            disabled={!!table[3]}
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            onPress={() => onChangeTurn(3, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[4]}
            disabled={!!table[4]}
            onPress={() => onChangeTurn(4, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[5]}
            disabled={!!table[5]}
            onPress={() => onChangeTurn(5, turn)}
          />
        </View>
        <View style={styles.vertical}>
          <Button
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            value={table[6]}
            disabled={!!table[6]}
            onPress={() => onChangeTurn(6, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[7]}
            disabled={!!table[7]}
            onPress={() => onChangeTurn(7, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[8]}
            disabled={!!table[8]}
            onPress={() => onChangeTurn(8, turn)}
          />
        </View>
      </View>
      <View style={styles.otherActions}>
        <TouchableOpacity style={styles.buttonReset} onPress={onResetTable}>
          <Text style={styles.labelButtonReset}>Recomeçar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Game;
