function Book(title, author, pages, isread) {
	if (!new.target) {
		throw new Error("Constructor Book requires 'new'");
	}//对象构建函数只是普通的函数,要避免误调用,需要这样的判断
	this.title = title;
	this.author = author;
	this.pages = pages;
  this.isread = isread;
  this.info=()=>{return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isread ? "read" : "not read yet"}`;}
}
// Book();
// TypeError: Constructor Book requires 'new'

console.log(typeof Book); // function
console.log(Book.prototype); // object
const book1=new Book("test","me",800,false);
console.log(book1.prototype); // undefined
Object.getPrototypeOf(book1) === Book.prototype; // true
book1.valueOf()
console.log(book1.info()); // test by me, 800 pages, not read yet