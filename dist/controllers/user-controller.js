"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = __importDefault(require("../services/user-service"));
var http_status_1 = __importDefault(require("http-status"));
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_service_1.default.getUsers()];
                case 1:
                    user = _a.sent();
                    res.status(http_status_1.default.OK).send(user);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, user, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, user_service_1.default.getUsersById(id)];
                case 1:
                    user = _a.sent();
                    if (user) {
                        res.status(http_status_1.default.OK).send(user);
                    }
                    else {
                        res.status(http_status_1.default.NOT_FOUND).send({ message: "User not found" });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userData, user, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userData = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, user_service_1.default.createUser(userData)
                        //console.log(user);
                    ];
                case 2:
                    user = _a.sent();
                    //console.log(user);
                    res.status(http_status_1.default.CREATED).send(user);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    if (error_3.message === "Registration failed") {
                        res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send({ message: "Registration failed" });
                    }
                    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, updateUser_1, user, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    updateUser_1 = req.body;
                    return [4 /*yield*/, user_service_1.default.updateUser(id, updateUser_1)];
                case 1:
                    user = _a.sent();
                    if (user) {
                        res.status(http_status_1.default.OK).send(user);
                    }
                    else {
                        res.status(http_status_1.default.NOT_FOUND).send({ message: "User not found" });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, user, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, user_service_1.default.deleteUser(id)];
                case 1:
                    user = _a.sent();
                    if (user) {
                        res.status(http_status_1.default.OK).send(user);
                    }
                    else {
                        res.status(http_status_1.default.NOT_FOUND).send({ message: "User not found" });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var userController = {
    getUser: getUser,
    getUserById: getUserById,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
};
exports.default = userController;
