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
    // [tree, water, tree, tree, tree,  tree, tree, tree, water, tree, water, tree, water, tree, tree, tree, tree, water],
    // [tree, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, tree, tree, tree, water],
    // [tree, water, tree, water, water,  water, tree, tree, water, tree, water, water, tree, tree, water, tree, tree, water],
    // [water, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    // [water, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    // [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, water, tree, water, tree, tree, water],
    // [tree, water, tree, tree, tree,  water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    // [tree, water, tree, tree, tree,  water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    // [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
];

function genRow(currentE, x) {
    // if (x <= 3) {
    //     return currentE
    // }
    const oj = x <= 3 ? 3 - x : 0 ;
    const w = currentE.length - 1;

    const abc = (w - x <= 3) ? 3 - (w - x) : 0 ;


    const tre = currentE.reduce((acc, rowTile, idx) => {
        return (idx >= x - 3 - abc) && (idx <= x + 3 + oj) ?
            acc.concat(rowTile) :
            acc
    }, [])
    // console.log("tre", tre)
    return tre
}

export function genMap(mapka, playerPos) {
    // 5x7 -->  -2 x +2 & -3 y +3
    const {x, y} = playerPos;

    const oj = y <= 3 ? 3 - y : 0 ;
    const mapHeight = mapka.length - 1;

    console.log('mapHeight', mapHeight);
    console.log('y',y);
    console.log('oj', oj)

    const czoko = y >= mapHeight - 3 ? (mapHeight - y) : 0;

    console.log('czoko', czoko);

    const abc = (mapHeight - y <= 3) ? 3 - (mapHeight - y) : 0 ;

    console.log('abc', abc);

    const xyz = mapka.reduce((acc, currentE, mapY) => {

        return (mapY >= y - 3 - abc) && (mapY <= y + 3 + oj) ?
            acc.concat([genRow(currentE, x)]) :
            acc
    }, [])
    // console.log(xyz);
    return xyz
}