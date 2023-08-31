function generateKey(length, characters){
    let result = '';
    for(let i = 1; i <= length; i++){
        let index = Math.floor(Math.random() * (characters.length - 1));
        result += characters[index];
    }
    return result;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);