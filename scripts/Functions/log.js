//log.js: Functional Logic.

define([], function() {
  return function( Input, Boolean ) {
    if ( Boolean === undefined ) {
      Boolean = true;
    }
    
    
    if ( Boolean === true ) {
      console.log( Input ); 
    }
  };
});
