// Find the cheapest phone from the given object


const myObject = [
    {name: 'Iphone', price: 120000, camera: '120px' },
    {name: 'Samsung', price: 80000, camera: '12px' },
    {name: 'HTC', price: 12000, camera: '20px' },
    {name: 'Xiaomi', price: 14000, camera: '10px' },
    {name: 'Tecno', price: 18000, camera: '1px' }




]


function myFunction(myObject) {
    
    let min = myObject[0];

    for(let num of myObject) {
        if(num.price < min.price) {

            min = num;
        }


    }
    return min;

}


const objCall = myFunction(myObject);

console.log(objCall);