function setupBiome_temperate()
{
	if (randBool())
	{
		g_Terrains.mainTerrain = "autumn_grass_04";
		g_Terrains.forestFloor1 = "autumn_forestfloor_01";
		g_Terrains.forestFloor2 = "autumn_forestfloor_02";
		g_Terrains.tier1Terrain = "autumn_grass_dirt_02";
		g_Terrains.tier2Terrain = "autumn_grass_03";
		g_Terrains.tier3Terrain = "autumn_grass_04";
		g_Terrains.tier4Terrain = "autumn_grass_01";
	}
	else
	{
		g_Terrains.mainTerrain = "autumn_grass_05";
		g_Terrains.forestFloor1 = "autumn_forestfloor_02_autumn";
		g_Terrains.forestFloor2 = "autumn_forestfloor_01_autumn";
		g_Terrains.tier1Terrain = "autumn_grass_dirt_01";
		g_Terrains.tier2Terrain = "autumn_grass_dirt_02";
		g_Terrains.tier3Terrain = "autumn_grass_mud_01";
		g_Terrains.tier4Terrain = "autumn_grass_02";
	}

	[g_Gaia.tree1, g_Gaia.tree2] = pickRandom([
		[
			"gaia/tree/oak_holly",
			"gaia/tree/oak_hungarian"
		],
		[
			"gaia/tree/oak_holly",
			"gaia/tree/maple"
		],
		[
			"gaia/tree/oak_hungarian",
			"gaia/tree/maple"
		]
	]);

	[g_Gaia.tree4, g_Gaia.tree5] = pickRandom([
		[
			"gaia/tree/pine",
			"gaia/tree/pine_maritime",
			"gaia/tree/pine_maritime",
			"gaia/tree/pine_maritime"
		],
		[
			"gaia/tree/maple",
			"gaia/tree/maple"
		],
		[
			"gaia/tree/oak_hungarian",
			"gaia/tree/oak_hungarian"
		]
	]);
}
