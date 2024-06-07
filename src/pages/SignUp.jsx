import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../constants";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [signed, setSigned] = useState(false);

  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const existeCliente = async () => {
    try {
      const response = await fetch(`${api}/users`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error al obtener usuarios");
      }

      const data = await response.json();

      if (
        data.some(
          (cliente) =>
            cliente.name.trim().toLowerCase() === username.trim().toLowerCase()
        )
      ) {
        setUsernameError("Ese nombre de usuario no está disponible");
        return true;
      }

      if (
        data.some(
          (cliente) =>
            cliente.email.trim().toLowerCase() === email.trim().toLowerCase()
        )
      ) {
        setEmailError("Ese email no está disponible");
        return true;
      }

      return false;
    } catch (error) {
      console.error("Error al verificar si el usuario existe:", error);
      setError("Error al verificar si el usuario existe");
      return true; // Asumimos que el usuario existe si hay un error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación de los campos
    if (!username) {
      setUsernameError("Por favor ingresa tu nombre de usuario");
      return;
    }
    if (!email) {
      setEmailError("Por favor ingresa tu correo electrónico");
      return;
    }
    if (!password) {
      setPasswordError("Por favor ingresa tu contraseña");
      return;
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Por favor confirma tu contraseña");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Las contraseñas no coinciden");
      return;
    }

    // Validar la contraseña
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "La contraseña debe tener al menos 8 caracteres y contener al menos una mayúscula, una minúscula, un número y un carácter especial"
      );
      return;
    }

    const existe = await existeCliente();

    if (existe) {
      return;
    }

    try {
      const response = await fetch(`${api}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username.trim().toLowerCase(),
          email: email.toLowerCase(),
          passwd: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      const responseUser = await fetch(
        `${api}/users/` + username.trim().toLowerCase(),
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const dataUser = await responseUser.json();

      // Crear conceptos financieros y rutinas de fitness
      await Promise.all([
        fetchUserAndCreateFitness(dataUser.id),
        fetchUserAndCreateFinance(dataUser.id),
      ]);

      // Redirigir al usuario a la página de login
      console.log('navigating to login...')
      navigate("/login");
    } catch (error) {
      setError("Error de red al registrar usuario");
    }
  };

  const fetchUserAndCreateFinance = async (userId) => {
    console.log("Creando finanzas");
    try {
      const financeResponse = await fetch(
        `${api}/users/finance/create/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!financeResponse.ok) {
        throw new Error("Error al crear el recurso financiero");
      }

      const financeData = await financeResponse.json();
      console.log(financeData.message);
    } catch (error) {
      console.error("Error al crear el recurso financiero:", error);
      throw error;
    }
  };

  const fetchUserAndCreateFitness = async (userId) => {
    console.log("Creando fitness");
    try {
      const fitnessResponse = await fetch(
        `${api}/users/fitness/create/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!fitnessResponse.ok) {
        throw new Error("Error al crear la rutina de fitness");
      }

      const fitnessData = await fitnessResponse.json();
      console.log(fitnessData.message);
    } catch (error) {
      console.error("Error al crear la rutina de fitness:", error);
      throw error;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100 to-blue-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 bg-white bg-opacity-70 p-10 rounded-md shadow-lg shadow-gray-700"
      >
        <h1 className="border-b-2 border-gray-500 w-[80%] text-center uppercase">
          Registro de Usuario
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChangeUsername}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {usernameError && <div className="text-red-500">{usernameError}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {emailError && <div className="text-red-500">{emailError}</div>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {passwordError && <div className="text-red-500">{passwordError}</div>}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {confirmPasswordError && (
          <div className="text-red-500">{confirmPasswordError}</div>
        )}

        <input
          type="submit"
          value="Sign Up"
          className="cursor-pointer px-5 py-2 bg-blue-300 hover:bg-blue-400 rounded-lg hover:shadow-md hover:shadow-black transition-all duration-500"
        />

        <Link
          to="/login"
          className="hover:text-gray-500 transition-all duration-500 text-blue-900"
        >
          Volver
        </Link>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
}
