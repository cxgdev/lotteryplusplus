export namespace Caching {
	// Save to localStorage or cookies
	export function cachePlayer(player: any, useLocalStorage = true) {
        console.log(player);
		const key = `player_${player.info.name}`;

		if (useLocalStorage && typeof localStorage !== 'undefined') {
			try {
				localStorage.setItem(key, JSON.stringify(player));
			} catch (e) {
				console.error('Failed to save to localStorage', e);
			}
		} else {
			const expires = new Date();
			expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days expiration
			document.cookie = `${key}=${encodeURIComponent(JSON.stringify(player))};expires=${expires.toUTCString()};path=/`;
		}
	}

	// Retrieve from localStorage or cookies
	export function getCachedPlayer(playerName: string, useLocalStorage = true): any | null {
		const key = `player_${playerName}`;

		if (useLocalStorage && typeof localStorage !== 'undefined') {
			try {
				const value = localStorage.getItem(key);
				return value ? JSON.parse(value) : null;
			} catch (e) {
				console.error('Failed to retrieve from localStorage', e);
				return null;
			}
		} else {
			const nameEQ = `${key}=`;
			const cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				let cookie = cookies[i].trim();
				if (cookie.indexOf(nameEQ) === 0) {
					return JSON.parse(decodeURIComponent(cookie.substring(nameEQ.length)));
				}
			}
			return null;
		}
	}

	// Clear cached player data
	export function clearCachedPlayer(playerName: string, useLocalStorage = true) {
		const key = `player_${playerName}`;

		if (useLocalStorage && typeof localStorage !== 'undefined') {
			localStorage.removeItem(key);
		} else {
			document.cookie = `${key}=; Max-Age=-99999999;`; // Expire cookie immediately
		}
	}
}
