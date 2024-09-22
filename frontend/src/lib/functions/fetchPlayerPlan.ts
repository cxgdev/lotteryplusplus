import type { PlanResponses } from '$lib/types/PlanResponses';
import { Caching } from './Caching';

/**
 * Fetch the player's data from PLAN
 *
 * Should be called client-side to mitigate rate-limiting issues
 * @param name Player's username (does not have to be case-sensitive)
 * @returns
 */
export default async function fetchPlayerPlan(name: string): Promise<PlanResponses.PlayerResponse> {
	console.log(`Fetching player ${name}`);
	let data = Caching.getCachedPlayer(name, true);
    console.log(data);
	if (!data) {
        console.log(`Couldn't find cached player... fetching new data`)
		await fetch(`http://mc.dougdougw.com:8804/v1/player?player=${name}`).then(async (response) => {
			if (response.status !== 200) {
				throw new Error(
					`Failed to fetch player ${name}, code ${response.status}: ${response.statusText}`
				);
			} else {
				data = await response.json();
                Caching.cachePlayer(data, true);
			}
		});
	}

    return data;
}
