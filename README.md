# Team 3 Practice Sprint

## Node Web App

### Environment Variables Required
1. baseURL - Link to API

### To build the application

```
npm run build
```

### To Run Tests
```
npm  test
```

### To Run The Application
```
export baseURL="http://localhost:8080" && npm start
```

### To build docker image
`docker build --build-arg baseURL=${baseURL} -t Team-3-UI:0.1 .`

### To Run docker image
`docker run Team-3-UI:0.1`