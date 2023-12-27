# App

## Intro

DisPark is an idea born from the need to make the daily task of locating parking spaces a little easier for people with reduced mobility. 

With DisPark, with a simple click, we can position the parking spaces when we are in them, so they will be ready to be selected as a destination in our browser in future uses.

With DisPark we can also locate adapted parking spaces close to us or to a given address, previously marked by other users.

DisaPark is born with the concepts of collaboration and community in its DNA. So we can all benefit from its responsible use, comments, photographs, evaluations and complaints.


![](https://i.giphy.com/media/jQmn1Dkw55R3cjm3eC/giphy.webp)

## Functional Description

### Use Cases

- publish parking (with geo)
- show parkings around (with geo)
- review parking (comment, photo, ...)
- search parking by address
- view parking detail
- calculate route to parking

## Technical Description

### Data Model

User
- id (string, unique, required)
- name (string, required)
- email (string, unique, required)
- password (string, required)

Parking
- id (string, unique, required)
- location (numbers array [lat, long], required)
- reviews ([Review])

Review
- id (string, unique, required)
- author (User.id, required)
- comment (string, required)
- valuation (number, required)