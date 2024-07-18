// 給定兩個已經排序的數字陣列，請寫一個函數來合併這兩個陣列並保持排序。
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrays(arr1, arr2));
// 輸出: [1, 2, 3, 4, 5, 6, 8, 10]


/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
function mergeSortedArrays(array1, array2) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < array1.length && j < array2.length) {
        const a = array1[i];
        const b = array2[j];

        if (a < b) {
            result.push(a);
            i += 1;
        } else {
            result.push(b);
            j += 1;
        }
    }

    if (i < array1.length) {
        result.push(...array1.slice(i, array1.length))
    }
    if (j < array2.length) {
        result.push(...array2.slice(j, array2.length))
    }
    return result;
}

