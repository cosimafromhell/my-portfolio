import client from '@sendgrid/mail';
client.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendMailToAdmin(req, res) {
    const { name, email, body } = JSON.parse(req.body);
    try {
        await client.send({
            to: process.env.PORTFOLIO_ADMIN_EMAIL_ADDRESS,
            from: email,
            subject: `${name}様からポートフォリオ経由でメッセージを受け取りました。`,
            text: body,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `メールを送信できませんでした。お手数ですがしばらく時間を置いて再度入力下さい。` });
    }
    return res.status(200).json({ message: `メールを正常に送信しました。` });
}