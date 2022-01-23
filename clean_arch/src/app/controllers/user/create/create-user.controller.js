class CreateUserController {
  constructor(userService) {
    this.userService = userService;
  }

  /**
   * Execute
   * @param {*} req
   * @param {*} resp
   * @returns
   */
  async execute(req, resp) {
    const { body } = req;
    const { name, email, password } = body;
    const user = await this.userService.create({ name, email, password });
    return resp.status(201).send(user);
  }
}

export { CreateUserController };
