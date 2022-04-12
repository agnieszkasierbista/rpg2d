const tree1 = require('./pictures/baum.png');
const waves = require('./pictures/water.png');
const rock = require('./pictures/rock.png');
const warrior = require('./pictures/warrior.png');
const space = require('./pictures/space2.png');
export const knight = require('./pictures/knight_16.png');

const memoize = require('memoize');

const abyss = {
    bg: space,
    fg: "",
    occupant: ""
}

const tree = {
    bg: tree1,
    fg: rock,
    occupant: ''
};
const water = {
    bg: waves,
    fg: "",
    occupant: ''
};
const player = {
    bg: tree1,
    fg: rock,
    occupant: knight
}
export const gameMap = [
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [water, water, tree, water, water, water, tree, tree, tree, tree, water, tree, tree, tree, water, tree, tree, water],
    [water, water, tree, water, water, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, water, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, tree, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
    [tree, water, tree, tree, tree, tree, tree, tree, water, tree, water, tree, tree, tree, water, tree, tree, water],
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
].map((row, y) => {
    const sadfasfd = row.map((tile, x) => {
        return {...tile, indexX: Math.random(), indexY: Math.random()}
    })

    return {
        idx: Math.random(),
        row: sadfasfd
    }

});

console.log(324234324, gameMap);

function clipRow(currentRow, playerPosX) {

    const distanceFromTheLeftEdgeCofactor = playerPosX <= 3 ? 3 - playerPosX : 0;
    const mapWidth = currentRow.length - 1;
    const distanceFromTheRightEdge = mapWidth - playerPosX;
    const distanceFromTheRightEdgeCofactor = (distanceFromTheRightEdge <= 3) ? 3 - distanceFromTheRightEdge : 0;


    return currentRow.reduce((acc, rowTile, mapX) => {

        return (mapX >= playerPosX - 3 - distanceFromTheRightEdgeCofactor) && (mapX <= playerPosX + 3 + distanceFromTheLeftEdgeCofactor) ?
            acc.concat(rowTile) :
            acc
    }, [])
}

export function clipMap(map, playerPos) {

    const {x: playerPosX, y: playerPosY} = playerPos;

    const distanceFromTheTopEdgeCofactor = playerPosY <= 3 ? 3 - playerPosY : 0;
    const mapHeight = map.length - 1;
    const distanceFromTheBottomEdge = mapHeight - playerPosY;
    const distanceFromTheBottomEdgeCofactor = (distanceFromTheBottomEdge <= 3) ? 3 - distanceFromTheBottomEdge : 0;

    return map.reduce((acc, currentRow, mapY) => {

        return (mapY >= playerPosY - 3 - distanceFromTheBottomEdgeCofactor) && (mapY <= playerPosY + 3 + distanceFromTheTopEdgeCofactor) ?
            acc.concat({row: clipRow(currentRow.row, playerPosX), idx: currentRow.idx}) :
            acc
    }, [])
}

export const memoizedClipMap = memoize(clipMap);