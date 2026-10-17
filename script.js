
'use strict';

const textToggle = document.querySelector('#textToggle');
const contrastToggle = document.querySelector('#contrastToggle');
const form = document.querySelector('#transferForm');
const destination = document.querySelector('#destination');
const amount = document.querySelector('#amount');
const destError = document.querySelector('#destError');
const amountError = document.querySelector('#amountError');
const feedback = document.querySelector('#feedback');
const dialog = document.querySelector('#confirmDialog');
const summary = document.querySelector('#summary');
const confirmButton = document.querySelector('#confirmButton');
const transferPanel = document.querySelector('#transferPanel');
const movementsPanel = document.querySelector('#movementsPanel');
const actionButtons = document.querySelectorAll('[data-action]');
const clearButton = document.querySelector('#clearForm');

const MAX_BALANCE = 2450000;
const MIN_AMOUNT = 1000;

let pendingTransfer = null;
let processing = false;

textToggle.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('large-text');

  textToggle.setAttribute('aria-pressed', String(enabled));
  textToggle.textContent = enabled
    ? 'A− Texto normal'
    : 'A+ Texto grande';
});

contrastToggle.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('high-contrast');

  contrastToggle.setAttribute('aria-pressed', String(enabled));
  contrastToggle.textContent = enabled
    ? 'Contraste normal'
    : 'Alto contraste';
});

function showError(input, errorNode, text) {
  input.setAttribute('aria-invalid', 'true');
  errorNode.textContent = text;
  errorNode.hidden = false;
}

function clearError(input, errorNode) {
  input.removeAttribute('aria-invalid');
  errorNode.textContent = '';
  errorNode.hidden = true;
}

function showMessage(text, type = 'info') {
  feedback.textContent = text;
  feedback.className = `feedback ${type}`;
  feedback.hidden = false;
}

function hideMessage() {
  feedback.hidden = true;
  feedback.textContent = '';
  feedback.className = 'feedback';
}

function formatMoney(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value);
}

function resetValidation() {
  clearError(destination, destError);
  clearError(amount, amountError);
}

destination.addEventListener('input', () => {
  clearError(destination, destError);
});

amount.addEventListener('input', () => {
  clearError(amount, amountError);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (processing || dialog.open) {
    return;
  }

  hideMessage();
  resetValidation();

  const recipient = destination.value.trim();
  const rawAmount = amount.value.trim();
  const value = Number(rawAmount);
  let valid = true;

  if (!recipient) {
    showError(
      destination,
      destError,
      'Ingresa el nombre o la descripción de la cuenta de destino.'
    );
    valid = false;
  }

  if (
    !rawAmount ||
    !Number.isFinite(value) ||
    value < MIN_AMOUNT ||
    value % 1000 !== 0
  ) {
    showError(
      amount,
      amountError,
      'Ingresa un valor válido, desde $1.000 y en múltiplos de $1.000.'
    );
    valid = false;
  } else if (value > MAX_BALANCE) {
    showError(
      amount,
      amountError,
      'El valor supera el saldo ficticio disponible de $2.450.000.'
    );
    valid = false;
  }

  if (!valid) {
    showMessage(
      'Revisa los campos señalados antes de continuar.',
      'error'
    );

    const firstInvalid = form.querySelector('[aria-invalid="true"]');

    if (firstInvalid) {
      firstInvalid.focus();
    }

    return;
  }

  pendingTransfer = { recipient, value };

  summary.textContent =
    `Vas a simular una transferencia de ${formatMoney(value)} ` +
    `a ${recipient}. Revisa los datos antes de continuar.`;

  dialog.showModal();
});

confirmButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (!pendingTransfer || processing) {
    return;
  }

  processing = true;
  confirmButton.disabled = true;

  const { recipient, value } = pendingTransfer;

  dialog.close();

  showMessage(
    `Simulación completada: ${formatMoney(value)} para ${recipient}. ` +
    'No se movió dinero real.',
    'success'
  );

  pendingTransfer = null;
  form.reset();
  resetValidation();

  processing = false;
  confirmButton.disabled = false;

  feedback.focus();
});

dialog.addEventListener('close', () => {
  // Si el usuario vuelve a modificar los datos, no se pierde el formulario.
  if (dialog.returnValue !== 'confirm') {
    pendingTransfer = null;
    confirmButton.disabled = false;
  }
});

clearButton.addEventListener('click', () => {
  form.reset();
  resetValidation();
  hideMessage();
  pendingTransfer = null;
  destination.focus();
});

function selectAction(selectedButton) {
  actionButtons.forEach((button) => {
    const selected = button === selectedButton;

    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

    selectAction(button);

    if (action === 'movements') {
      transferPanel.hidden = true;
      movementsPanel.hidden = false;
      hideMessage();

      movementsPanel.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      document.querySelector('#movementsTitle').focus?.();
      return;
    }

    movementsPanel.hidden = true;
    transferPanel.hidden = false;

    transferPanel.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    if (action === 'transfer') {
      hideMessage();
      destination.focus({ preventScroll: true });
      return;
    }

    showMessage(
      'La función de pago es solo demostrativa y todavía no está implementada. ' +
      'Puedes usar la transferencia simulada para probar las validaciones.',
      'info'
    );
  });
});
