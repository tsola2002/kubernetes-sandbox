// this will build a docker image from the dockerfile in the node js microservice
docker image build. - t node - service
docker image build. -t order-service

// this will run a docker container from the custom image we generated
docker run --name omatsola-service -d -p 8080:80 node-service 