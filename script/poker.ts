
let players = [];

interface Player {
  _id: number,
  name: string,
  chips: number,
}


function newPlayer(
  name: string,
  startingChips: number
): Player {

  return {
    _id: 0,
    name,
    chips: startingChips,
  };
}
