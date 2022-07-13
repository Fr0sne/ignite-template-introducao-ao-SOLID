"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersRepository_1 = require("../../../modules/users/repositories/implementations/UsersRepository");
var CreateUserUseCase_1 = require("../../../modules/users/useCases/createUser/CreateUserUseCase");
describe("CreateUserUseCase", function () {
    var createUserUseCase;
    var usersRepository;
    beforeAll(function () {
        usersRepository = UsersRepository_1.UsersRepository.getInstance();
        createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepository);
    });
    it("should be able to create new users", function () {
        var user = createUserUseCase.execute({
            name: "Danilo Vieira",
            email: "danilo@rocketseat.com",
        });
        expect(usersRepository.list()).toStrictEqual([user]);
    });
    it("should not be able to create new users when email is already taken", function () {
        expect(function () {
            createUserUseCase.execute({
                name: "Danilo Vieira",
                email: "danilo@rocketseat.com",
            });
        }).toThrow();
    });
});
