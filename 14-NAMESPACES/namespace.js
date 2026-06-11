//STEP 1: COMPARE TO SEE THAT NAMESPACE COMMANDS GIVES YOU THE SAME OUTPUT AS BEFORE
kubectl get pods
kubectl get pods -n default

// STEP 2 LIST ALL NAMESPACES IN YOUR CLUSTER 
kubectl get ns

// STEP 3 SHOW YOU ALL THE KUBERNETES OBJECTS AVAILABLE TO YOU
kubectl api-resources


// STEP 4 CREATE A NAMESPACE IMPERATIVELY CALLED ENGINEERING 
kubectl create ns engineering
kubectl create ns logging
kubectl create ns tooling
kubectl create ns ml

// STEP 5 LIST ALL NAMESPACES IN YOUR CLUSTER
kubectl get ns

// STEP 6 DELETE A NAMESPACE
kubectl delete ns ml

// STEP 5 CREATE NAMESPACE USING DECLARATIVE APPROACH 
kubectl apply - f omatsola - namespace.yml

// STEP 6 ADD YOUR NEWLY CREATED NAMESPACE TO A DEPLOYMENT
kubectl apply - f nginx - deployment.yml


//STEP 7 SHOW ALL RESOURCES I ONE PARTICULAR NAMESPACE
kubectl get pods -n development

// STEP 8 THIS WILL DESCRIBE A NAMESPACE
kubectl describe namespace development


// STEP 9 RUN A POD AND PLACE IT INSIDE THE NAMESPACE AT THE SAME TIME
 kubectl run nginx --image nginx:latest -n development
