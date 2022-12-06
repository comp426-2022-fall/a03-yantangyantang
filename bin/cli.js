#!/usr/bin/env node

import minimist from "minimist"
import { roll } from "../lib/roll.js"

let sides = 6;
let dice = 2;
let rolls = 1;

const args = minimist(process.argv.slice(2));

if ("sides" in args) {
	sides = args.sides;
}
if ("dice" in args) {
	dice = args.dice;
}
if ("rolls" in args) {
	rolls = args.rolls;
}

let result = roll(sides, dice, rolls);
console.log(JSON.stringify(result));