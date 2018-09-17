import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    commonjs()
  ]
}
