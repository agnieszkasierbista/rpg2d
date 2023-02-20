import {Dimensions} from "react-native";

const mapWidth = 7;
const viewPortWidth = 5;
const window = Dimensions.get('window');
const tileSize = window.width / viewPortWidth;

const dimensions = {
    tileSize,
    mapWidth,
}

export default dimensions;