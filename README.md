# express-boilerplate

In Information Technology, a boilerplate is a unit of writing that can be reused over and over without change.
By extension, the idea is sometimes applied to reusable programming, as in “boilerplate code.”

# Build with docker

sudo docker build -t umedme:1.0 .

The . specifies that the build context is the current directory

# Run with docker

sudo docker container run --publish 3000:3000 --detach --name umedmi umedme:1.0

--publish asks Docker to forward traffic incoming on the host’s port 3000.
--detach asks Docker to run this container in the background.
--name specifies a name with which you can refer to your container

# To test your app, get the port of your app that Docker mapped

sudo docker ps

# Print app output

sudo docker logs <container-id>

# To stop your image

docker stop <container-id>

# To remove it

sudo docker container rm --force umedmi

# Remove the stopped container and all of the images, including unused or dangling images

docker system prune -a

# For reference

https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker
