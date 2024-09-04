"use client";

import addNotification from "react-push-notification";

const Success = () => {
  const buttonClick = () => {
    addNotification({
      title: "¡Bienvenido!",
      message: "Has iniciado sesión correctamente",
      theme: "darkblue",
      native: true,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">Has iniciado sesión correctamente</h1>
      <button
        onClick={buttonClick}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Click Me
      </button>
    </main>
  );
};

export default Success;
