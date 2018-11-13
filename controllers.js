let Roll = () => {
    return Math.floor(Math.random() * (5 + 1));
}

// Bonus probability 25%
let Bonus = () => {
    let bonusProbability = Math.random() < 0.25 ? true: false;
    return bonusProbability;
}

// push Roll output into slotArray
let Result = () => {
    return {
        slotArray : [Roll(),Roll(),Roll()],
        bonus : Bonus()
    };
}

exports.Result = Result;
