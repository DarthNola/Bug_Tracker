 console.clear()
 let start = 2;
let end =30;

let number=2 ;
let remainder;
 


// function Prime(input) {
//     for (let i = 2; i <= input; i++) {
//         remainder = input % i ;
//         if(remainder === 0 )
//         {
//             if (input%3 ===0 || !(input===i)) {
//                 output = input + " Is not a prime"
//             }
//             else{
//                 output =input + " Is  a prime"
//             }
            

//             return output
//         }
       
//     }

    
function Prime(input) {
    for (let i = 2; i <= input; i++) {
        remainder = input % i ;
        if(remainder&1 === 0 && input%input )
        {
            if (input%3 ===0 || !(input===i)) {
                output = input + " Is not a prime"
            }
            else{
                output =input + " Is  a prime"
            }
            

            return output
        }
       
    }
}
    
        
        

for (let index = start; index <= end; index++) {
   
    console.log(  Prime(index));
}

while (number <= end)
{
    
    console.log( Prime(number));
    number++
}
 

