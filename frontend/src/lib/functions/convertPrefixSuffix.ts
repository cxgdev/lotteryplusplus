import { type PlanResponses } from './../types/PlanResponses';
import MiniMessage from 'minimessage-js';

/**
 * Converts the prefix and suffix from PLAN into HTML
 * @param response Response from PLAN
 * @returns 
 */
export default async function convertPrefixSuffix(response: PlanResponses.PlayerResponse) {
    console.log(`Converting Prefix and Suffix of player ${response.info.name} to HTML`);
	/** References LuckPerms information */
	const luckPerms = response.extensions[1].extensionData[1];

	const prefixMM = convertToMiniMessage(JSON.parse(luckPerms.tabs[0].values[0].value));
	const suffixMM = convertToMiniMessage(JSON.parse(luckPerms.tabs[0].values[1].value));

	const prefixComponent = MiniMessage.miniMessage().deserialize(prefixMM);
	const suffixComponent = MiniMessage.miniMessage().deserialize(suffixMM);

	const prefixFinal = MiniMessage.miniMessage().toHTML(prefixComponent);
	const suffixFinal = MiniMessage.miniMessage().toHTML(suffixComponent);

	return {
		prefix: prefixFinal,
		suffix: suffixFinal
	};
}

type MiniMessageJson = {
	text?: string;
	color?: string;
	bold?: boolean;
	italic?: boolean;
	underlined?: boolean;
	strikethrough?: boolean;
	obfuscated?: boolean;
	extra?: MiniMessageJson[];
};

function convertToMiniMessage(json: MiniMessageJson): string {

	console.log(`Converting JSON-formatted string to MiniMessage`);

	let message = '';

	// Open tags based on properties
	if (json.bold) {
		message += '<bold>';
	}
	if (json.italic) {
		message += '<italic>';
	}
	if (json.underlined) {
		message += '<underlined>';
	}
	if (json.strikethrough) {
		message += '<strikethrough>';
	}
	if (json.obfuscated) {
		message += '<obfuscated>';
	}
	if (json.color) {
		message += `<color:${json.color}>`;
	}

	// Add the main text if available
	if (json.text) {
		message += json.text;
	}

	// Handle extra formatting
	if (json.extra) {
		for (const extra of json.extra) {
			message += convertToMiniMessage(extra);
		}
	}

	// Close tags in reverse order
	if (json.color) {
		message += '</color>';
	}
	if (json.obfuscated) {
		message += '</obfuscated>';
	}
	if (json.strikethrough) {
		message += '</strikethrough>';
	}
	if (json.underlined) {
		message += '</underlined>';
	}
	if (json.italic) {
		message += '</italic>';
	}
	if (json.bold) {
		message += '</bold>';
	}

	return message;
}

