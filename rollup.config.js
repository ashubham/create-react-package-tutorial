import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';
import * as react from 'react';
import pkg from './package.json';

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
    postcss(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
      sourceMap: true
    }),
    image(),
    visualizer()
  ]
};
