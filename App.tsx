import {Image, ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from "react";
import dimensions from "./dimensions";
import {genMap, map} from "./map";
import {Nav, setPos} from "./Nav";


export default function App() {

    const pos = {x: 3, y: 3};

    const [playerPos, setPlayerPos] = React.useState(pos);
    const [mapka, setMapka] = React.useState(map);

    React.useEffect(() => {

        setMapka(setPos(playerPos))

    }, [])

    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', bottom: 10, right: 10, backgroundColor: 'magenta', zIndex: 1}}>
                <Text>
                    {playerPos.x} : {playerPos.y}
                </Text>
            </View>
            {genMap(mapka, playerPos).map((row, y) => {
                return row.map((tile, x) => {

                    // @ts-ignore
                    return (
                        <View key={x} style={styles.tile}>

                            <ImageBackground
                                source={tile.bg}
                                style={styles.tree}>
                                {
                                    tile.occupant ? (
                                        <ImageBackground
                                            // @ts-ignore
                                            source={tile.occupant}
                                            style={
                                                [{
                                                    flex: 1,
                                                }]
                                            }>
                                            {tile.fg ? (<Image
                                                    source={tile.fg}
                                                    style={styles.rock}
                                                    resizeMode="contain"/>) :
                                                null}
                                        </ImageBackground>
                                    ) : (
                                        tile.fg ? (<Image
                                                source={tile.fg}
                                                style={styles.rock}
                                                resizeMode="contain"/>) :
                                            null
                                    )
                                }

                            </ImageBackground>

                        </View>
                    )
                })
            })}

            <Nav
                setPlayerPos={setPlayerPos}
                setMapka={setMapka}
                playerPos={playerPos}
                mapDimensions={{y: mapka.length, x: mapka[0].length}}
            />

            <StatusBar hidden={true}>

            </StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    tile: {
        borderColor: "#523009",
        borderStyle: "solid",
        borderWidth: 0,
        width: dimensions.tileSize,
        height: dimensions.tileSize,
    },
    tree: {
        flex: 1,
        backgroundColor: 'green'
    },
    water: {
        // flex: 1,
        // backgroundColor: 'blue'
    },
    rock: {
        left: '50%',
        top: '50%',
        width: '50%',
        height: '50%'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
});
