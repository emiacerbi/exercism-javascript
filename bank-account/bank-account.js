export class BankAccount {
  constructor() {
    this.accOpen = false
    this.accBalance = 0
  }

  open() {
    if(this.accOpen) throw new ValueError
    this.accOpen = true
  }
  
  close() {
    if(!this.accOpen) throw new ValueError
    this.accBalance = 0
    this.accOpen = false
  }

  deposit(amount) {
    if(!this.accOpen) throw new ValueError
    if(amount < 0) throw new ValueError
    this.accBalance += amount
  }
  
  withdraw(amount) {
    if(this.accBalance < amount || amount < 0) throw new ValueError
    this.accBalance -= amount
  }

  get balance() {
    if(!this.accOpen) throw new ValueError
    return this.accBalance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
