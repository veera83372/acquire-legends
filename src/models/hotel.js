const areTilesAdjacent = require('../utils/tileUtilities.js').areTilesAdjacent;

class Hotel {
  constructor(name, color , share=25) {
    this.name = name;
    this.color = color;
    this.occupiedTiles = [];
  }
  getDetails() {
    let hotelDetails = {
      name: this.name,
      color: this.color
    };
    return hotelDetails;
  }
  getName(){
    return this.name;
  }
  occupyTile(tile){
    this.occupiedTiles.push(tile);
  }
  doesOccupiedTilesInclude(tile){
    let placedTile = tile;
    return this.occupiedTiles.includes(tile);
  }
}

module.exports = Hotel;
