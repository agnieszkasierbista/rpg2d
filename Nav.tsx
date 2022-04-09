import {knight} from "./map";
import {Button, View, StyleSheet} from "react-native";
import React from "react";

const moveDown = (playerPos) => (previousMap) => {
    return setPos(playerPos, {x: 0, y: 1})(previousMap);
}
const moveRight = (playerPos) => (previousMap) => {
   return setPos(playerPos, {x:1, y: 0})(previousMap);
}

export const setPos = (playerPos, toPos = {x: 0, y: 0}) => (previousMap) => {
    const u = JSON.stringify(previousMap);

    const ej = JSON.parse(u);

    try {
        ej[playerPos.y][playerPos.x].occupant = "";
        ej[playerPos.y + toPos.y][playerPos.x + toPos.x].occupant = knight;
    } catch (e) {

    }

    return ej;
}

export const Nav = ({setPlayerPos, setMapka, playerPos}) => <View style={styles.nav}>
    <Button
        title="DOWN"
        onPress={() => {
            setPlayerPos(
                (previousPos) => {
                    return ({...previousPos, y: previousPos.y + 1});
                })


            setMapka(moveDown(playerPos))
        }}
    />
    <Button
        title="Right"
        onPress={() => {
            setPlayerPos(
                (previousPos) => {
                    return ({...previousPos, x: previousPos.x + 1});
                })


            setMapka(moveRight(playerPos))
        }}
    />
</View>

const styles = StyleSheet.create({
    nav: {
        position: 'absolute',
        width: 100,
        height: 60,
        backgroundColor: 'blue'
    },
})