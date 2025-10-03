# Group B - Replacing an existing .env file

This project is configured to use the **op** CLI and **Secret References**. Your task is to replace the existing `.env` file with one managed by **1Password Environments**, and get the app running locally.

## 1. Access the shared vault

- The host will invite you to a **shared vault** containing the secrets currently used in this app. The values are referenced using Secret References.  
- As a group, you’ve decided to switch from your current secrets management approach to **1Password Environments**. Learn what Environments are and figure out how to read their contents locally.

📘 Docs: [1Password Environments](https://developer.1password.com/docs/environments/)

## 2. Install dependencies

From the `group-b` directory:

```bash
npm install
```

## 3. Run the project

You can now run the project:

```bash
npm start
```

If you have access to the shared vault, the project should run and connect to the database, assuming the required environment variables are available.

## 4. Adopt Environments

Now it's time to adopt the new tool.

Throughout the migration, this program will validate required variables, report any that are missing or misconfigured, and confirm a successful database connection once everything is set.

Start by updating the `start` script in `package.json`

```json
{
  ...
  "start": "node index.js"
  ...
}
```

Now use the public documentation to configure a new **1Password Environment**. Once configured, run the project again to verify that it starts successfully with secrets delivered from the Environment.

## Bonus

Consider how you would adopt this setup for one of your own projects or scripts. Attempt to replace your current secrets management solution with an Environment.
