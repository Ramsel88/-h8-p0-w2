console.log('soal nomor 1');
var counter = 2 ;
var limit = 20 ;
var counterb = 20;
var limitb = 2;


console.log('LOOPING PERTAMA');
while(counter<=limit){
    console.log(counter + ' - ' + 'I LOVE CODING');
    counter +=2;
 }

 console.log('LOOPING KEDUA');
 while(counterb>=limitb){
    console.log(counterb + ' - ' + 'I will become fullstack developer');
    counterb-=2;
} 

console.log('soal nomor 2');

console.log('LOOPING PERTAMA');
for(var counter = 1; counter<=20; counter++){
   console.log(counter + ' - ' + 'I LOVE CODING');
}

 console.log('LOOPING KEDUA');
 for(var counterb = 20 ; counterb>=1; counterb--){
 console.log(counterb + ' - ' + 'I will become fullstack developer');
} 

console.log('soal nomor 3');
console.log('Soal Ganjil Genap')
  for (var counter = 1; counter<=100; counter++){
      if(counter%2===0){console.log(counter+' - GENAP')}
      else {console.log(counter +' - GANJIL')}
 
 }

 console.log('counter 2 kelipatan 3')
  for (var counter = 1; counter<=100; counter+=2){
      if(counter%3===0){console.log(counter + " adalah kelipatan 3")}
       else {console.log('')}
  }

 console.log('counter 5 kelipatan 6')
 for (var counter = 1; counter<=100; counter+=5){
     if(counter%6===0){console.log(counter + " adalah kelipatan 6")}
      else {console.log('')}
 }
  

 console.log('counter 9 kelipatan 10')
  for (var counter = 1; counter<=100; counter+=9){
       if(counter%10===0){console.log(counter + " adalah kelipatan 10")}
        else {console.log('')}

   }