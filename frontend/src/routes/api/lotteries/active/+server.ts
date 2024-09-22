/*
    The /lotteries/active endpoint handles
    the lottery that is currently active.
*/

import config from '$lib/config.json';
import { json } from '@sveltejs/kit';

type Purchase = {
	shopID: number;
	purchaser: string;
	amount: number;
	timestamp: number;
};

export async function GET() {
	// fetch data from the Java API

    // Mock data until the Java API is running
	const response: Purchase[] = [
		{ shopID: 1, purchaser: 'Fubarian', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'SoloBoy123', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'CXG_', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'vortex2k3', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'cswertwertwert', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'MessyPrincy', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'Bonkatron', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'MelonWither', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'ashleySML', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'jbm11208', amount: 1, timestamp: 0 },
		{ shopID: 1, purchaser: 'Cameron7108', amount: 1, timestamp: 0 },

		{ shopID: 2, purchaser: 'Fubarian', amount: 1, timestamp: 12 },
		{ shopID: 2, purchaser: 'CXG_', amount: 1, timestamp: 11 },
        { shopID: 2, purchaser: 'CXG_', amount: 1, timestamp: 5 },
		{ shopID: 2, purchaser: 'vortex2k3', amount: 1, timestamp: 15 },
		{ shopID: 2, purchaser: 'cswertwertwert', amount: 1, timestamp: 27 },
		{ shopID: 2, purchaser: 'jbm11208', amount: 1, timestamp: 35 },
		{ shopID: 2, purchaser: 'Cameron7108', amount: 1, timestamp: 26 },
		{ shopID: 2, purchaser: 'RandomDude27', amount: 1, timestamp: 22 }
	];

	// Filter into a list of TICKET purchases
	const ticketPurchases = response.filter((p) => {
		return config.shops.tickets.includes(p.shopID);
	});

	// Filter into a list of REGISTRATION purchases
	const registrationPurchases = response.filter((p) => {
		return config.shops.registration.includes(p.shopID);
	});

	// Filters the tickets to only accept ones from people with a registration purchase under their belt
	const valid = ticketPurchases.filter((p) => {
		return registrationPurchases.some((rp) => rp.purchaser === p.purchaser);
	});

    // Fake lotto start and end data for now
    let lottoStart = 10;
    let lottoEnd = 30;

    // Filters the valid tickets to only include those in the current lotto period
    const currentLottoTickets = valid.filter((t) => {
        return t.timestamp >= lottoStart && t.timestamp <= lottoEnd;
    });

    console.log(currentLottoTickets);

    /** Array of players and their tickets */
	let players: {
		uuid: string;
		tickets: {
            shopID: number;
            amount: number;
            timestamp: number;
        }[];
	}[] = [];

	// Group valid tickets by purchaser
	currentLottoTickets.forEach((ticket) => {
        // Try to find if they've already bought a ticket and are in the players array
		let player = players.find((p) => p.uuid === ticket.purchaser);

		if (!player) {
			// If player doesn't exist, create a new one
			player = {
				uuid: ticket.purchaser,
				tickets: []
			};
			players.push(player);
		}

		// Add the ticket purchase to the player's tickets array
		player!.tickets.push({
			shopID: ticket.shopID,
			amount: ticket.amount,
			timestamp: ticket.timestamp
		});
	});

    // Sorts the players by most tickets on the top, least at the bottom
    const sorted = players.sort((a, b) => b.tickets.length - a.tickets.length);

	return json(sorted);
}
