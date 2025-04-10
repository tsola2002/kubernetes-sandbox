// this will build a docker image from a dockerfile for us
docker image build . -t personal


// this will run a docker container from the custom image we generated
docker run --name personal-website -d -p 8080:80 personal

//setting up tags that will be pushed to docker hub
docker tag personal:latest tsola2002/kube-image:latest

// this will push our image to docker hub
docker push tsola2002/kube-image:latest


// this will run a pod named (personal) via an imperative command 
kubectl run personal \
--image=tsola2002/kube-image:latest \
--port=80 

// this will do port forwarding
kubectl port-forward pod/helloworld 8080:80