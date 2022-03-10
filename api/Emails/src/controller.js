const fs = require("fs");
const { transporter } = require("./config");

// cuando se registra
const Signup = async (req, res) => {
  // obtenemos datos del usuario
  const { name, email } = req.body;

  // reemplazamos plantilla con datos del usuario
  let template = fs.readFileSync(__dirname + "/templates/signup.html", "utf8");
  template = template.replace("{name}", name ? name : "Guest");

  try {
    // el email no debe estar vacio
    if (!email) {
      return res.json({
        error: { message: "email required", received: email ? email : null },
      });
    }

    // enviamos el email
    await transporter.sendMail({
      from: "Gamerland",
      to: email, // a quien mandamos el email
      subject: "Welcome!", // tema o titulo
      html: template, // mensaje
    });
    res.json({ message: `email sent to ${email}` });
  } catch (err) {
    res.json({ error: err });
    console.log(err);
  }
};

// cuando un usuario olvida su contraseña
const Forget = async (req, res) => {
  // obtenemos datos del usuario
  const { name, email, newPassword } = req.body;

  // reemplazamos plantilla con datos del usuario
  let template = fs.readFileSync(__dirname + "/templates/forget.html", "utf8");
  template = template.replace("{name}", name ? name : "Guest");
  template = template.replace("{password}", newPassword ? newPassword : "...");

  try {
    // el email no debe estar vacio
    if (!email) {
      return res.json({
        error: { message: "email required", received: email ? email : null },
      });
    }

    // enviamos el email
    await transporter.sendMail({
      from: "Gamerland",
      to: email, // a quien mandamos el email
      subject: "Your new password", // tema o titulo
      html: template, // mensaje
    });
    res.json({ message: `email sent to ${email}` });
  } catch (err) {
    res.json({ error: err });
    console.log(err);
  }
};

module.exports = { Signup, Forget };
