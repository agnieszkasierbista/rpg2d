import {knight} from "./map";
import {Button, View, StyleSheet} from "react-native";
import React from "react";

const moveDown = (playerPos) => (previousMap) => {
    return updateMapWithPlayerPos(playerPos, {x: 0, y: 1})(previousMap);
}
const moveRight = (playerPos) => (previousMap) => {
    return updateMapWithPlayerPos(playerPos, {x: 1, y: 0})(previousMap);
}
const moveUp = (playerPos) => (previousMap) => {
    return updateMapWithPlayerPos(playerPos, {x: 0, y: -1})(previousMap);
}
const moveLeft = (playerPos) => (previousMap) => {
    return updateMapWithPlayerPos(playerPos, {x: -1, y: 0})(previousMap);
}


export const updateMapWithPlayerPos = (playerPos, toPos = {x: 0, y: 0}) => (previousMap) => {
    const prevMapAsString = JSON.stringify(previousMap);
    const clonedMap = JSON.parse(prevMapAsString);
    try {
        clonedMap[playerPos.y][playerPos.x].occupant = "";
        clonedMap[playerPos.y + toPos.y][playerPos.x + toPos.x].occupant = knight;
    } catch (error) {

    }

    return clonedMap;
}

export const Nav = ({setPlayerPos, setMap, playerPos, mapDimensions}) => {
    return (
        <View style={styles.nav}>
        <Button
            title="DOWN"
            onPress={() => {
                if (playerPos.y < mapDimensions.y - 1) {
                    setPlayerPos(
                        (previousPos) => {
                            return ({...previousPos, y: previousPos.y + 1});
                        })

                    setMap(moveDown(playerPos))
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

                    setMap(moveRight(playerPos))
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

                    setMap(moveLeft(playerPos))
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

                    setMap(moveUp(playerPos))
                }
            }}
        />
    </View>
    );
}

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