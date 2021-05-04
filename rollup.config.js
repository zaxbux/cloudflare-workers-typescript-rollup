import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/worker/index.js',
		format: 'es',
		exports: 'named',
		sourcemap: true,
	},
	plugins: [typescript()],
};