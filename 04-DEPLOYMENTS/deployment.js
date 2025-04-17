kubectl api-resources


// this will run a pod using declarative command
kubectl apply -f deployment.yml

// this will retrieve all deployments
kubectl get deployments 

// this will give information about your deployment
kubectl describe deployment personal


kubectl delete deployment personal

//REPLICA SET 
kubectl api - resources 

kubectl get replicaset 

// this will view details about aparticular replicaset 
kubectl describe rs hello - world - 34e33dw 

kubectl port - forward deployment / hello - world 8081: 80 

kubectl describe rs hello-world