nums = [1, 2, 3, 4, 5, 6];

function targetNumber(target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            console.log(`Targets position is ${nums.indexOf(target)}`);
        }
        else {
            console.log(`Target is -1`);
        }
    }
}
console.log(nums)
targetNumber(5)
targetNumber(7)
