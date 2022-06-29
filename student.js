var campus = {
  name: 'amrit science campus',
  imageUrl:
    'https://lh5.googleusercontent.com/p/AF1QipPsK2pL8Ib0aJufW6BPSsPNjhmVXtiUdCKJe3zd=w431-h160-k-no',
  courses: ['master', 'bachelor'],
  classes: [
    {
      name: 'Csit',
      students: [
        {
          name: 'dev',
          imageUrl:
            'https://lh5.googleusercontent.com/p/AF1QipPsK2pL8Ib0aJufW6BPSsPNjhmVXtiUdCKJe3zd=w431-h160-k-no',
          age: 24,
          sec: 'a',
          address: 'rasuwa',
          roll: 12,
        },
        {
          name: 'nabin',
          imageUrl:
            'https://lh5.googleusercontent.com/p/AF1QipPsK2pL8Ib0aJufW6BPSsPNjhmVXtiUdCKJe3zd=w431-h160-k-no',
          age: 25,
          sec: 'b',
          address: 'suwa',
          roll: 122,
        },
        {
          name: 'aawaj',
          imageUrl:
            ' https://lh5.googleusercontent.com/p/AF1QipPsK2pL8Ib0aJufW6BPSsPNjhmVXtiUdCKJe3zd=w431-h160-k-no',
          age: 27,
          sec: 'b',
          address: 'uwa',
          roll: 132,
        },
        {
          name: 'pravin',
          imageUrl:
            'https://lh5.googleusercontent.com/p/AF1QipPsK2pL8Ib0aJufW6BPSsPNjhmVXtiUdCKJe3zd=w431-h160-k-no',
          age: 28,
          sec: 'a',
          address: 'ras',
          roll: 142,
        },
        {
          name: 'sid',
          imageUrl:
            'https://lh5.googleusercontent.com/p/AF1QipPsK2pL8Ib0aJufW6BPSsPNjhmVXtiUdCKJe3zd=w431-h160-k-no',
          age: 29,
          sec: 'b',
          address: 'rasuw',
          roll: 14,
        },
      ],
    },
    {
      name: 'math',
      students: [
        {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
        {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
        {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
        {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
        {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
      ],
    },
    {
      name: 'physics',
      students: [
        {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
        {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
        {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
        {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
        {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
      ],
    },
    {
      name: 'chemestry',
      students: [
        {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
        {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
        {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
        {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
        {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
      ],
    },
    {
      name: 'english',
      students: [
        {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
        {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
        {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
        {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
        {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
      ],
    },
  ],
};

document.getElementById('image').src = campus.imageUrl;
document.getElementById('campus').innerHTML = campus.name;
document.getElementById('course').innerHTML = campus.courses;
campus.classes.forEach(faculty);
function faculty(item) {
  var faculty = document.getElementById('faculty');

  faculty.innerHTML += `<ul>` + item.name + `</ul>`;

  item.students.forEach(student);
  function student(items) {
    document.getElementById('imag').src = items.imageUrl;
    console.log(items.imageUrl);

    faculty.innerHTML +=
      `<li class="name">` +
      `<img src=${items.imageUrl} alt="jjj"/>` +
      `<div>` +
      `<div>` +
      'name:' +
      items.name +
      `</div>` +
      `<div>` +
      'age:' +
      items.age +
      `</div>` +
      `<div>` +
      'roll:' +
      items.roll +
      `</div>` +
      `<div>` +
      'address:' +
      items.address +
      `</div>` +
      `</div>` +
      `</li>`;
  }

  console.log(item.students);
}
