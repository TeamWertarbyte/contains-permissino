'use strict'

function containsPermission (permissions, requiredPermission) {
  return permissions.some((permission) => {
    if (permission === requiredPermission) {
      return true
    } else {
      const permissionParts = permission.split('.')
      const requiredPermissionParts = requiredPermission.split('.')
      for (let i = 0; i < permissionParts.length; i++) {
        if (i < requiredPermissionParts.length) {
          if (requiredPermissionParts[i] !== permissionParts[i] && permissionParts[i] !== '*') {
            return false
          }
        } else {
          return false
        }
      }
      return true
    }
  })
}

module.exports = {
  containsPermission: containsPermission
}
