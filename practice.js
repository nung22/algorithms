/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let dict1 = new Map(), dict2 = new Map();
    for(let i = 0; i<s.length; i++) {
        if(!dict1.has(s[i])){
            dict1.set(s[i], 1);
        } else {
            dict1.set(s[i], dict1.get(s[i]) + 1);
        }
        if(!dict2.has(t[i])){
            dict2.set(t[i], 1);
        } else {
            dict2.set(t[i], dict2.get(t[i]) + 1);
        }
        console.log(dict1.get(s[i]));
        console.log(dict2.get(t[i]));
        if(dict1.get(s[i]) !== dict2.get(t[i]) || ) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic("bbbaaaba","aaabbbba"));