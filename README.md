# 1Password Environments — Bug Bash

Welcome to the bug bash! 🎉  

In this exercise, you’ll be hands-on with the new **Local `.env` file** destination available in beta for **1Password Environments**. This new destination eliminates a common risk and frustration developers face: **secrets stored in plaintext `.env` files that are hard to share and easy to leak.**

With our new workflow:  
- Developers can keep using `.env` files on their devices.
- Secrets are securely managed in 1Password.
- Secrets are delivered only when needed—and never written to disk.

You’ll explore the new destination in two common scenarios:

| Group | Scenario | Story |
| - | - | - |
| A | Onboarding to an existing project | I want to clone my team’s project, access it’s secrets from within 1Password, and complete the configuration steps needed to get up and running locally. |
| B | Replacing an existing `.env` file | I want to adopt Environments for my personal project, replacing existing `.env` files that held Secret References or plaintext secrets with one managed by 1Password. |

## Quick start

### Clone the repo

```bash
git clone https://github.com/schneedotdev/local-env-file-demo.git
cd local-env-file-demo
```

### Next steps

Once you've been assigned to a group, navigate to its directory and follow the `README.md` inside:

```bash
cd group-a
```

## Resources

- 📘 [1Password Environments](https://developer.1password.com/docs/environments) — what Environments are and how they work.
- 📘 [Local .env files](https://developer.1password.com/docs/environments/local-env-file) — how to configure the new local `.env` file desintation.