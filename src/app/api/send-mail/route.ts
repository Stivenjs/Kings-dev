import { NextResponse } from "next/server";
import { sendEmail } from "../../utils/emailService";

export async function POST(request: Request) {
  const { name, email, date, time, description, phone, platform } =
    await request.json();

  if (!name || !email || !date || !time) {
    return NextResponse.json(
      { message: "Faltan datos necesarios" },
      { status: 400 }
    );
  }

  const templateData = {
    name,
    email,
    phone,
    date,
    time,
    platform,
    description,
  };

  try {
    // Enviar ambos correos de forma concurrente usando Promise.all
    await Promise.all([
      sendEmail(
        "teamEmailTemplate",
        [
          "stevenandresjaime@gmail.com",
          "rnovajaider@gmail.com",
          "aaamadorb@outlook.es",
          "gabdmendoza17@gmail.com",
        ],
        "Nueva cita agendada",
        templateData
      ),
      sendEmail(
        "clientEmailTemplate",
        email,
        "Confirmación de tu cita agendada",
        templateData
      ),
    ]);

    return NextResponse.json({ message: "¡Nos vemos pronto!" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { message: "No se pudo agendar" },
      { status: 500 }
    );
  }
}
