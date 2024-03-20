export function setDefaultProvider(providerId: string) {
  localStorage.setItem('sats-connect_defaultProvider', providerId);
}

export function getDefaultProvider() {
  return localStorage.getItem('sats-connect_defaultProvider');
}

export function removeDefaultProvider() {
  localStorage.removeItem('sats-connect_defaultProvider');
}
