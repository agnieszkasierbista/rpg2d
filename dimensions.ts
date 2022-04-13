import {Dimensions} from "react-native";

const mapWidth = 7;
const viewPortWidth = 5;
const window = Dimensions.get('window');
const tileSize = window.width / viewPortWidth;

// const rowsCount = Math.floor(window.height / tileSize);

const dimensions = {
    tileSize,
    mapWidth,
    // mapHeight: rowsCount % 2 === 0 ? rowsCount - 1 : rowsCount,
}


export default dimensions;