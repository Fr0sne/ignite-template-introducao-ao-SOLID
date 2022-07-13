"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var UsersRepository_1 = require("../../../modules/users/repositories/implementations/UsersRepository");
var ListAllUsersUseCase_1 = require("../../../modules/users/useCases/listAllUsers/ListAllUsersUseCase");
describe("ListAllUsersUseCase", function () {
    var usersRepository;
    var listAllUsersUseCase;
    var userId;
    beforeAll(function () {
        usersRepository = UsersRepository_1.UsersRepository.getInstance();
        listAllUsersUseCase = new ListAllUsersUseCase_1.ListAllUsersUseCase(usersRepository);
    });
    it("should be able to list all users", function () {
        var user1 = usersRepository.create({
            name: "Danilo Vieira",
            email: "danilo@rocketseat.com",
        });
        var user2 = usersRepository.create({
            name: "Vinicius Fraga",
            email: "vinifraga@rocketseat.com",
        });
        userId = user2.id;
        var user3 = usersRepository.create({
            name: "Joseph Oliveira",
            email: "dogim@rocketseat.com",
        });
        usersRepository.turnAdmin(user1);
        var users = listAllUsersUseCase.execute({ user_id: user1.id });
        expect(users).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: "Danilo Vieira",
                email: "danilo@rocketseat.com",
            }),
            user2,
            user3,
        ]));
    });
    it("should not be able to a non admin user get list of all users", function () {
        expect(function () {
            listAllUsersUseCase.execute({ user_id: userId });
        }).toThrow();
    });
    it("should not be able to a non existing user get list of all users", function () {
        expect(function () {
            listAllUsersUseCase.execute({ user_id: (0, uuid_1.v4)() });
        }).toThrow();
    });
});
