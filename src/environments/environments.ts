export const environment = {
  production: true,
  emailJsServiceId: process.env['NG_APP_EMAILJS_SERVICE_ID'] || '',
  emailJsTemplateId: process.env['NG_APP_EMAILJS_TEMPLATE_ID'] || '',
  emailJsPublicKey: process.env['NG_APP_EMAILJS_PUBLIC_KEY'] || '',
};
