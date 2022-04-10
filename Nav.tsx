import {knight} from "./map";
import {Button, View, StyleSheet} from "react-native";
import React from "react";

const moveDown = (playerPos) => (previousMap) => {
    return setPos(playerPos, {x: 0, y: 1})(previousMap);
}
const moveRight = (playerPos) => (previousMap) => {
    return setPos(playerPos, {x: 1, y: 0})(previousMap);
}
const moveUp = (playerPos) => (previousMap) => {
    return setPos(playerPos, {x: 0, y: -1})(previousMap);
}
const moveLeft = (playerPos) => (previousMap) => {
    return setPos(playerPos, {x: -1, y: 0})(previousMap);
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

export const Nav = ({setPlayerPos, setMapka, playerPos, mapDimensions}) => <View style={styles.nav}>
    <Button
        title="DOWN"
        onPress={() => {
            if (playerPos.y < mapDimensions.y - 1) {
                setPlayerPos(
                    (previousPos) => {
                        return ({...previousPos, y: previousPos.y + 1});
                    })


                setMapka(moveDown(playerPos))
            }
        }}
    />
    <Button
        title="Right"
        onPress={() => {
            if (playerPos.x < mapDimensions.x - 1) {
                setPlayerPos(
                    (previousPos) => {
                        return ({...previousPos, x: previousPos.x + 1});
                    })


                setMapka(moveRight(playerPos))
            }
        }}
    />
    <Button
        title="Left"
        onPress={() => {
            if (playerPos.x > 0) {
                setPlayerPos(
                    (previousPos) => {
                        return ({...previousPos, x: previousPos.x - 1});
                    })


                setMapka(moveLeft(playerPos))
            }
        }}
    />
    <Button
        title="Up"
        onPress={() => {
            if (playerPos.y > 0) {
                setPlayerPos(
                    (previousPos) => {
                        return ({...previousPos, y: previousPos.y - 1});
                    })


                setMapka(moveUp(playerPos))
            }
        }}
    />
</View>

const styles = StyleSheet.create({
    nav: {
        // position: 'absolute',
        width: '100%',
        height: '100%',
        // flex: 1,
        backgroundColor: 'blue',
        // borderWidth: 3,
        // borderColor: 'red',
        // borderStyle: "solid"
    },
})