const fs = require("fs");
const { transporter } = require("./config");

// cuando un usuario se registra
const Signup = async (req, res) => {
  // obtenemos datos del usuario
  const { name, email, token } = req.body;

  // reemplazamos plantilla con datos del usuario
  let template = fs.readFileSync(__dirname + "/templates/signup.html", "utf8");
  template = template.replace("{name}", name ? name : "Guest");
  template = template.replace("{token}", token);

  try {
    // el email no debe estar vacio
    if (!email) {
      return res.json({
        error: "email required",
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

// confirmacion de cambio de contraseña
const confirmChangePassword = async (req, res) => {
  const { name, email, token } = req.body;

  try {
    let template = fs.readFileSync(
      __dirname + "/templates/confirmChangePassword.html",
      "utf8"
    );
    template = template.replace("{name}", name ? name : "Guest");
    template = template.replace("{token}", token);

    // el email no debe estar vacio
    if (!email) {
      return res.json({
        error: "email required",
      });
    }

    // enviamos el email
    await transporter.sendMail({
      from: "Gamerland",
      to: email, // a quien mandamos el email
      subject: "Confirm change password", // tema o titulo
      html: template, // mensaje
    });
    res.json({ message: `confirmation email sent to ${email}` });
  } catch (err) {
    console.log(err);
  }
};

// cambiamos contraseña de un usuario
const changePassword = async (req, res) => {
  // obtenemos datos del usuario
  const { name, email, newPassword } = req.body;

  // reemplazamos plantilla con datos del usuario
  let template = fs.readFileSync(
    __dirname + "/templates/changePassword.html",
    "utf8"
  );
  template = template.replace("{name}", name ? name : "Guest");
  template = template.replace("{password}", newPassword ? newPassword : "...");

  try {
    // el email no debe estar vacio
    if (!email) {
      return res.json({
        error: "email required",
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

// bills
const bills = async (req, res) => {
  const { email, products, total, status } = req.body;

  // reemplazamos plantilla con datos del usuario
  let template = fs.readFileSync(__dirname + "/templates/Bills.html", "utf8");
  template = template.replace("{user}", email ? email : "Guest");
  template = template.replace("{total}", total ? total : "000");

  try {
    // enviamos el email
    await transporter.sendMail({
      from: "Gamerland",
      to: email, // a quien mandamos el email
      subject: "Bill", // tema o titulo
      html: template, // mensaje
    });
    res.json({ message: `bill sent to ${email}` });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { Signup, confirmChangePassword, changePassword, bills };
