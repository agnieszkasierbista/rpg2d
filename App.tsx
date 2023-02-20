import {Image, ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from "react";
import dimensions from "./dimensions";
import {clipMap, gameMap} from "./map";
import {Nav, updateMapWithPlayerPos} from "./Nav";

export default function App() {
    const playerPosition = {x: 2, y: 2};

    const [playerPos, setPlayerPos] = React.useState(playerPosition);
    const [map, setMap] = React.useState(gameMap);

    React.useEffect(() => {
        setMap(updateMapWithPlayerPos(playerPos))
    }, [])

    const memoizedClipMap = React.useCallback(() => {
        return clipMap(map, playerPos);
    }, [map, playerPos])

    const clippedMap = memoizedClipMap();

    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', top: 10, right: 10, backgroundColor: 'magenta', zIndex: 10}}>
                <Text>
                    {playerPos.x} : {playerPos.y}
                </Text>
            </View>
            <View style={styles.mapWrapper}>
                <View style={[
                    styles.map,
                    playerPos.x === gameMap[0].row.length - 1 ? {left: -2 * dimensions.tileSize} : {},
                    playerPos.y > clippedMap.length ? {top: -2 * dimensions.tileSize} : {},

                    playerPos.x <= 1 ? {left: 0} : {},
                    playerPos.y <= 1 ? {top: 0} : {}
                ]}>
                    {clippedMap.map(({row, idx}) => {
                        return <React.Fragment key={idx}>
                            {
                                row.map((tile) => {
                                    return (
                                        <View
                                            key={tile.indexX}
                                            style={styles.tile}>
                                            <ImageBackground
                                                source={tile.bg}
                                                style={styles.tree}>
                                                {
                                                    tile.occupant ? (
                                                        <Image
                                                            source={tile.occupant}
                                                            style={
                                                                [{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    right: 0,
                                                                    bottom: 0,
                                                                    height: '100%',
                                                                    width: '100%',
                                                                }]
                                                            }/>
                                                    ) : null
                                                }
                                                {
                                                    tile.fg ? (<Image
                                                            source={tile.fg}
                                                            style={styles.rock}
                                                            resizeMode="contain"/>) :
                                                        null
                                                }
                                            </ImageBackground>
                                        </View>
                                    )
                                })
                            }
                        </React.Fragment>
                    })}
                </View>
            </View>
            <Nav
                setPlayerPos={setPlayerPos}
                setMap={setMap}
                playerPos={playerPos}
                mapDimensions={{y: map.length, x: map[0].row.length}}
            />
            <StatusBar hidden={true}>
            </StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    tile: {
        borderColor: "#bd1bc9",
        borderStyle: "solid",
        borderWidth: 0,
        width: dimensions.tileSize,
        height: dimensions.tileSize,
    },
    tree: {
        flex: 1,
        backgroundColor: 'green'
    },
    water: {},
    rock: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '50%',
        height: '50%'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mapWrapper: {
        width: 5 * dimensions.tileSize,
        height: 5 * dimensions.tileSize,
        overflow: "hidden"
    },
    map: {
        flexDirection: 'row',
        zIndex: 4,
        flexWrap: 'wrap',
        backgroundColor: 'magenta',
        width: 7 * dimensions.tileSize,
        height: 7 * dimensions.tileSize,
        top: -dimensions.tileSize,
        left: -dimensions.tileSize,
        position: 'absolute',
    }
});
