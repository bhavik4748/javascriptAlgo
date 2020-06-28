/*
207. Course Schedule

Share
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 1-->0

 */
var canFinish = function (numCourses, prerequisites) {

    const indegree = new Array(numCourses).fill(0);
    const queue = [];

    for (const [course, prereq] of prerequisites) {
        indegree[course] += 1;
    }

    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;

    while (queue.length !== 0) {
        const c = queue.pop();
        count += 1;
        for (const [course, prereq] of prerequisites) {
            if (prereq === c) {
                indegree[course] -= 1;
                if (indegree[course] === 0) {
                    queue.push(course);
                }
            }
        }
    }
    return count === numCourses;
};