const tripFields = [
  {
    name: 'tripName',
    label: 'Trip Name',
    placeholder: 'Name',
  },
  {
    name: 'email',
    label: 'Email Address',
    placeholder: 'johndoe@gmail.com',
  },
  {
    name: 'mobileNumber',
    label: 'Mobile Number',
    placeholder: '(+92)||(03) 123456789',
  },
  {
    name: 'productName',
    label: 'Product Name',
    placeholder: 'Product Name',
  },
  {
    name: 'weightSize',
    label: 'Weight Size',
    placeholder: 'Weight Size',
  },

  {
    name: 'vehicleType',
    label: 'Vehicle Type',
    placeholder: 'Select Vehicle',
    type: 'select',
    options: [
      { value: 'location1', label: 'Location 1' },
      { value: 'location2', label: 'Location 2' },
      { value: 'location3', label: 'Location 3' },
    ],
  },
  {
    name: 'driverLicense',
    label: 'Driver License',
    placeholder: '**********',
  },
  {
    name: 'state',
    label: 'State',
    placeholder: 'State',
  },
  {
    name: 'driverLicenseIssueDate',
    label: "Driver's License Issue Date",
    placeholder: '11/11/2000',
    type:'date'
  },
  {
    name: 'driverLicenseExpiryDate',
    label: "Driver's License Expiry Date",
    placeholder: '11/11/2000',
    type:'date'
  },
  {
    name: 'startLocation',
    label: 'Start Location',
    placeholder: 'Click Google Map',
    type: 'select',
    options: [
      { value: 'location12', label: 'Location 12' },
      { value: 'location22', label: 'Location 222' },
      { value: 'location33', label: 'Location 32' },
    ],
  },
  {
    name: 'endLocation',
    label: 'End Location',
    placeholder: 'Click Google Map',
    type: 'select',
    options: [
      { value: 'location12', label: 'Location 1222' },
      { value: 'location22', label: 'Location 22' },
      { value: 'location32', label: 'Location 32' },
    ],
  },
];

export default tripFields;
