from rolepermissions.roles import AbstractUserRole


class Admin(AbstractUserRole):
    available_permissions = {"test_admin_permission": True}


class Staff(AbstractUserRole):
    available_permissions = {"test_staff_permission": True}
