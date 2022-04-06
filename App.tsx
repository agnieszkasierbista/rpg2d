import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';

const abc = require('./pictures/baum.png');
const xyz = require('./pictures/water.png');

const tree = {
    bg: 'green',
    fg: abc
};
const water = {
    bg: 'blue',
    fg: xyz
};
const map = [
    [tree, water, tree, tree, tree],
    [tree, water, tree, water, water],
    [water, water, tree, water, water],
    [tree, water, tree, tree, tree],
    [tree, water, tree, tree, tree],
];

// [[<View />]]

export default function App() {
    return (
        <View style={styles.container}>

            {map.map((row) => {
                return row.map(( tile, idx) => {
                    const bambo = {
                        width: `${100 / row.length}%`,
                        height: `${100 / map.length}%`
                    };

                    return (
                        <View key={idx} style={[bambo, styles.gowno]}>

                            <View style={[{backgroundColor: tile.bg, flex: 1}]}/>
                            {tile.fg ? <Image source={tile.fg} style={[ {position:"absolute",  width:'100%', height:'100%'}]} resizeMode="contain"/> : null}


                        </View>
                    )
                })
            })}
            <StatusBar hidden={true}>

            </StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    gowno: {
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
