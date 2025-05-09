import * as React from "react";

export function EmailTemplate({ nombre, empresa, servicio, correo, celular, mensaje }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#222', padding: 24 }}>
      <h2 style={{ color: '#000052' }}>Nuevo mensaje de contacto</h2>
      <p><b>Nombre:</b> {nombre}</p>
      <p><b>Empresa:</b> {empresa || '-'}</p>
      <p><b>Servicio:</b> {servicio}</p>
      <p><b>Correo:</b> {correo}</p>
      <p><b>Celular:</b> {celular || '-'}</p>
      <p><b>Mensaje:</b><br />{mensaje}</p>
    </div>
  );
} 