// getter和setter基础示例
const user = {
  _age: 0, // 约定俗成的私有属性标记

  get age() {
    return `${this._age} 岁`;
  },

  set age(value) {
    if (value < 0) throw new Error("年龄不能为负数");
    this._age = Number(value);
  }
};

user.age = 25;        // 调用setter
console.log(user.age); // 输出 "25 岁"

// 类中使用示例
class Circle {
  #radius; // ES2022私有字段

  constructor(r) {
    this.radius = r; // 调用setter
  }

  get radius() {
    return this.#radius.toFixed(2);
  }

  set radius(value) {
    if (value <= 0) throw new Error("半径必须大于0");
    this.#radius = Number(value);
  }

  get area() {
    return Math.PI * this.#radius ** 2;
  }
}

// 使用Object.defineProperty实现
function CreateProduct() {
  let _price = 0;

  Object.defineProperty(this, 'price', {
    get() {
      return `￥${_price}`;
    },
    set(v) {
      _price = v >= 0 ? v : _price;
    }
  });
}
