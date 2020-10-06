

let sampleUsers = [
    { name: 'ABC', team: 'A' },
    { name: 'XYZ', team: 'A' },
    { name: 'Ma', team: 'B' },
    { name: 'Bro', team: 'B' },
    { name: 'Sis', team: 'C' },
    { name: 'Da', team: 'C' },
    { name: 'XXX', team: 'A' },
    { name: 'YYY', team: 'A' },
    { name: 'ZZZ', team: 'A' },
    { name: 'AAA', team: 'B' },
]

function pairPeopleFromDifferentTeam(users) {
    const len = users.length;
    let output = [];
    /*
      let m = new Map();

          for(let i=0; i < len;i++ ){
              if(m.has(users[i].team)){
                  let arr=m.get(users[i].team);
                  arr.push(users[i]);
              }else{
                  let arr=[];
                  arr.push(users[i]);
                  m.set(users[i].team, arr);
              }
          }
    */

    let ptr1 = 0, ptr2 = 1;
    let p = 0;
    while (ptr2 < users.length) {
        if (users[ptr1].team == users[ptr2].team) {
            ptr2++;
            p++;
        }

        else {
            let t2 = users.splice(ptr2, 1);
            let t1 = users.splice(ptr1, 1);
            let tArr = [];
            tArr.push(t1, t2);
            output.push(tArr);
            ptr2 = ptr2 - p;
            p = 0;
        }
    }
    return output;
}

console.log(pairPeopleFromDifferentTeam(sampleUsers));