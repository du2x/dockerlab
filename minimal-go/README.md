Minimal Go Image
=================

This is an example of multi-staging building which produces a tiny (~1.7MB) go app docker image.



Build from local source
----

Cd to the minimal-go Dockerfile directory and run the following cmd:
```
docker build -t du2xdocker/minimal-go .
``` 
now, you can see this new image by running
 `docker images`

Run the builded image
----

Cd to the minimal-go Dockerfile directory and run the following cmd:
```
docker run du2xdocker/minimal-go
``` 

This command will work even if you run before building, because it this, the image will be fetched from hub.docker




