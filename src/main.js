class Desserts {
  constructor (type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

class IceCream extends Desserts {
  constructor (type, calories, flavor, scoops) {

  super(type, calories);
  this.flavor = flavor;
  this.scopps = scoops;
  }
}
