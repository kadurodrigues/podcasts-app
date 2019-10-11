"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send("Hello Server");
});
app.listen(config_1.default.port, () => console.log(`Server running on port ${config_1.default.port}`));
//# sourceMappingURL=index.js.map