// this will display all kubernetes objects in your cluster
kubectl api-resources

// this will imperatively create a deployment
kubectl create deployment shola-deployment --image=nginx

// this will run a deployment using declarative command
kubectl apply -f deployment.yml

// this will retrieve all deployments
kubectl get deployments 

// this will port forward your deployment
kubectl port-forward deployment/personal 8080:80

// this will give information about your deployment
kubectl describe deployment personal

// this will delete a deployment
kubectl delete deployment personal

//REPLICA SET 
kubectl api-resources 

kubectl get replicaset 

kubectl get rs

// this will view details about a particular replicaset 
kubectl describe rs hello-world-34e33dw 

 
kubectl port-forward deployment/customer 8080:80

kubectl describe rs hello-world