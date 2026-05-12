import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    success: boolean;
    message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const {
        name,
        email,
        phone,
        topic,
        message
    } = req.body;

    if (!name || !email || !phone || !topic || !message) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        return res.status(500).json({ success: false, message: "Server configuration error" });
    }

    const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const telegramMessage = `
    <b>New Contact Form Submission</b>\n\n\n
    <b>Name:</b> ${name}\n
    <b>Email:</b> ${email}\n
    <b>Phone:</b> ${phone}\n\n
    <b>Topic:</b> ${topic}\n\n
    <b>Message:</b> ${message}\n\n
    <b>Sent at:</b> ${new Date().toISOString()}\n\n
    Sent from: wildfire-express.com
    `;

    try {
        const response = await fetch(telegramApi, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
                parse_mode: "HTML",
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(500).json({
                success: false,
                message: `Telegram API error: ${response.status} - ${errorText}`,
            });
        }

        return res.status(200).json({ success: true });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: `Error sending message: ${error.message}`,
        });
    }
}