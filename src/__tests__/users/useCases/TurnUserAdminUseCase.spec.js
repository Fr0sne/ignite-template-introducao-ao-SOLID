"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var UsersRepository_1 = require("../../../modules/users/repositories/implementations/UsersRepository");
var TurnUserAdminUseCase_1 = require("../../../modules/users/useCases/turnUserAdmin/TurnUserAdminUseCase");
describe("TurnUserAdminUseCase", function () {
    var usersRepository;
    var turnUserAdminUseCase;
    beforeAll(function () {
        usersRepository = UsersRepository_1.UsersRepository.getInstance();
        turnUserAdminUseCase = new TurnUserAdminUseCase_1.TurnUserAdminUseCase(usersRepository);
    });
    it("should be able to turn an user as admin", function () {
        var user = usersRepository.create({
            name: "Joseph Oliveira",
            email: "dogim@rocketseat.com",
        });
        var updatedUser = turnUserAdminUseCase.execute({ user_id: user.id });
        expect(updatedUser.admin).toBe(true);
        expect(usersRepository.list()).toStrictEqual(expect.arrayContaining([updatedUser]));
    });
    it("should not be able to turn a non existing user as admin", function () {
        expect(function () {
            turnUserAdminUseCase.execute({ user_id: (0, uuid_1.v4)() });
        }).toThrow();
    });
});
