module.exports = {
  apps: [
    {
      name: "inventory-managment",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        ENV_VAR1: "environment-varible",
      },
    },
  ],
};
