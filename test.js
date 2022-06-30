console.log("Ejercicio 1")
function numDuplicados(string) {
    array = []
    con = 0

    for (let i in string) {
        if (!array.includes(string[i]) &&
            string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
            array.push(string[i])
            con++
        }
    }

    return con
}

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0 

console.log("Ejercicio 2")
function frecuencias(string) {
    str = string.toLowerCase()
    str = str.replace(/\s/g, "")

    obj = {}

    for (let i in str) {
        if (obj.hasOwnProperty(str[i]))
            obj[str[i]]++
        else
            obj[str[i]] = 1
    }

    return obj
}

console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }

console.log("Ejercicio 3")
function caracteresEnComun(str1, str2) {

    array1 = str1.split('')
    array2 = str2.split('')
    result = []

    result = array1.filter(element => array2.includes(element))

    return result
}

console.log(caracteresEnComun("Hola", "Mundo"));  // ["o"]
console.log(caracteresEnComun("German", "Gabriela"));  // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye"));  // []

console.log("Ejercicio 4")
function ajustarTexto(string, num) {
    str = string

    if (string.length < num) {
        for (let i = 0; i < (num - string.length); i++) {
            str += " "
        }
    }

    else
        str = string.substring(0, num)

    return str
}

console.log(`${ajustarTexto("", 3)}`) // " " 
console.log(`${ajustarTexto("hola", 2)}`) // "ho" 
console.log(`${ajustarTexto("Hola", 0)}`) // "" 
console.log(`${ajustarTexto("Hola", 5)}`) // "Hola "

console.log("Ejercicio LeetCode 1")
var isAnagram = function (s, t) {
    t_sort = t.split("").sort().join("")
    s_sort = s.split("").sort().join("")

    if (s_sort === t_sort)
        return true
    else
        return false
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "cat"))

console.log("Ejercicio LeetCode 2")
var moveZeroes = function (nums) {
    let aux
    let n = nums.length

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < (n - i); j++) {
            if (nums[j] === 0) {
                aux = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = aux
            }
        }
    }

    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([45192, 0, -659, -52359, -99225, -75991, 0, -15155, 27382, 59818, 0, -30645, -17025, 81209, 887, 64648]));

console.log("Ejercicio LeetCode 3")
var twoSum = function (nums, target) {

    array = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                array[0] = i
                array[1] = j
            }
        }
    }

    return array
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
