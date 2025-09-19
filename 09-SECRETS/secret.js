// STEP 1 IMPERATIVELY CREATE A SECRET
kubectl create secret generic mysecret--from-literal=db - password=123
--from-literal=api-token=token


//STEP 2 RETRIEVE THE SECRET YOU JUST CREATED 
kubectl get secret