import {StyleSheet, Button, View, StatusBar, Image, Dimensions, ImageBackground} from 'react-native';
import React from "react";

const abc = require('./pictures/baum.png');
const xyz = require('./pictures/water.png');
const rock = require('./pictures/rock.png');
const warrior = require('./pictures/warrior.png');
const knight = require('./pictures/knight_16.png');

const mapWidth = 5;
const window = Dimensions.get('window');
const tileSize = window.width / mapWidth;

const rowsCount = Math.floor(window.height / tileSize);

const dimensions = {
    mapWidth,
    mapHeight: rowsCount % 2 === 0 ? rowsCount - 1 : rowsCount,
}



const tree = {
    bg: abc,
    fg: rock,
    occupant: ''
};
const water = {
    bg: xyz,
    fg: xyz,
    occupant: ''
};

const player = {
    bg: abc,
    fg: rock,
    occupant: knight
}
const map = [
    [tree, water, tree, tree, tree],
    [tree, water, tree, tree, tree],
    [tree, water, tree, water, water],
    [tree, water, tree, water, water],
    [water, water, player, water, water],
    [water, water, tree, water, water],
    [tree, water, tree, tree, tree],
    [tree, water, tree, tree, tree],
    [tree, water, tree, tree, tree],
    [tree, water, tree, tree, tree],
];

// [[<View />]]

export default function App() {

    const pos = { x: 2, y: 4}

    const [playerPos, setPlayerPos] = React.useState(pos);
    const [mapka, setMapka] = React.useState(map);

    return (
        <View style={styles.container}>

            {mapka.map((row, y) => {
                return row.map((tile, x) => {
                    const bambo = {
                        width: tileSize,
                        height: tileSize,
                    };

                    // @ts-ignore
                    return (
                        <View key={x} style={[bambo, styles.border]}>

                            <ImageBackground
                                source={tile.bg}
                                style={
                                    [{
                                        flex: 1,
                                        backgroundColor: 'lightgreen',
                                        // flexDirection: 'column-reverse',
                                        // alignItems: 'flex-end'
                                    }]
                                }>
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
                                                style={
                                                    [{left: '50%',
                                                        top: '50%',
                                                        width: '50%',
                                                        height: '50%'}]
                                                }
                                                resizeMode="contain"/>
                                        </ImageBackground>
                                    ) : (
                                        <Image
                                            source={tile.fg}
                                            style={
                                                [{left: '50%',
                                                    top: '50%',
                                                    width: '50%',
                                                    height: '50%'}]
                                            }
                                            resizeMode="contain"/>
                                    )
                                }

                            </ImageBackground>

                        </View>
                    )
                })
            })}

            <View style={{position: 'absolute', width: 100, height: 60, backgroundColor: 'blue'}}>
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

            <StatusBar hidden={true}>

            </StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    border: {
        borderColor: "#523009",
        borderStyle: "solid",
        borderWidth: 0
    },
    tree: {
        // flex: 1,
        // backgroundColor: 'green'
    },
    water: {
        // flex: 1,
        // backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
});
