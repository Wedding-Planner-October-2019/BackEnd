# Wedding Planner Portfolio Backend

This API allows you to create a User Known as a wedding planner, who can create a portfolio of weddings they have worked on.
Hosted URL for BackEnd

## [https://wedding-planner-buildweek.herokuapp.com/api/](https://wedding-planner-buildweek.herokuapp.com/api/)

# Endpoints

### Creating a Wedding Planner User

## POST /auth/user/login

#### Expected Payload:

```
{
    username: user,
    password: password1234
}
```

#### Returns:

```
{
  "message": "Welcome user!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

## POST /auth/user/login

The email and username must be unique and are required. The password must be 12 characters.

#### Expected Payload:

```
{
    username: "weddingPlaner",
    password: "password1234",
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
}
```

#### Returns:

```
{
  "message": "successfully registered new user weddingPlaner, user ID 1"
}
```

## GET /auth/user/

Will get an array of all the current users. Requires client to be logged in with a token.

#### Expected Payload:

```
{
    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

#### Returns:

```
[
    {
    username: "weddingPlaner",
    password: "password1234",
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
    },
    {
    username: "weddingPlaner1",
    password: "password1234",
    name: "Sarah",
    phone: 18642341020,
    email: "creativeweddings@gmail.com",
    location: "Portland"
    },
    {
    username: "weddingPlaner2",
    password: "password1234",
    name: "Jessica Jung",
    phone: 18642341020,
    email: "jessica.jung.wedding@email.com",
    location: "NYC"
    }
]
```
