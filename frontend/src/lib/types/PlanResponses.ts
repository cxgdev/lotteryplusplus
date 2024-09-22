export namespace PlanResponses {
	/** Response type from Plan's /v1/player/?player=<player> */
	export type PlayerResponse = {
		/**
		 * Data on player's kills and deaths on/from mobs and players
		 */
		kill_data: {
			/*
            |   MOBS
            */

			// Mob kills

			/** Kills on mobs in the past 7 days */
			mob_kills_7d: number;
			/** Kills on mobs in the past 30 days */
			mob_kills_30d: number;
			/** Total kills on mobs */
			mob_kills_total: number;

			// Mob deaths

			/** Deaths to mobs in the last 7 days */
			mob_deaths_7d: number;
			/** Deaths to mobs in the last 30 days */
			mob_deaths_30d: number;
			/** Total deaths to mobs */
			mob_deaths_total: number;

			// Mob K/D ratio

			/** K/D ratio on mobs in the past 7 days */
			mob_kdr_7d: string;
			/** K/D ratio on mobs in the past 30 days */
			mob_kdr_30d: string;
			/** All-time K/D ratio on mobs */
			mob_kdr_total: string;

			/*
            |   PLAYERS
            */

			// Player kills

			/** Kills on players in the past 7 days */
			player_kills_7d: number;
			/** Kills on players in the past 30 days */
			player_kills_30d: number;
			/** Total kills on players */
			player_kills_total: number;

			// Player deaths (deaths by player)

			/** Deaths by players in the past 7 days */
			player_deaths_7d: number;
			/** Deaths by players in the past 30 days */
			player_deaths_30d: number;
			/** Total deaths by players */
			player_deaths_total: number;

			// K/D ratio against players

			/** K/D ratio against players in the past 7 days */
			player_kdr_7d: string;
			/** K/D ratio against players in the past 30 days */
			player_kdr_30d: string;
			/** All-time K/D ratio against players */
			player_kdr_total: string;

			// Player deaths (by any means)

			/** Deaths by any means in the past 7 days */
			deaths_7d: number;
			/** Deaths by any means in the past 30 days */
			deaths_30d: number;
			/** Total deaths by any means */
			deaths_total: number;

			// Weapon usage

			/** Most deadly weapon */
			weapon_1st: string;
			/** Second-most deadly weapon  */
			weapon_2nd: string;
			/** Third-most deadly weapon */
			weapon_3rd: string;
		};

		/** **NOT IMPLEMENTED** */
		sessions: {}[];

		/** **NOT IMPLEMENTED** */
		calendar_series: {}[];

		/**
		 * Array of all the player's deaths via. another player
		 */
		player_deaths: {
			/** Formatted date string when the death occurred */
			date: string;
			/** Weapon the killer used */
			weapon: string;

			/** UUID of the server where the death occurred */
			serverUUID: string;
			/** Name of the server where the death occurred */
			serverName: string;

			/** Couldn't tell you */
			timeSinceRegisterMillis: number;
			/** Again, couldn't tell you */
			timeSinceRegisterFormatted: string;

			/** Name of the victim */
			victim: string;
			/** UUID of the victim */
			victimUUID: string;
			/** Name of the victim (again) */
			victimName: string;

			/** Name of the killer */
			killer: string;
			/** UUID of the killer */
			killerUUID: string;
			/** Name of the killer (again) */
			killerName: string;
		}[];

		/** **NOT IMPLEMENTED** */
		gm_series: {}[];

		/** **NOT IMPLEMENTED** */
		world_pie_colors: {}[];

		/** **NOT IMPLEMENTED** */
		server_pie_colors: {}[];

		/** **NOT IMPLEMENTED** */
		ping_graph: {}[];

		/** Information on extensions */
		extensions: {
			/** The player UUID... again... for some reason... */
			playerUUID: string;
			/** UUID of the server you want to get extensions for */
			serverUUID: string;
			/** Name of the server you want to get extensions for */
			serverName: string;
			/** The juicy extension data */
			extensionData: {
				extensionInformation: {
					/** Name of the plugin that handles this extension */
					pluginName: string;

					/** Icon that IDGAF about */
					icon: {
						family: string;
						familyClass: string;
						color: string;
						colorClass: string;
						iconName: string;
					};
				};

				/** The tabs the plugin provides for us to use */
				tabs: {
					tabInformation: {
						tabName: string;
						/** Icon that IDGAF about */
						icon: {
							family: string;
							familyClass: string;
							color: string;
							colorClass: string;
							iconName: string;
						};
						/** Other crap IDGAF about */
						elementOrder: string[];
						/** Priority of the tab when displayed on Plan, DGAF */
						tabPriority: number;
					};
					values: {
						description: {
							name: string;
							text: string;
							description: string;
							icon: {
								family: string;
								familyClass: string;
								color: string;
								colorClass: string;
								iconName: string;
							};
							priority: number;
						};
						type: string;
						value: string;
					}[];
					tableData: {
						tableName: string;
						table: {
							columns: string[];
							icons: {
								family: string;
								familyClass: string;
								color: string;
								colorClass: string;
								iconName: string;
							}[];
							rows: any[];
						}[];
						tableColor: string;
						tableColorClass: string;
						wide: boolean;
					}[];
				}[];

				/** Something to do with displaying the information on Plan, but we don't care */
				onlyGenericTab: boolean;
				/** Something to do with displaying the information on Plan, but we don't care */
				wide: boolean;
			}[];
		}[];

		info: {
			name: string;
			uuid: string;
			operator: boolean;
			online: boolean;
		}
	};
}
