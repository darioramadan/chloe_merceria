// Google Apps Script — relay de contacto para Chloe Mercería
// 1. Pegá este código en script.google.com (nuevo proyecto)
// 2. Guardá → Implementar → Nueva implementación
//    - Tipo: Aplicación web
//    - Ejecutar como: Yo
//    - Quién tiene acceso: Cualquier usuario
// 3. Copiá la URL generada y pegala en store.js (SCRIPT_URL)

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    MailApp.sendEmail({
      to:      'darioramadan@gmail.com',
      subject: 'Consulta desde Chloe Mercería — ' + data.nombre,
      replyTo: data.email,
      body:
        'Nombre:    ' + data.nombre    + '\n' +
        'Email:     ' + data.email     + '\n' +
        'Teléfono:  ' + (data.telefono || '—') + '\n\n' +
        'Mensaje:\n' + data.mensaje,
    });

    return ContentService
      .createTextOutput('ok');

  } catch (err) {
    return ContentService
      .createTextOutput('error: ' + err.message);
  }
}
