interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'View company information',
    'View own customer information',
    'Contact the company',
  ],
  ownerAbilities: ['Manage employee data', 'Manage HR Manager data', 'Read company data', 'Read user data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4266a4da-50c0-4d16-9d72-6d8c20c23fb4',
};
