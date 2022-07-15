module.exports = function check( str, bracketsConfig ) {
  let length = str.length;
  let templates = bracketsConfig.map( ( item ) => {
    if ( isNaN( +item[ 0 ] ) ) {
      return "\\" + item[ 0 ] + "\\" + item[ 1 ];
    } else {
      return item[ 0 ] + item[ 1 ];
    };
  } ).join( '|' );
  regex = new RegExp( `${templates}` );
  for ( let i = 0; i < length; i++ ) str = str.replace( regex, '' );
  return str.length > 0 ? false : true ;
}