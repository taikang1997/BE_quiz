// 給定一個只包含 '(', ')', '{', '}', '[', ']' 的字串
// 請寫一個函數判斷這些括號是否有效。
const s1 = "()[]{}"; // 全部成對，有效
const s2 = "([]){()}"; // 括號內可以包含成對的括號
const s3 = "([)]{}"; // 不成對的括號
console.log(isValid(s1)); // true
console.log(isValid(s2)); // true
console.log(isValid(s3)); // false

/**
 * @param {string} string
 * @return {boolean}
 */
function isValid(string) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (const s of string) {
        const key = map[s];
        if (key) {
            stack.push(key);
        } else if (stack.pop() !== s) {
            return false;
        }
    }

    return stack.length === 0;
}
