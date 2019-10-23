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
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
    },
    {
    username: "weddingPlaner1",
    name: "Sarah",
    phone: 18642341020,
    email: "creativeweddings@gmail.com",
    location: "Portland"
    },
    {
    username: "weddingPlaner2",
    name: "Jessica Jung",
    phone: 18642341020,
    email: "jessica.jung.wedding@email.com",
    location: "NYC"
    }
]
```

## GET /auth/user/:id

Will get current user. Requires client to be logged in with a token.

#### Expected Payload:

```
{
    "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImRvZ21hbiIsImlhdCI6MTU3MTg1Njc3MCwiZXhwIjoxNTcyNDYxNTcwfQ.MmbUwBClpdWGcucir8Z_EF-_THs8TtwcqC2lM_HbK6g"
}
```

#### Returns:

```
{
    username: "weddingPlaner",
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
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
    name: "John Smith",
    phone: 18002341000,
    email: "johnSmith@gmail.com",
    location: "Seattle, WA"
    },
    {
    username: "weddingPlaner1",
    name: "Sarah",
    phone: 18642341020,
    email: "creativeweddings@gmail.com",
    location: "Portland"
    },
    {
    username: "weddingPlaner2",
    name: "Jessica Jung",
    phone: 18642341020,
    email: "jessica.jung.wedding@email.com",
    location: "NYC"
    }
]
```

## POST /auth/weddings/user/

create a wedding post for the current user. will require a token. It will user's token to determine the user ID.

### wedding_name is required and must be unique. description is required.

#### Expected Payload:

```
{
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
    "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
}
```

#### Returns:

```
{
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
    "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
}
```
