console.log('jika rows1 = 5');
var bintang = '*';

for(var rows1 = 1; rows1<=5; rows1++){
    console.log(bintang);
}

 console.log('jika rows2 = 5');
var bintang = ''
for(var i = 1; i<=5; i++){
    for(var j = 1; j<=5; j++) {
        bintang+='*'; 
        
    }
    console.log(bintang);
    bintang= ''
}

console.log('jika rows3 = 5');
var bintang = '';

for(var i = 1; i<=5; i++){
        for (var j = 1; j<=i; j++){
            bintang = bintang +'*';
                
        }        
        console.log(bintang);    
    bintang = '' ;  
    }

 
    console.log('jika rows3 = 5');
    var bintang = '';
    
    for(var i = 1; i<=5; i++){
            for (var j = 1; j<=i; j++){
                bintang = bintang +'*';
                    
            }        
            console.log(bintang);    
        bintang = '' ;  
        }