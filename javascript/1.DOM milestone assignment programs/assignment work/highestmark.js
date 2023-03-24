let marks=[22,55,33,44,23];
let i=marks;
let highestmark;
highestmark=(i[0]>i[1]&&i[0]>i[2]&&i[0]>i[3]&&i[0]>i[4])?i[0]:(i[1]>i[2]&&i[1]>i[3]&&i[1]>i[4]?console.log(i[1]):(i[2]>i[3]&&i[2]>i[4]?console.log(i[2]):(i[3]>i[4]?console.log(i[3]):console.log(i[4]))));