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

export default function convertToMiniMessage(json: MiniMessageJson): string {
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
