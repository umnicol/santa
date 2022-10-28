

export enum BagType {
   Paper,
   Canvas
}

 export enum PresentType {
    Soft,
    Hard
  }

export class Present {
    name: string
    weight: number
    presentType: PresentType


    constructor ( name: string, weight: number, presentType: PresentType) {
    this.name = name
    this.weight = weight
    this.presentType = presentType
}
getWeight(): void {
console.log(this.weight)    
    }
getPresentType(): void {
console.log(this.presentType)
}
    }

export class Bag {
      maxWeight: number
      bagType: BagType
      presents: Present[]

    constructor (maxWeight: number, bagType: BagType) {
      this.maxWeight = maxWeight
      this.bagType = bagType
      this.presents = []
    }
    
  addPresent(present: Present) {
    this.presents.push(present)
 }

 totalWeight(weight:number) {
  return 
 }

 }

export class Santa {
  name: string
  age: number

 constructor (name: string, age: number) {
  this.name = name
  this.age = age
 }
 }

 export class Sled {
  santa: Santa
  bags: Bag[]

  constructor (santa: Santa) {
  this.santa = santa
  this.bags = []

  }

  //at this point I have no idea what to do

  addBag(bag: Bag) {
    this.bags.push(bag)
 }

  setSanta(santa: Santa)
{}
 }



