import path from 'path';
// import { terser } from 'rollup-plugin-terser';
import Resolve from 'rollup-plugin-node-resolve';
import Commonjs from 'rollup-plugin-commonjs';
import Babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: {
    file: path.resolve(__dirname, './lib', 'index.js'),
    format: 'cjs',
    name: 'output-js-name'
  },
  external: ['vue'],
  plugins: [
  	// terser()
    VuePlugin(),
    Babel(),
    Resolve(),
    Commonjs() 
  ]
};