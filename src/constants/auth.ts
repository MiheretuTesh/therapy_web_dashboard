enum SignUpStep {
  Form,
  FillInfo,
  Topics,
}

enum UserRoles {
  admin,
  doctor,
  patient,
}

const userRoleList = [
  {
    label: "admin",
    value: UserRoles.admin,
  },
  {
    label: "doctor",
    value: UserRoles.doctor,
  },
  {
    label: "patient",
    value: UserRoles.patient,
  },
];

export { SignUpStep, UserRoles, userRoleList };
