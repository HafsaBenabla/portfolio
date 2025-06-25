// Backend Node.js pour recevoir le formulaire et envoyer un mail
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Remplace ces valeurs par tes infos
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benablahafsa@gmail.com', // Ton adresse Gmail
    pass: 'VOTRE_MOT_DE_PASSE_GMAIL_OU_APP_PASSWORD' // Mets ici un "App Password" (voir sécurité Google)
  }
});

app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: email,
      to: 'benablahafsa@gmail.com',
      subject: `Contact Portfolio: ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<b>Nom:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b><br>${message.replace(/\n/g, '<br>')}`
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur mail en écoute sur http://localhost:${PORT}`);
});
