// 2491. Divide Players Into Teams of Equal Skill

// You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

// The chemistry of a team is equal to the product of the skills of the players on that team.

// Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.

 

// Example 1:

// Input: skill = [3,2,5,1,3,4]
// Output: 22
// Explanation: 
// Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
// The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.
// Example 2:

// Input: skill = [3,4]
// Output: 12
// Explanation: 
// The two players form a team with a total skill of 7.
// The chemistry of the team is 3 * 4 = 12.
// Example 3:

// Input: skill = [1,1,2,3]
// Output: -1
// Explanation: 
// There is no way to divide the players into teams such that the total skill of each team is equal.
 

// Constraints:

// 2 <= skill.length <= 105
// skill.length is even.
// 1 <= skill[i] <= 1000

var dividePlayers = function(skill) {
    let map = new Map();

    let n = skill.length;
    let totalSum = 0;

    for(let i=0; i<n; i++) {
        totalSum += skill[i];
        map.set(skill[i], (map.get(skill[i]) || 0) + 1);
    }

    let countOfGroup = n/2;
    if(totalSum % countOfGroup !== 0) {
        return -1;
    }

    let eachGroupSum = totalSum/countOfGroup;
    let sumOfGroupsProduct = 0;
    for(let i=0; i<n; i++) {
        let complement = eachGroupSum - skill[i];
        if(!map.has(complement) || map.get(complement) <= 0) {
            return -1;
        }
        sumOfGroupsProduct += complement * skill[i];

        map.set(complement, map.get(complement) - 1);
    }

    return sumOfGroupsProduct/2;

};

//TC: O(N)
//SC: O(N)


// var dividePlayers = function(skill) {

    // skill.sort((a,b) => a-b);

    // let low = 0;
    // let high = skill.length - 1;
    // let eachGroupSum = skill[0] + skill[skill.length - 1];
    // let ans = 0

    // while(low < high) {
    //     if(skill[low] + skill[high] === eachGroupSum) {
    //         ans += skill[low] * skill[high];
    //     } else {
    //         return -1;
    //     }
    //     low++;
    //     high--;
    // }
    // return ans;    
// };

//TC: O(nlogn + n/2) ~ O(nlogn)
//SC: O(1)

const skill = [3,2,5,1,3,4];
// const skill = [3,4];
console.log(dividePlayers(skill));
