import bcrypt from "bcrypt";
import { User } from "../models/index.js";

export const createUser = async (req, res) => {
  try {
    const { nome, email, senha, perfil } = req.body;
    if (!nome || !email || !senha) return res.status(400).json({ message: "Campos obrigatórios faltando." });
    const hashed = await bcrypt.hash(senha, 10);
    const newUser = await User.create({ nome, email, senha: hashed, perfil });
    return res.status(201).json({ message: "Usuário criado", user: { id: newUser.id, nome: newUser.nome, email: newUser.email }});
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ message: "Email já existe." });
    }
    console.error(err);
    return res.status(500).json({ message: "Erro interno." });
  }
};
