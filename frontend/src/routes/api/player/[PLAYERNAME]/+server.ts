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

	// CONVERT THE PLAYER PREFIX AND SUFFIX TO HTML

	console.log(`Converting prefixes and suffixes...`);

	/** References LuckPerms information */
	const luckPerms = planData.extensions[1].extensionData[1];

	const prefixMM = convertToMiniMessage(JSON.parse(luckPerms.tabs[0].values[0].value));
	const suffixMM = convertToMiniMessage(JSON.parse(luckPerms.tabs[0].values[1].value));

	const prefixComponent = MiniMessage.miniMessage().deserialize(prefixMM);
	const suffixComponent = MiniMessage.miniMessage().deserialize(suffixMM);

	const prefix = MiniMessage.miniMessage().toHTML(prefixComponent);
	const suffix = MiniMessage.miniMessage().toHTML(suffixComponent);

	console.log(`Prefix: ${prefix}`);
	console.log(`Suffix: ${suffix}`);

	// FETCH PLAYER DATA FROM SERVER API (For purchase history)

	// COMBINE THE TWO

	// RETURN THE RESPONSE
	return json('');
}
