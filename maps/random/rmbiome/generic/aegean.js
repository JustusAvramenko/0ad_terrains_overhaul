function setupBiome_aegean()
{
	[g_Gaia.tree1, g_Gaia.tree2] = pickRandom([[
			"gaia/tree/cypress_wild",
			"gaia/tree/pine_maritime_short"
		]]);

	g_Gaia.tree3 = pickRandom([
		"gaia/fruit/olive",
		"gaia/tree/juniper_prickly",
		"gaia/tree/date_palm"
	]);

	[g_Gaia.tree4, g_Gaia.tree5] = pickRandom([[
		"gaia/tree/poplar_lombardy",
		"gaia/tree/carob"
	]]);

	g_Gaia.fruitBush = pickRandom([
		"gaia/fruit/berry_01",
		"gaia/fruit/grapes"
	]);
}
