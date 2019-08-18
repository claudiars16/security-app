import React from 'react';

const QUESTION_DATA = [
  {
    question: <span>¿Usas en tu contraseña palabras que aparecen en el diccionario?</span>,
    answers: [
      <span>Sí, porque son fáciles de recordar.</span>,
      <span>Sí, pero en un idioma distinto al mío.</span>,
      <span>Sí, pero escojo las palabras más difíciles.</span>,
      <span>No.</span>
    ],
    correct: 3
  },
  {
    question: <span>¿Por qué muchas personas escogen “qwerty” como clave de acceso?</span>,
    answers: [
      <span>Por ser una secuencia del teclado fácil de recordar.</span>,
      <span>Por pensar que a nadie más se le ocurriría una idea tan original.</span>,
      <span>Todas las anteriores. </span>,
      <span>Por negligencia para crear una contraseña segura </span>
    ],
    correct: 2
  },
  {
    question: <span>¿Cuál de estas es una contraseña segura?</span>,
    answers: [
      <span>123456789.</span>,
      <span>Contraseña.</span>,
      <span>MgelFdLdFee2015.</span>,
      <span>Facebook123.</span>
    ],
    correct: 2
  },
  {
    question: <span>¿Cuál es el mejor lugar para guardar tus contraseñas?</span>,
    answers: [
      <span>Una libreta de notas al lado del computador en la oficina.</span>,
      <span>Un archivo de texto compartido solo con la familia.</span>,
      <span>Apuntadas en papeles autoadhesivos cerca del teléfono</span>,
      <span>Ninguna de las anteriores.</span>
    ],
    correct: 3
  },
  {
    question: <span>¿Qué puedes hacer para proteger tus contraseñas?</span>,
    answers: [
      <span>Enviarlas por correo electrónico.</span>,
      <span>Acceder a tus cuentas desde hoteles, bibliotecas o cibercafés.</span>,
      <span>No mencionarlas en chats o redes sociales.</span>,
      <span>Conservar las que vienen predeterminadas en las aplicaciones.</span>
    ],
    correct: 2
  },
  {
    question: <span>La mejor clave secreta:</span>,
    answers: [
      <span>Tiene secuencias con más de 8 caracteres.</span>,
      <span>Intercala símbolos entre las letras y los números.</span>,
      <span>No usa ni letras ni números consecutivos.</span>,
      <span>Todas las anteriores.</span>
    ],
    correct: 3
  },
  {
    question: <span>Además de crear unas difíciles de adivinar ¿qué puedes hacer para proteger tus contraseñas?</span>,
    answers: [
      <span>Evitar el acceso a tus cuentas desde redes de conexión públicas.</span>,
      <span>No descargar archivos de origen desconocido en tu computador.</span>,
      <span>Cerrar siempre las sesiones (log out) de tus aplicaciones.</span>,
      <span>Todas las anteriores.</span>
    ],
    correct: 3
  },
  {
    question: <span>¿Qué debe reunir una contraseña segura?</span>,
    answers: [
      <span>Fecha de nacimiento, nombres de mascotas, película de moda.</span>,
      <span>Número del documento de identidad con números de teléfono.</span>,
      <span>Una combinación de mayúsculas, minúsculas, números y símbolos.</span>,
      <span>Ninguna de las anteriores.</span>
    ],
    correct: 2
  }
];

export default QUESTION_DATA;