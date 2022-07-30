function checkIsPrime(number) {
  let isPrime = true

  if (number === 1) {
    isPrime = false
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false
        break
      }
    }

    return isPrime
  }
}

export class DiffieHellman {
  constructor(p, g) {
    if (!checkIsPrime(p)) throw new Error('Number must be a prime number!')
    if (!checkIsPrime(g)) throw new Error('Number must be a prime number!')

    this.base = g
    this.modulus = p
  }

  getPublicKey(privateKey) {
    if (!(privateKey > 1)) {
      throw new Error(`Private key must be greater than 1`)
    }
    if (!(privateKey < this.modulus)) {
      throw new Error(`Private key must be less than the modulus`)
    }
    return this.base ** privateKey % this.modulus
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.modulus
  }
}
