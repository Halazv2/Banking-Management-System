describe("getAccount", () => {
  describe("when the account exists", () => {
    it("should return the account", async () => {
      const account = {
        id: "123",
        name: "test",
        balance: 100,
      };
      const accountRepository = {
        getAccount: jest.fn().mockResolvedValue(account),
      };
      // const accountService = new ccountService(accountRepository);
      // const result = await accountService.getAccount("123");
      // expect(result).toEqual(account);
    });
  });
});
