FROM golang:stretch AS builder  
WORKDIR /build
COPY . .
RUN go env -w GO111MODULE=auto 
RUN go build ./helloworld.go


FROM scratch  
WORKDIR /dist
COPY --chown=0:0 --from=builder /build ./


ENTRYPOINT ["./helloworld"]

