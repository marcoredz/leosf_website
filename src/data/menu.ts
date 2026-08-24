export interface MenuItem {
	name: string;
	price: string;
	promotion?: string;
}

export const foodMenu: MenuItem[] = [
	{ name: "Panzerotti", price: "€ 7" },
	{ name: "Panino salamella", price: "€ 5" },
	{ name: "Panino wurstel", price: "€ 5" },
	{ name: "Patatine fritte", price: "€ 4" },
	{ name: "Hamburger vegano + insalata + pomodoro", price: "€ 5" },
	{ name: "Porchetta", price: "€ 5" },
	{ name: "Tomino", price: "€ 3,50" },
	{ name: "Cipolle e fagioli", price: "€ 3" },
	{ name: "Empanadas di carne o verdura", price: "€ 6", promotion: "2 x = € 10" },
	{ name: "Pulled pork con patate", price: "€ 10" },
	{ name: "Straccetti di carne argentina con patate", price: "€ 12" },
	{ name: "Churros con dulce de leche", price: "€ 5" },
	{ name: "Churros", price: "€ 4" },
];

export const drinkMenu: MenuItem[] = [
	{ name: "Birra rossa / chiara", price: "€ 5" },
	{ name: "Coca normale / zero", price: "€ 4" },
	{ name: "Tè pesca / limone", price: "€ 4" },
	{ name: "Acqua", price: "€ 1" },
	{ name: "Sangria · bicchiere", price: "€ 4" },
	{ name: "Crema al caffè · bicchiere", price: "€ 2,50" },
	{ name: "Cocktail", price: "€ 8" },
];

export const wineMenu = {
	name: "Vino alla spina",
	options: [
		{ name: "1 litro", price: "€ 8", note: "+ € 2 cauzione caraffa" },
		{ name: "1 bicchiere", price: "€ 2" },
	],
};
