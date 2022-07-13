"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var UsersRepository_1 = require("../../../modules/users/repositories/implementations/UsersRepository");
var ShowUserProfileUseCase_1 = require("../../../modules/users/useCases/showUserProfile/ShowUserProfileUseCase");
describe("ShowUserProfileUseCase", function () {
    var usersRepository;
    var showUserProfileUseCase;
    beforeAll(function () {
        usersRepository = UsersRepository_1.UsersRepository.getInstance();
        showUserProfileUseCase = new ShowUserProfileUseCase_1.ShowUserProfileUseCase(usersRepository);
    });
    it("should be able to get user profile by ID", function () {
        var user = usersRepository.create({
            name: "Danilo Vieira",
            email: "danilo@rocketseat.com",
        });
        var findUser = showUserProfileUseCase.execute({ user_id: user.id });
        expect(findUser).toMatchObject(user);
    });
    it("should not be able to show profile of a non existing user", function () {
        expect(function () {
            showUserProfileUseCase.execute({ user_id: (0, uuid_1.v4)() });
        }).toThrow();
    });
});
