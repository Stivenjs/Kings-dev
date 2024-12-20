import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import Handlebars from "handlebars";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "kingdevs01@gmail.com",
    pass: "zsnl ancd jacz fjhf",
  },
});

export async function sendEmail(
  templateName: string,
  to: string | string[],
  subject: string,
  data: any
) {
  try {
    const templatePath = path.join(
      process.cwd(),
      "src",
      "app",
      "emailTemplates",
      `${templateName}.html`
    );

    // Verificar si el archivo de plantilla existe
    try {
      await fs.access(templatePath);
    } catch (error) {
      console.error("El archivo de plantilla no existe:", templatePath);
      throw new Error("Plantilla no encontrada");
    }

    const templateSource = await fs.readFile(templatePath, "utf-8");
    const template = Handlebars.compile(templateSource);
    const htmlContent = template(data);

    const info = await transporter.sendMail({
      from: "kingdevs01@gmail.com",
      to,
      subject,
      html: htmlContent,
    });

    console.log("Correo enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw new Error("No se pudo enviar el correo");
  }
}
