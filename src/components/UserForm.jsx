import React from "react";

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name || ""}
          onChange={(e) => {
            updateFieldHandler("name", e.target.value);
          }}
          placeholder="Digite o seu nome"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          value={data.email || ""}
          onChange={(e) => {
            updateFieldHandler("email", e.target.value);
          }}
          placeholder="Digite o seu e-mail"
          required
        />
      </div>
    </div>
  );
};

export default UserForm;
