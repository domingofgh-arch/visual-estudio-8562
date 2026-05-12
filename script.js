// script.js - Funcionalidades de las Reglas del Laboratorio

let currentRule = '';

/**
 * Inicializar eventos cuando el documento está listo
 */
document.addEventListener('DOMContentLoaded', function() {
  // Alerta de bienvenida al cargar la página
  setTimeout(function() {
    mostrarAlertaBienvenida();
  }, 500);

  // Event listeners para cerrar modal con Escape
  document.addEventListener('keydown', manejarTeclaEscape);
});

/**
 * Mostrar alerta de bienvenida
 */
function mostrarAlertaBienvenida() {
  alert('¡Bienvenido al Laboratorio!\n\nPor favor, revisa cuidadosamente todas las reglas de seguridad antes de comenzar cualquier actividad.\n\nTu seguridad es nuestra prioridad.');
}

/**
 * Confirmar lectura de una regla
 * @param {string} nombreRegla - Nombre de la regla a confirmar
 */
function confirmarRegla(nombreRegla) {
  currentRule = nombreRegla;
  const confirmationBox = document.getElementById('confirmationBox');
  const ruleNameDisplay = document.getElementById('ruleNameDisplay');
  
  if (ruleNameDisplay) {
    ruleNameDisplay.textContent = nombreRegla;
  }
  
  if (confirmationBox) {
    confirmationBox.classList.add('active');
  }
  
  // Log para debugging
  console.log('Regla seleccionada:', nombreRegla);
}

/**
 * Aceptar la regla seleccionada
 */
function aceptarRegla() {
  if (!currentRule) return;
  
  // Mostrar alerta de confirmación
  alert(`✓ ¡Excelente!\n\nHas confirmado que comprendes la regla:\n"${currentRule}"\n\nRecuerda seguirla en todo momento.`);
  
  // Log del evento
  console.log('Regla aceptada:', currentRule);
  
  cerrarModal();
}

/**
 * Cancelar sin aceptar la regla
 */
function cancelarRegla() {
  console.log('Confirmación cancelada para:', currentRule);
  cerrarModal();
}

/**
 * Cerrar el modal de confirmación
 */
function cerrarModal() {
  const confirmationBox = document.getElementById('confirmationBox');
  
  if (confirmationBox) {
    confirmationBox.classList.remove('active');
  }
  
  currentRule = '';
}

/**
 * Manejar la tecla Escape para cerrar modal
 * @param {KeyboardEvent} event - Evento de teclado
 */
function manejarTeclaEscape(event) {
  if (event.key === 'Escape') {
    cerrarModal();
  }
}

/**
 * Cerrar modal al hacer click fuera del contenido
 */
document.addEventListener('click', function(event) {
  const confirmationBox = document.getElementById('confirmationBox');
  
  if (confirmationBox && event.target === confirmationBox) {
    cerrarModal();
  }
});
