function formatPhoneForWhatsApp(phone: string) {
  // Remove tudo que não for dígito
  const digits = phone.replace(/\D/g, '');
  
  // Se não começar com '55', adiciona
  if (!digits.startsWith('55')) {
    return '55' + digits;
  }
  
  return digits;
}