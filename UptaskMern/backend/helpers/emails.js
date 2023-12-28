import nodemailer from "nodemailer";

export async function emailRegistro(datos) {

    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "3424a0b5eaf0a4",
        pass: "1300bef886184c",
      },
    });

    //Informacon EMAIL.
    const info = await transport.sendMail({
      from: "UpTask - Administrador de Proyectos",
      to: email,
      subject: "Uptask - Confirma tu cuenta",
      text: "Comprueba tu cuenta en Uptask",
      html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask: </p>
      <a href="${process.env.FRONT_URL}/confirmar/${token}">Comprobar Cuenta </a> `,
    });
 
}

export async function emailOlvidePassword(datos) {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3424a0b5eaf0a4",
      pass: "1300bef886184c",
    },
  });

  //Informacon EMAIL.
  const info = await transport.sendMail({
    from: "UpTask - Administrador de Proyectos",
    to: email,
    subject: "Uptask - Recupera tu Cuenta",
    text: "Cambia tu password en Uptask",
    html: `<p>Hola: ${nombre} Cambia tu password en Uptask: </p>
      <a href="${process.env.FRONT_URL}/olvide-password/${token}">Cambiar Password</a> `,
  });
}