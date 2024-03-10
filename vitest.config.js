import path from 'path';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => ({
	plugins: [svelte()],
	resolve: {
		conditions: mode === 'test' ? ['browser'] : [],
		alias: {
			$lib: path.resolve(__dirname, './src/lib')
		}
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.js']
	}
}));
