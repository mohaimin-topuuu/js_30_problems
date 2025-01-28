const myArr = [1, 2, 2, 3, 4, 5, 5];

const uniqueArr = [];

for(const item of myArr) {
    if(!uniqueArr.includes(item)) {
        uniqueArr.push(item);
    }
}

console.log(uniqueArr);