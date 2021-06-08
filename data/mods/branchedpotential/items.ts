export const Items: {[k: string]: ModdedItemData} = {
	pitchasaurite: {
		name: "Pitchasaurite",
		spritenum: 586,
		megaStone: "Pitchasaur-Mega",
		megaEvolves: "Pitchasaur",
		itemUser: ["Pitchasaur"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1001,
		gen: 8,
		desc: "If held by a Pitchasaur, this item allows it to Mega Evolve in battle.",
	},
	blastonoisite: {
		name: "Blastonoisite",
		spritenum: 586,
		megaStone: "Blastonoise-Mega",
		megaEvolves: "Blastonoise",
		itemUser: ["Blastonoise"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1002,
		gen: 8,
		desc: "If held by a Blastonoise, this item allows it to Mega Evolve in battle.",
	},
	charodilitex: {
		name: "Charodilite X",
		spritenum: 586,
		megaStone: "Charodile-Mega-X",
		megaEvolves: "Charodile",
		itemUser: ["Charodile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1003,
		gen: 8,
		desc: "If held by a Charodile, this item allows it to Mega Evolve in battle.",
	},
	charodilitey: {
		name: "Charodilite Y",
		spritenum: 586,
		megaStone: "Charodile-Mega-Y",
		megaEvolves: "Charodile",
		itemUser: ["Charodile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1004,
		gen: 8,
		desc: "If held by a Charodile, this item allows it to Mega Evolve in battle.",
	},
	hornetoxite: {
		name: "Hornetoxite",
		spritenum: 586,
		megaStone: "Hornetox-Mega",
		megaEvolves: "Hornetox",
		itemUser: ["Hornetox"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1005,
		gen: 8,
		desc: "If held by a Hornetox, this item allows it to Mega Evolve in battle.",
	},
	banshigenite: {
		name: "Banshigenite",
		spritenum: 586,
		megaStone: "Banshigen-Mega",
		megaEvolves: "Banshigen",
		itemUser: ["Banshigen"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1006,
		gen: 8,
		desc: "If held by a Banshigen, this item allows it to Mega Evolve in battle.",
	},
};