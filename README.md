# Serverless Application Built with AWS SAM

## 📌 Overview

This project is a **serverless application** built using **AWS SAM (Serverless Application Model)**.

### 🔥 What the application does

* An **S3 bucket** is created.
* When an object is **uploaded**, it **triggers a Lambda function**.
* The Lambda function **reads the object data/metadata**.
* It then **stores the processed data in DynamoDB**.

---

## 📁 Project Structure

```
lambda-SAM-APP/
│
├── hello-world/          # Contains the Lambda function code
│   └── app.mjs            # Main Lambda handler
│
└── template.yaml         # SAM template defining S3, Lambda, and DynamoDB resources
```

---

## 🚀 Getting Started — Working with AWS SAM

### 1. Clone the Repository

```
git clone https://github.com/Sheshanadaf/Serverless-Application-with-AWS-SAM.git
```

---

## 🐳 2. Install Required Tools

You need the following installed:

### ✔ Docker

Required for SAM to build Lambda runtimes.

### ✔ AWS SAM CLI

Download and install the SAM CLI MSI from AWS.

### ✔ AWS Toolkit (Optional)

VS Code extension for debugging and deployment assistance.

---

## 🔐 3. Configure AWS Credentials

Run:

```
aws configure
```

Provide:

* AWS Access Key
* AWS Secret Key
* Region (e.g., `ap-south-1`)
* Output format (json)

---

## 🔨 4. Run Dependencies

```
npm init -y
npm install aws-sdk

```

This command install your aws-sdk module in app.mjs file.

---

## 🔨 5. Build the Application

```
sam build
```

This command processes your `template.yaml`, prepares the Lambda code, and generates the `.aws-sam/` build folder.

---

## 🚀 6. Deploy the Application

```
sam deploy --guided
```

You will be asked to provide:

* Stack name
* AWS region
* IAM role creation permissions
* Save config for future deploys

After the first deploy, use:

```
sam deploy
```

---

## ✔ Workflow Validation

The workflow you mentioned is **correct and recommended**:

1. Install Docker, SAM CLI, AWS Toolkit
2. Configure credentials using `aws configure`
3. Build using `sam build`
4. Deploy using `sam deploy --guided`

---

## 📝 Additional Notes


* Test Lambda locally:

  ```
  sam local invoke
  ```
* Test S3 event locally:

  ```
  sam local generate-event s3 put | sam local invoke
  ```

---
