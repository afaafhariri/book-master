"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("Database connected");
    const PORT = process.env.PORT || 5555;
    app.listen(PORT, () => {
        console.log(`App is listening on ${process.env.PORT}`);
    });
})
    .catch((e) => {
    console.error("Failed to connect to database", e);
});
app.use("/books", bookRoutes_1.default);
