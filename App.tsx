import {Image, ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from "react";
import dimensions from "./dimensions";
import {knight, map} from "./map";
import {Nav, setPos} from "./Nav";


function mapMove(currentE, x) {
    const tre = currentE.reduce((acc, rowTile, idx) => {
        return idx >= x - 2 && idx <= x + 2 ?
            acc.concat(rowTile) :
            acc
    }, [])
    console.log("tre", tre)
    return tre
}

function genMap(mapka, playerPos) {
    // 5x7 -->  -2 x +2 & -3 y +3
    const {x, y} = playerPos;
    const xyz = mapka.reduce((acc, currentE, idx) => {
        return idx >= y - 3 && idx <= y + 3 ?
            acc.concat([mapMove(currentE, x)]) :
            acc
    }, [])
    console.log(xyz);
    return xyz
}


export default function App() {

    const pos = {x: 2, y: 3}

    ;

    const [playerPos, setPlayerPos] = React.useState(pos);
    const [mapka, setMapka] = React.useState(map);

    React.useEffect(() => {

        setMapka(setPos(playerPos))

    }, [])

    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', bottom: 10, right: 10, backgroundColor: 'magenta'}}>
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
                playerPos={playerPos}/>

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
