var gobble = require( 'gobble' );

module.exports = gobble([
  gobble( 'src/styles' ).transform( 'sass', {
    src: 'main.sass',
    dest: 'css/main.css'
  }),
  gobble( 'src/scripts' ).transform( 'babel')
  // gobble( 'src/scripts' ).transform( 'babel', {
  //   dest: 'js/main.js'
  // })
]);
