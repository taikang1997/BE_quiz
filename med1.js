// 給定兩個數字陣列，請寫一個函數返回它們的交集（即兩個陣列中都存在的數字）
// 返回的結果不包含重複的元素。
const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(intersect(arr1, arr2));
// 輸出: [2]

/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
function intersect(array1, array2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(num => set2.has(num));
}

