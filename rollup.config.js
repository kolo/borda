import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    babel(),
    resolve(),
    commonjs()
  ]
}
