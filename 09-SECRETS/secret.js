// STEP 1 IMPERATIVELY CREATE A SECRET
kubectl create secret generic mysecret --from-literal=db-password=123
--from-literal=api-token=token


//STEP 2 RETRIEVE THE SECRET YOU JUST CREATED 
kubectl get secret
kubectl get secret mysecret -o yaml
kubectl describe secret mysecret

// STEP 3 CREATE A SECRET FROM A FILE
// CREATE A FILE CALLED SECRET BEFORE RUNNING THE COMMAND 
kubectl create secret generic mysecret-from-file --from-file=secret
kubectl get secret mysecret-from-file -o yaml


//STEP 4 DELETE A SECRET
kubectl delete secret mysecret
kubectl get secret

// STEP 5 CREATE A SECRET DECLARATIVELY
kubectl apply -f shola-secret.yml
kubectl get secret

// STEP 6 ENCODE YOUR SECRET AND UPDATE IT IN YOUR YML FILE
echo -n 'mysecretpassword' | base64
kubectl apply -f shola-secret.yml
kubectl get secret my-second-secret -o yaml