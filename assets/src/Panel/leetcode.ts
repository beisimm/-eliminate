function countGoodSubstrings(s: string): number {
    let a = 0
    for (let i = 0; i < s.length - 3; i++) {
        let s1 = s.slice(i, i + 3);
       if(new Set(s1.split("")).size == 3)   a++
    }
    return a
};
