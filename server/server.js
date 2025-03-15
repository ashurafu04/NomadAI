require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "deepseek/deepseek-r1-distill-qwen-14b:free",
                messages: [{ role: "user", content: message }]
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
