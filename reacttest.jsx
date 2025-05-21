import { useState } from "react";

export default function RecuperacaoSenha() {
  const [showCpf, setShowCpf] = useState(false);
  const [showMatricula, setShowMatricula] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#363d4d] pb-16">
      {/* Logo */}
      <div className="mt-4">
        <img
          src="DoTBranco.png"
          alt="Logo"
          className="w-[350px] max-w-full -translate-x-6"
        />
      </div>

      {/* Card */}
      <div className="bg-[#171717] border border-white rounded-[30px] shadow-[ -20px_20px_25px_black ] p-8 w-[90%] max-w-[800px] flex flex-col items-center mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
          Recupere a sua senha:
        </h2>

        {/* CPF */}
        <div className="w-full mb-6">
          <label htmlFor="cpf" className="text-white font-bold block mb-1">
            CPF:
          </label>
          <div className="relative">
            <input
              id="cpf"
              type={showCpf ? "text" : "password"}
              placeholder="Digite Seu CPF"
              className="w-full rounded-full border-4 border-black px-4 py-2 pr-10 bg-[#d9d9d9] text-base"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
              alt="Mostrar senha"
              className="w-5 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
              onClick={() => setShowCpf(!showCpf)}
            />
          </div>
        </div>

        {/* Matrícula */}
        <div className="w-full mb-6">
          <label htmlFor="matricula" className="text-white font-bold block mb-1">
            Matrícula:
          </label>
          <div className="relative">
            <input
              id="matricula"
              type={showMatricula ? "text" : "password"}
              placeholder="Digite Sua Matrícula"
              className="w-full rounded-full border-4 border-black px-4 py-2 pr-10 bg-[#d9d9d9] text-base"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
              alt="Mostrar senha"
              className="w-5 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
              onClick={() => setShowMatricula(!showMatricula)}
            />
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
          <button className="flex-1 bg-white text-black font-bold border-4 border-lime-400 rounded-[40px_10px] py-2">
            Cancelar
          </button>
          <button className="flex-1 bg-lime-400 text-black font-bold border-4 border-white rounded-[50px_10px] py-2">
            RECUPERAR SENHA
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#171717] text-center text-white py-4 fixed bottom-0">
        Arteiros &copy; 2025
      </footer>
    </div>
  );
}
