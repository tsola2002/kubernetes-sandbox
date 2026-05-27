// STEP 1: INSTALL AWS TOOLS 
aws configure // stores aws acces key secret key and region
kubectl version --client // kubernetes command line tool
eksctl version // aws eks automation tool(creates kubernetes cluster)

// NB: IF EKSCTL DOES NOT EXIST INSTALL CHOCOLATEY, THEN INSTALL EKSCTL
// OPEN POWERSHELL AS AN ADMINISTRATOR THEN USE 

// STEP 2: CREATE EKS CLUSTER 
eksctl create cluster \
--name microservices-cluster \
--region us-east-1 \
--nodegroup-name worker-nodes \ 
--node-type t3.medium \ 
--nodes 2 

// STEP 3: DEPLOY APPLICATIONS TO KUBERNETES CLUSTER
kubectl apply -f order-deployment.yml
kubectl apply -f order-service.yml

kubectl apply -f customer-deployment.yml
kubectl apply -f customer-service.yml

kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-service.yml

// STEP 4: GET THE PUBLIC URL 
kubectl get services // check for EXTERNAL-IP 

