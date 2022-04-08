const abc = require('./pictures/baum.png');
const xyz = require('./pictures/water.png');
const rock = require('./pictures/rock.png');
const warrior = require('./pictures/warrior.png');
export const knight = require('./pictures/knight_16.png');
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
export const map = [
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