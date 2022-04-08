import {Button, Image, ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import React from "react";
import dimensions from "./dimensions";
import {knight, map} from "./map";


// [[<View />]]

export default function App() {

    const pos = {x: 2, y: 4}

    const [playerPos, setPlayerPos] = React.useState(pos);
    const [mapka, setMapka] = React.useState(map);

    return (
        <View style={styles.container}>

            {mapka.map((row, y) => {
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
                                            <Image
                                                source={tile.fg}
                                                style={styles.rock}
                                                resizeMode="contain"/>
                                        </ImageBackground>
                                    ) : (
                                        <Image
                                            source={tile.fg}
                                            style={styles.rock}
                                            resizeMode="contain"/>
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

const Nav = ({setPlayerPos, setMapka, playerPos}) => <View style={styles.nav}>
    <Button
        title="DOWN"
        onPress={() => {
            setPlayerPos(
                (previousPos) => {
                    return ({...previousPos, y: previousPos.y + 1});
                })

            setMapka((previousMap) => {
                const u = JSON.stringify(previousMap);

                const ej = JSON.parse(u);

                try {
                    ej[playerPos.y][playerPos.x].occupant = '';
                    ej[playerPos.y + 1][playerPos.x].occupant = knight;
                } catch (e) {

                }

                return ej;
            })
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
