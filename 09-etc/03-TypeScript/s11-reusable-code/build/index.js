"use strict";
// install the type definitions for the Node standard library npm i @types/node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Node module to access the file system
const fs_1 = __importDefault(require("fs"));
// loads in all the matches expecting 'utf-8' encoding as one giant string
const matches = fs_1.default
    .readFileSync('./src/football.csv', { encoding: 'utf-8' })
    // splits each match on a \n new line into an array of match strings
    .split('\n')
    // maps over each string (row) and turns the data into an array per match
    .map((row) => {
    // splits the data on the ,
    return row.split(',');
});
// console.log(matches);
const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';
const MatchResult = {
    HomeWin: 'H',
    AwayWin: 'A',
    Draw: 'D',
};
let manUnitedWins = 0;
// [date, hometeam, awayteam, homescore, awayscore, winningteam, man of the match]
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games.`);
