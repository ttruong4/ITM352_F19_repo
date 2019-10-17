attributes  =  'Terrance',24,24.5>-23.5 
theSeparator = ';';

parts = ['Terrance',24,24.5>-23.5] ;
parts = attributes.split('theSeparator');
for(i=0; i < parts.length; i++) {
    console.log(typeof parts[i]);

}


console.log(parts.join(theSeparator));


function isNonNegInt(q) {
    console.log('hey!');
}

isNonNegInt();