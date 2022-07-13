"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var User_1 = require("../../../modules/users/model/User");
describe("User model", function () {
    it("should be able to create an user with all props", function () {
        var user = new User_1.User();
        Object.assign(user, {
            name: "Atlas",
            email: "atlas@fromspace.com",
            created_at: new Date(),
            updated_at: new Date(),
        });
        expect(user).toMatchObject({
            name: "Atlas",
            email: "atlas@fromspace.com",
            admin: false,
        });
        expect((0, uuid_1.validate)(user.id)).toBe(true);
        expect(user.created_at).toBeInstanceOf(Date);
        expect(user.updated_at).toBeInstanceOf(Date);
    });
});
