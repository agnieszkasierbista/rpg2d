const abc = require('./pictures/baum.png');
const xyz = require('./pictures/water.png');
const rock = require('./pictures/rock.png');
const warrior = require('./pictures/warrior.png');
const space = require('./pictures/space2.png');
export const knight = require('./pictures/knight_16.png');

const abyss = {
    bg: space,
    fg: "",
    occupant: ""
}

const tree = {
    bg: abc,
    fg: rock,
    occupant: ''
};
const water = {
    bg: xyz,
    fg: "",
    occupant: ''
};
const player = {
    bg: abc,
    fg: rock,
    occupant: knight
}
export const map = [
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree,  water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, water, water,  water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [water, water, tree, water, water, water, tree, tree, tree, tree, water, tree, tree, tree, water, tree, tree, water],
    [water, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree,  tree, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree,  tree, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, water, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, water, tree, tree, tree, tree, water],
    [tree, water, tree, tree, tree,  tree, tree, tree, water, tree, water, tree, water, tree, tree, tree, tree, water],
    [tree, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, tree, tree, tree, water],
    [tree, water, tree, water, water,  water, tree, tree, water, tree, water, water, tree, tree, water, tree, tree, water],
    [water, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [water, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, water, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree,  water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree,  water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
];

function genRow(currentE, x) {
    const tre = currentE.reduce((acc, rowTile, idx) => {
        return idx >= x - 3 && idx <= x + 3 ?
            acc.concat(rowTile) :
            acc
    }, [])
    console.log("tre", tre)
    return tre
}

export function genMap(mapka, playerPos) {
    // 5x7 -->  -2 x +2 & -3 y +3
    const {x, y} = playerPos;
    const xyz = mapka.reduce((acc, currentE, idx) => {
        return idx >= y - 3 && idx <= y + 3 ?
            acc.concat([genRow(currentE, x)]) :
            acc
    }, [])
    console.log(xyz);
    return xyz
}