# Wedding Planner Portfolio Backend

This API allows you to create a User Known as a wedding planner, who can create a portfolio of weddings they have worked on.
Hosted URL for BackEnd

## [https://wedding-planner-buildweek.herokuapp.com/api/](https://wedding-planner-buildweek.herokuapp.com/api/)

# Endpoints

## POST /auth/user/login

#### Expected Payload:

```
{
    username: user,
    password: password1234
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
