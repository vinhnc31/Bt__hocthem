// câu 1
const findSecondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // duyệt qua các phân tử của mảng bắt đầu từ vị trí số 2 của mảng
    // nếu như  phần tử hiện tại > largest thì ta cập nhật largest và secondLargest
    // secondLargest sẽ nhận lại giá trị cũ của largest
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      // nếu như phần tử < largest nhưng > secondLagest hoặc  !== largest thì trả về giá trị secondLargest hiện tại
      secondLargest = arr[i];
    }
  }
  // trả về giá trị của secondLagest
  return secondLargest;
};

const arr = [3, 5, 2, 8, 20, 1, 9];

console.log(findSecondLargest(arr));

// cau2
const find_Counts = (arr) => {
  // khai bao bien dem
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    //neu nhu trong mang khong truyen vao du lieu tuc laf undifined thi bien dem cua ham se tra ve
    //gia tri cua counts la 1 neu khong thi biem se tiep tuc dem
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
    }
  }
  let maxcound = 0;
  let maxitem = null;

  for (const item in counts) {
    if (counts[item] > maxcound) {
      maxcound = counts[item];
      maxitem = item;
    }
  }
  return parseInt(maxitem);
};

const myarr = [3, 5, 2, 8, 1, 9, 3, 3, 5, 5, 5];
console.log(find_Counts(myarr));


// cau 3 
function Person(firstName,lastName,age,gender,interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

let person = new Person('cong','vinh',20,'nam',['doc sach', ' xem phim', 'du lich']);

Person.prototype.greeting = function(name){
console.log('Hello '+ name + ' My name is ' + this.lastName);
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.gender)
console.log(person.interests)
person.greeting('bin')
console.log('firstName' in person)