import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './src/index.js',
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
      sourceMap: true
    }),
  ]
};
