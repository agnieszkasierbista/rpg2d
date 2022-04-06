import {StyleSheet, Text, View, StatusBar} from 'react-native';

const map = [
    [1, 2, 1, 1, 1],
    [1, 2, 1, 2, 2],
    [2, 2, 1, 2, 2],
    [1, 2, 1, 1, 1],
    [1, 2, 1, 1, 1],
];

// [[<View />]]

export default function App() {
    return (
        <View style={styles.container}>
            {map.map((row) => {
                return row.map((tile) => {
                    const bambo = {
                        width: `${100 / row.length}%`,
                        height: `${100 / map.length}%`
                    };

                    return (
                        tile === 1
                            ? <View style={[styles.tree, bambo]}/>
                            : <View style={[styles.water, bambo]}/>
                    )
                })
            })}
            <StatusBar hidden={true}>

            </StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    tree: {
        // flex: 1,
        backgroundColor: 'green'
    },
    water: {
        // flex: 1,
        backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
});
