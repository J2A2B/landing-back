module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86d6c4dff9e0814b5fa42cd5a80e9713'),
  },
});
