// STEP 1 CREATE A CONFIG MAP DECLARATIVELY
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-properties
data:
  app-name: order
  app-version: 1.0.0
  team: engineering


kubectl apply -f config-maps.yml

// STEP 2 CHECK THAT YOUR CONFIG MAPS HAVE BEEN CREATED
kubectl get cm

// STEP 3 INSPECT DETAILS ABOUT YOUR CONFIG MAP
kubectl describe cm nginx-conf

// STEP 4 VIEW CONFIG MAP IN YML FORMAT
kubectl get cm nginx-conf -o yaml

// STEP 5 CREATE CONFIG MAP IMPERATIVELY
kubectl create cm config1 --from-literal=key1=value1 --from-literal=key2=value2




