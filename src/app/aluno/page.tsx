"use client";

import { useState } from "react";

export default function AlunoAuth() {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="container">
      <h1>{isLogin ? "Login do Aluno" : "Cadastro de Aluno"}</h1>
      <form className="auth-form">
        {!isLogin && (
          <input type="text" placeholder="Nome Completo" required />
        )}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
      </form>
      <p>
        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Cadastre-se" : "Faça login"}
        </button>
      </p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f0f0f0;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input, button {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          background: #0070f3;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
