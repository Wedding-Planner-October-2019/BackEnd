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
    id: 1,
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
    "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    user_id: 2
}
```

## GET /auth/weddings/user/

Returns an array of all wedding post. It will require a token.

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
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
        "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    user_id: 1
    },
    {
    wedding_name: "Tori and Darci Wedding",
    venue: "Beach Side Resort",
    guest_num: 100,
    description:
        "A beach side wedding set at sunset along the LA California coastline. There were over 100 guests that attended this very romantic wedding. The wedding was slightly overbudget, but it was worth it when the Groom and Bride tied the knot.",
    user_id: 3
    },
    {
    wedding_name: "The Gates's Wedding",
    venue: "Space needle",
    guest_num: 120,
    description:
        "Under the beautiful night sky shining through the space needle windows, a wonderful couple were able to experience their wedding fantasy. The expense of the wedding ended up being way over budget, but the couple did not care. They were able to have over 120 guests that they love and care about see their dream come true.",
    image_url:
        "https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80",
    user_id: 2
    },
]

```

## GET /auth/weddings/user/

Returns an array of a User's wedding post. It will require a token which will provide the user's ID.

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
    wedding_name: "Smith's Wedding",
    venue: "Old Winery",
    guest_num: 200,
    description:
        "It was a traditional winery wedding held on a lovely summer evening. We were able to plan a wedding for over 200 guests. I kept the event underbudget",
    user_id: 1
    },
    {
    wedding_name: "Tori and Darci Wedding",
    venue: "Beach Side Resort",
    guest_num: 100,
    description:
        "A beach side wedding set at sunset along the LA California coastline. There were over 100 guests that attended this very romantic wedding. The wedding was slightly overbudget, but it was worth it when the Groom and Bride tied the knot.",
    user_id: 1
    }
]

```
