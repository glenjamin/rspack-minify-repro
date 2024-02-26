export default function output(x) {
  const next = document.createElement('p');
  next.textContent = String(x);
  document.body.appendChild(next);
}
