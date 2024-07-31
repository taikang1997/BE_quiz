// 題目描述：sssss，請寫一個函數來移除陣列中的重複元素，返回一個新的陣列。
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // 輸出: [1, 2, 3, 4, 5]

/**
 * @param {number[]} array
 * @return {number[]}
 */
function removeDuplicates(array) {
    return Array.from(new Set(array));
}
// 77777
