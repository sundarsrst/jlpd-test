export default class ClientError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status

    Object.setPrototypeOf(this, ClientError.prototype)
  }
}
