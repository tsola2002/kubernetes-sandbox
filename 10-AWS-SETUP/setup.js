// STEP 1 INSTALL AWS CLI TOOL
// DOWNLOAD THE EXE FILE BELOW
https://awscli.amazonaws.com/AWSCLIV2-2.0.30.msi

// STEP 2 GENERATE SSH KEYS
aws --version
aws configure
aws sts get-caller-identity


// STEP 3  SETUP IAM USER ACCESS PERMISSIONS AND ROLES
REFER TO WORD DOCUMENT

// STEP 4 CREATE REPOSITORY ON AWS ECR SERVICE
aws ecr create-repository --repository-name bankingrepo

// STEP 5 RETRIEVE AUTHENTICATION TOKEN AND AUTHENTICATE YOUR DOCKER CLIENT TO YOUR REGISTRY
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 975050122888.dkr.ecr.us-east-1.amazonaws.com

// STEP 6 BUILD YOUR DOCKER IMAGE
docker build -t bankingrepo .

// STEP 7 TAG THE IMAGE
docker tag customerapi:latest 975050122380.dkr.ecr.us-east-1.amazonaws.com/bankingrepo:customerapiv1

// STEP 8 PUSH IMAGE TO AWS REPOSITORY
docker push 975050122380.dkr.ecr.us-east-1.amazonaws.com/bankingrepo:customerapiv1



// STEP 9  SETUP IAM USER ACCESS PERMISSIONS AND ROLES FOR EKS SERVICE
REFER TO WORD DOCUMENT FOR INSTRUCTIONS

// STEP 10 CREATE EKS CLUSTER
eksctl version

eksctl create cluster --name my-cluster --region us-east-2 --nodegroup-name standard-workers --node-type t3.medium --nodes 2 --nodes-min 1 --nodes-max 3 –managed


// STEP 11 UPDATE THE CONTEXT TO USE AWS EKS SERVICE
aws eks update-kubeconfig --name bankingcluster

aws eks describe-cluster --name bankingcluster—region us-east-1 --query "cluster.status" --output text

aws eks update-kubeconfig --name bankingcluster --region us-east-1  --kubeconfig "C:\Users\param\.kube\config"

// STEP 12 UPDATE THE CONTEXT
kubectl config get-contexts

// STEP 13 CONFIRM THE CONTEXT HAS BEEN UPDATED
kubectl cluster-info 

