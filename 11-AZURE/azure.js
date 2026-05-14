// STEP 1 CREATE AKS CLUSTER
az group create--name microservices - rg--location eastus

az aks create \
--resoure-group microservices-rg \
--name microservice - cluster \ 
--node - count 1 \
--location westus2 \ 
--generate-ssh-keys 
 
// STEP 2 CONNECT KUBECTL TO AKS 
az aks get-credentials \ 
--resource -group microservices-rg \ 
--name microservices-cluster 

kubectl get nodes 

