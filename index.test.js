const { exportAllDeclaration } = require("@babel/types");
const findBalance = require("./index");

describe("findBalance()", () => {
    const mockTransactions = [{
        id: 123,
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -30,
        category: 'eating_out',
        time: '2018-03-12T12:34:00Z'
      },
      {
        id: 124,
        sourceAccount: 'my_account',
        targetAccount: 'TESCO',
        amount: -20,
        category: 'groceries',
        time: '2018-03-12T12:45:00Z'
      },
      {
        id: 125,
        sourceAccount: 'work',
        targetAccount: 'my_account',
        amount: 1000,
        category: 'deposit',
        time: '2018-03-18T12:34:00Z'
      },
      {
        id: 126,
        sourceAccount: 'my_account',
        targetAccount: 'clothes_shop',
        amount: -170,
        category: 'clothes',
        time: '2018-03-27T12:34:00Z'
      },
      {
        id: 127,
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -45,
        category: 'eating_out',
        time: '2018-04-08T12:34:00Z'
      },
      {
        id: 128,
        sourceAccount: 'my_account',
        targetAccount: 'other_clothes_shop',
        amount: -155,
        category: 'clothes',
        time: '2018-04-10T12:34:00Z'
      },
      {
        id: 129,
        sourceAccount: 'my_account',
        targetAccount: 'ASDA',
        amount: -100,
        category: 'groceries',
        time: '2018-04-17T12:34:00Z'
      },
      {
        id: 130,
        sourceAccount: 'my_account',
        targetAccount: 'take_away',
        amount: -60,
        category: 'eating_out',
        time: '2018-05-10T12:34:00Z'
      },
      {
        id: 131,
        sourceAccount: 'moms_account',
        targetAccount: 'my_account',
        amount: 70,
        category: 'deposit',
        time: '2018-05-22T12:34:00Z'
      }
    ];

    it("returns 0 if there are no transactions", () => {
        expect(findBalance([], "groceries", new Date("2018-03-01"), new Date("2018-03-31"))).toEqual(0);
    });

    it("returns an accurate negative balance", () => {
        expect(findBalance(mockTransactions, "groceries", new Date("2018-03-12"), new Date("2018-05-22"))).toEqual(-120);
    });

    it("returns an accurage positive balance", () => {
        expect(findBalance(mockTransactions, "deposit", new Date("2018-03-12"), new Date("2018-05-22"))).toEqual(1070);
    });
}); 