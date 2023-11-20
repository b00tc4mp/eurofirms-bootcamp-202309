# App

## Intro

blah blah ...

![](https://i.giphy.com/media/jQmn1Dkw55R3cjm3eC/giphy.webp)

## Functional Description

### Use Cases

- view shared posts
- publish a post
- delete post
- like / unlike post (toggle)
- save / unsave post (toggle)
- view saved posts
- view own posts

## Technical Description

### Data Model

User
- id (string, unique, required)
- name (string, required)
- email (string, unique, required)
- password (string, required)
- saved ([Post id])

Post
- id (string, unique, required)
- image (string, required)
- imageDescription (string, required)
- text (string, required)
- likes ([User id])