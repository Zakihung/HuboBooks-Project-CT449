const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        img_url: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        author: {
            type: String,
            required: true,
        },
        bookType: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {   timestamps: true  }
);

module.exports = mongoose.model("Product", ProductSchema);
