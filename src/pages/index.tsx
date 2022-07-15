import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';

import Button from '../components/Button';
import { TurnEnum } from '../enums/TurnEnum';

import styles from './styles';

const INITTABLE = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [turn, setTurn] = useState(TurnEnum.player);
  const [table, setTable] = useState([...INITTABLE]);

  const checkTable = (tableUpdated: string[]): boolean => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = tableUpdated[winCondition[0]];
      const b = tableUpdated[winCondition[1]];
      const c = tableUpdated[winCondition[2]];

      if (a && b && c) {
        if (a === b && b === c) {
          roundWon = true;
          break;
        }
      }
    }

    return roundWon;
  };

  const minMax = (table: string[]) => {
    const moves = [];
    for (let line = 0; line < 3; line++) {
      for (let column = 0; column < 3; column++) {
        if (table[line][column] === '') moves.push([line, column]);
      }
    }

    console.log(moves);
  };

  const resultGame = useCallback(
    (table: string[]): void => {
      const check = checkTable(table);

      if (check) {
        if (turn === TurnEnum.player)
          Alert.alert('Vitória!', 'Parabéns! Você venceu.', [
            {
              text: 'Recomeçar',
              onPress: () => {
                setTurn(TurnEnum.player);
                setTable([...INITTABLE]);
              },
            },
          ]);
        if (turn === TurnEnum.ia)
          Alert.alert('Desculpa!', 'Eu venci! kkk', [
            {
              text: 'Recomeçar',
              onPress: () => {
                setTurn(TurnEnum.player);
                setTable([...INITTABLE]);
              },
            },
          ]);
      }
    },
    [turn]
  );

  const onChangeTurn = useCallback(
    (position: number, turn?: TurnEnum) => {
      const newTable = table;
      if (newTable[position] === '') {
        if (turn === TurnEnum.ia) {
          const isPosition = minMax(newTable);
          newTable[position] = 'o';
          resultGame(newTable);
          setTurn(TurnEnum.player);
        } else if (turn === TurnEnum.player) {
          newTable[position] = 'x';
          resultGame(newTable);
          setTurn(TurnEnum.ia);
        }
        setTable([...newTable]);
      }
    },
    [table]
  );

  const onResetTable = useCallback(
    () =>
      Alert.alert('Recomeçar', 'Tem certeza que deseja recomeçar?', [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            setTurn(TurnEnum.player);
            setTable([...INITTABLE]);
          },
        },
      ]),
    []
  );

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
            value={table[3]}
            disabled={!!table[3]}
            onPress={() => onChangeTurn(3, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[6]}
            disabled={!!table[6]}
            onPress={() => onChangeTurn(6, turn)}
          />
        </View>
        <View style={styles.vertical}>
          <Button
            value={table[1]}
            disabled={!!table[1]}
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            onPress={() => onChangeTurn(1, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[4]}
            disabled={!!table[4]}
            onPress={() => onChangeTurn(4, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[7]}
            disabled={!!table[7]}
            onPress={() => onChangeTurn(7, turn)}
          />
        </View>
        <View style={styles.vertical}>
          <Button
            style={[styles.horizontal, { borderTopWidth: 0 }]}
            value={table[2]}
            disabled={!!table[2]}
            onPress={() => onChangeTurn(2, turn)}
          />
          <Button
            style={[styles.horizontal]}
            value={table[5]}
            disabled={!!table[5]}
            onPress={() => onChangeTurn(5, turn)}
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
