// src/controllers/userController.js
import pool from "../config/db.js";

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const connection = await pool.getConnection();

    const users = await connection.query("SELECT * FROM user");
    connection.release();

    console.log(users)
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.json({ message: "Error al obtener usuarios" });
  }
};

// Obtener un usuario por su ID
export const getUserByName = async (req, res) => {
  const { name } = req.params;
  try {
    const connection = await pool.getConnection();
    const user = await connection.query("SELECT * FROM user WHERE name = ?", [
      name,
    ]);
    connection.release();
    if (user.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user[0]);
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    res.status(500).json({ message: "Error al obtener usuario por ID" });
  }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
  const { name, email, passwd } = req.body;

  try {
    const connection = await pool.getConnection();
    const result = await connection.query(
      "INSERT INTO user (name, email, passwd, rol) VALUES (?, ?, ?, ?)",
      [name, email, passwd, "user"]
    );

    connection.release();

    if (!result || !result.insertId) {
      throw new Error("No se pudo crear el usuario");
    }

    const userId = result.insertId;

    const [rows] = await connection.query(
      "SELECT id, name, email, rol FROM user WHERE id = ?",
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const newUser = rows[0];
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ message: "Error al crear usuario" });
  }
};

// Actualizar un usuario existente por su ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, passwd } = req.body;
  try {
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE user SET name = ?, email = ?, passwd = ?, rol = ? WHERE id = ?",
      [name, email, passwd, "user", id]
    );
    connection.release();
    console.log("Usuario actualizado exitosamente: ", name, email, passwd, "user", id)
    res.json({ message: "Usuario actualizado exitosamente" });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

// Eliminar un usuario por su ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();

    // Inicia una transacción
    await connection.beginTransaction();

    // Elimina los registros relacionados en user_concepto
    await connection.query("DELETE FROM user_concepto WHERE id_user = ?", [id]);

    // Elimina los registros relacionados en user_rutina
    await connection.query("DELETE FROM user_rutina WHERE id_user = ?", [id]);

    // Luego, elimina el usuario
    await connection.query("DELETE FROM user WHERE id = ?", [id]);

    // Confirma la transacción
    await connection.commit();

    connection.release();
    res.json({ message: "Usuario y datos relacionados eliminados correctamente" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
};


/**
 * Finanzas
*/
export const setUserFinance = async (req, res) => {
  const { id } = req.params;
  try{
    const connection = await pool.getConnection();
    await connection.query("INSERT INTO user_concepto (id_user, id_concepto) VALUES (?,1), (?, 2),(?, 3),(?,4),(?,5),(?,6),(?,7),(?, 8),(?, 9),(?, 10),(?, 11),(?, 12),(?, 13)", [id, id, id, id, id, id, id, id, id, id, id, id, id])
    connection.release();
    console.log("User_Conceptos creados con éxito");
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
}

export const getFinanceConcepts = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT c.* FROM user_concepto uc JOIN concepto_finanza c ON uc.id_concepto = c.id WHERE uc.id_user = ?",
      [id]
    );
    connection.release();
    console.log("Conceptos:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener conceptos:", error);
    res.status(500).json({ message: "Error al obtener conceptos" });
  }
};

export const getFinanceConceptsSeen = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT c.* FROM user_concepto uc JOIN concepto_finanza c ON uc.id_concepto = c.id WHERE uc.id_user = ? AND uc.seen = 1",
      [id]
    );
    connection.release();
    console.log("Conceptos:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener conceptos:", error);
    res.status(500).json({ message: "Error al obtener conceptos" });
  }
};

export const getUserConcepto = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT * FROM user_concepto WHERE id_user = ?", [id]
    );
    connection.release();
    console.log("Conceptos:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener conceptos:", error);
    res.status(500).json({ message: "Error al obtener conceptos" });
  }
}

// Controlador para actualizar el estado de un concepto del usuario
export const updateConceptStatus = async (req, res) => {
  const { userId, conceptName, status } = req.body; // Se espera userId, conceptName y status en el cuerpo de la solicitud
  try {
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE user_concepto SET seen = ? WHERE id_user = ? AND id_concepto = (SELECT id FROM concepto_finanza WHERE name = ?)",
      [status, userId, conceptName]
    );
    connection.release();
    res.json({ message: "Estado del concepto actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el estado del concepto:", error);
    res.status(500).json({ message: "Error al actualizar el estado del concepto" });
  }
};


/**
 * Rutinas Fitness
 */

export const createRutinaForUser = async (req, res) => {
  const { id } = req.params;
  console.log('Creando Rutina...')
  try {
    const connection = await pool.getConnection();
    await connection.query(
      "INSERT INTO user_rutina (id_user, id_rutina) VALUES (?,1), (?, 2), (?,3), (?,4), (?,5), (?,6), (?,7), (?,15), (?,16), (?,17), (?,18), (?,19), (?,20), (?,21), (?,22), (?,23), (?,24), (?,25), (?,26), (?,27), (?,28)",
      [id, id, id, id, id, id, id, id, id, id, id, id, id , id, id, id, id, id, id, id, id]
    );
    connection.release();
    console.log("User_Rutinas creadas con éxito");
  } catch (err) {
    console.error("Error al crear las rutinas en el usuario", err);
    res.status(500).json({ message: "Error al crear las rutinas en el usuario" });
  }
};

export const getRutinasByUser = async (req, res) => {
  const { id } = req.params
  try{
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT r.id, r.id_type, r.name, ur.added, ur.hecha, ur.day, ur.rutina_name FROM rutina r LEFT JOIN user_rutina ur ON r.id = ur.id_rutina AND ur.id_user = ?", [id]
    );
    connection.release();
    console.log("Rutinas del usuario " +id+":", rows);
    res.json(rows);
  }catch (error){
    console.error("Error al obtener las rutinas del usuario "+id+":", error);
    res.status(500).json({ message: "Error al obtener conceptos" });
  }
};

export const getRutinasFuncionales = async (req, res) => {
  const { id } = req.params
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT r.id, r.id_type, r.name, ur.added, ur.hecha, ur.day, ur.rutina_name FROM rutina r LEFT JOIN user_rutina ur ON r.id = ur.id_rutina AND ur.id_user = ? WHERE r.id_type = 1 ORDER BY COALESCE(ur.day, 0) DESC", [id]
    );
    connection.release();
    console.log("Rutinas funcionales:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener rutinas:", error);
    res.status(500).json({ message: "Error al obtener rutinas" });
  }
};

export const getRutinasMaquina = async (req, res) => {
  const {id} = req.params
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT r.id, r.id_type, r.name, ur.added, ur.hecha, ur.day, ur.rutina_name FROM rutina r LEFT JOIN user_rutina ur ON r.id = ur.id_rutina AND ur.id_user = ? WHERE r.id_type = 2 ORDER BY COALESCE(ur.day, 0) DESC", [id]
    );
    connection.release();
    console.log("Rutinas Maquinaria:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener rutinas:", error);
    res.status(500).json({ message: "Error al obtener rutinas" });
  }
};

export const getRutinasPesoLibre = async (req, res) => {
  const {id} = req.params
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT r.id, r.id_type, r.name, ur.added, ur.hecha, ur.day, ur.rutina_name FROM rutina r LEFT JOIN user_rutina ur ON r.id = ur.id_rutina AND ur.id_user = ? WHERE r.id_type = 3 ORDER BY COALESCE(ur.day, 0) DESC", [id]
    );
    connection.release();
    console.log("Rutinas Peso libre:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener rutinas:", error);
    res.status(500).json({ message: "Error al obtener rutinas" });
  }
};

export const getEjerciciosByRutinaId = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT * FROM ejercicio WHERE id_rutina = ?", [id]
    );
    connection.release();
    console.log("Ejercicios:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener Ejercicios:", error);
    res.status(500).json({ message: "Error al obtener Ejercicios" });
  }
}

export const getRutinasDisponibles = async (req, res) => {
  const { userId, typeId } = req.params;
  try {
    const connection = await pool.getConnection();
    const rows = await connection.query(
      "SELECT r.* FROM user_rutina ur JOIN rutina r ON ur.id_rutina = r.id JOIN type t ON r.id_type = t.id WHERE t.id = ? AND ur.added = 0 AND ur.id_user = ?", [typeId, userId]
    );
    connection.release();

    console.log("Rutinas Disponibles:", rows);
    res.json(rows); // Envía los resultados de la consulta como respuesta
  } catch (error) {
    console.error("Error al obtener Ejercicios:", error);
    res.status(500).json({ message: "Error al obtener Ejercicios" });
  }
}

export const addRutina = async (req, res) => {
  const {userId, rutinaId, day} = req.body;
  try{
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE user_rutina SET added = 1, day = ? WHERE id_user = ? AND id_rutina = ?", [day, userId, rutinaId]
    );
    connection.release();
    console.log('Rutina añadida correctamente.')
    res.json({ message: "Rutina añadida correctamente." });
  }catch(error){
    console.error("Error al añadir la rutina:", error);
    res.status(500).json({ message: "Error al añadir la rutina" });
  }
}

export const deleteRutina = async (req, res) => {
  const {userId, rutinaId} = req.body;

  try{
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE user_rutina SET added = 0, day = 0, hecha = 0 WHERE id_user = ? AND id_rutina = ?", [userId, rutinaId]
    );
    connection.release();
    console.log('Rutina eliminada correctamente.')
    res.json({ message: "Rutina eliminada correctamente." });
  }catch(error){
    console.error("Error al eliminar la rutina:", error);
    res.status(500).json({ message: "Error al eliminar la rutina" });
  }
}

export const checkRutina = async (req,res) => {
  const {rutinaId, userId} = req.params;
  const {hecha} = req.body;

  console.log(hecha);

  try{
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE user_rutina SET hecha = ? WHERE id_rutina = ? AND id_user", [hecha, rutinaId, userId]
    );
    connection.release();
    console.log('Rutina checked correctamente.')
    res.json({ message: "Rutina checked correctamente." });
  }catch(error){
    console.error("Error al checked la rutina:", error);
    res.status(500).json({ message: "Error al checked la rutina" });
  }
}


export const editRutinaName = async (req, res) => {
  const {userId, rutinaId, rutina_name} = req.body;
  console.log(rutina_name)
  try{
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE user_rutina SET rutina_name = ? WHERE id_user = ? AND id_rutina = ?", [rutina_name, userId, rutinaId]
    );
    connection.release();
    console.log("Nombre de rutina editada correctamente.")
    res.json({ message: "Nombre de rutina editada correctamente." });
  }catch(error){
    console.error("Error al editar el nombre de rutina:", error);
    res.status(500).json({ message: "Error al editar el nombre de rutina" });
  }
};
