


export function validateNepaliNumber(phone: string): boolean {
  const nepaliPhoneRegex = /^(97|98|01)\d{8}$/;
  return nepaliPhoneRegex.test(phone.trim());
}
