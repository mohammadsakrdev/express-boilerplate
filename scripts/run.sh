git fetch --all
git pull
sudo docker build -t umedmi-api .
sudo docker container run --publish 3000:3000 --detach --name umedmi-api umedmi-api