import convertToMiniMessage from '$lib/functions/convertToMiniMessage';
import { type PlanResponses } from './../../../../lib/types/PlanResponses';
import { error, json } from '@sveltejs/kit';
import MiniMessage from 'minimessage-js';

/*
    /api/player Endpoint
    This endpoint retrieves a player's recent
    purchase and prefix/suffix information
*/
export async function GET({ params }) {
	/** Player's name from the parameters */
	const playerName = params.PLAYERNAME;

	console.log(`Fetching player ${playerName}...`);

	// FETCH PLAYER DATA FROM PLAN (LuckPerms, Balance, and Online Status)
	const planData: PlanResponses.PlayerResponse = await fetch(
		`http://mc.dougdougw.com:8804/v1/player?player=${playerName}`
	)
		.then((response: Response) => {
			if (response.ok) {
				return response.json();
			}

			throw new Error(JSON.stringify({ message: response.statusText, status: response.status }));
		})
		.catch((err) => {
			try {
				// Parse the error message
				const parsed = JSON.parse(err);

				// Responds with an error
				error(parsed.status, parsed.message);
			} catch (err) {
				error(404);
			}
		});

	console.log(planData);

	// CONVERT THE PLAYER PREFIX AND SUFFIX TO HTML

	console.log(`Converting prefixes and suffixes...`);

	// FETCH PLAYER DATA FROM SERVER API (For purchase history)

	// COMBINE THE TWO

	// RETURN THE RESPONSE
	return json({
		name: planData.info.name,
		uuid: planData.info.uuid,
		online: planData.info.online,
		operator: planData.info.operator,
		prefix,
		suffix
	});
}
