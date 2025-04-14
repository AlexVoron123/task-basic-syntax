export function romanToInteger(str) {
    let result = 0;
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < str.length; i++) {
        const current = romanNumerals[str[i]];
        const next = romanNumerals[str[i + 1]];

        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;

    return result;
}
