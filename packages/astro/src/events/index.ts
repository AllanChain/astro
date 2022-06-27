import { AstroTelemetry } from '@astrojs/telemetry';
import { ASTRO_VERSION } from '../core/util.js';

function getViteVersion() {
	try {
		const { version } = require('vite/package.json');
		return version;
	} catch (e) {}
	return undefined;
}

export const telemetry = new AstroTelemetry({ astroVersion: ASTRO_VERSION, viteVersion: getViteVersion()  });

export * from './error.js';
export * from './session.js';

