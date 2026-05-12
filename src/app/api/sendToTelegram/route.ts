import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, topic, message } = body;

        if (!name || !email || !phone || !topic || !message) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            return NextResponse.json(
                { success: false, message: "Server configuration error" },
                { status: 500 }
            );
        }

        const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const telegramMessage = `
<b>New Contact Form Submission</b>


<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Phone:</b> ${phone}

<b>Topic:</b> ${topic}

<b>Message:</b> ${message}

<b>Sent at:</b> ${new Date().toISOString()}

Sent from: wildfire-express.com
        `.trim();

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
            return NextResponse.json(
                { success: false, message: `Telegram API error: ${response.status} - ${errorText}` },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: `Error processing request: ${error.message}` },
            { status: 500 }
        );
    }
}