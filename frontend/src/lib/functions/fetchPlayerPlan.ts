import type { PlanResponses } from "$lib/types/PlanResponses";

/**
 * Fetch the player's data from PLAN
 * 
 * Should be called client-side to mitigate rate-limiting issues
 * @param name Player's username (does not have to be case-sensitive)
 * @returns 
 */
export default async function fetchPlayerPlan(name: string): Promise<PlanResponses.PlayerResponse> {
    console.log(`Fetching player ${name}`);
    return await fetch(`http://mc.dougdougw.com:8804/v1/player?player=${name}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Failed to fetch player ${name}, code ${response.status}: ${response.statusText}`);
            } else {
                return response.json();
            }
        });
}