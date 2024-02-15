//data (lo que vamos a hacer es crear una array que guarde los usuarios que usen esta app, una base de datos de juguete)
var users = []
var posts = []

//populate some users
users[0] = {
    name: "Pepito Grillo",
    email: "pepito@grillo.com",
    password: "123123123"
}

users[1] = {
    name: "Campa Nilla",
    email: "campa@nilla.com",
    password: "123123123"
}

users[2] = {
    name: "Mafalda Niña",
    email: "mafalda@nina.com",
    password: "123123123"
}



//populate some posts
posts[0] = {
    author: "pepito@grillo.com",
    image: "https://imgs.search.brave.com/KYetCiw1rgr1fq3bX8kvtM1NJmcbuTbh10z4FG9KumA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODdiNTczNzQ0MDYw/OTA5YWE2MDNhYTgu/cG5n",
    imageDescription: "Pepito Grillo volando agarrado  a un paraguas",
    text: "Pepito Grillo en acción",
    likes: []
}
posts[1] = {
    author: "campa@nilla.com",
    image: "https://imgs.search.brave.com/RB6hZ4oGv9OeVRcnsPm39FXsqOeS8Mrwm77djH0X2yU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmZp/ZXN0YWlkZWFzY2x1/Yi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTQvMDEvZm9u/ZG9fZGVfdGlua2Vy/YmVsbF93cF8xXzEw/MjR4NzY4LmpwZz9y/ZXNpemU9NjQwLDQ4/MA",
    imageDescription: "Campanilla sonriente",
    text: "Toda un hada, para soñar",
    likes: ["pepito@grillo.com"]
}
posts[2] = {
    author: "mafalda@niña.com",
    image: "https://imgs.search.brave.com/Xebwv60c9mFsUL_5VgB3onTkK1VgAMrphrzoPpsN-As/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU1LzU0/Lzg3LzU1NTQ4N2E4/YjhhOGQ5NTEyMGQ0/MmVlMmEyZjFmZWVk/LS1tYWZhbGRhLXF1/b3Rlcy1tb3VudGFp/bi1iaWtlLmpwZw",
    imageDescription: "Mafalta con un letrero, dice aqui nadie se va rendir",
    text: "Vamos a ello",
    likes: ["pepito@grillo.com"]
}

posts[3] = {
    author: "pepito@grillo.com",
    image: "https://imgs.search.brave.com/5IuVHgpWBbg4nMHZoM9k6gHvNpG_83JsWmDuLVd5ih8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI1Lzlm/L2NmLzI1OWZjZmMy/ZjlmOGZiM2RmODdh/ZTAzMDFjN2RiZTlm/LmpwZw",
    imageDescription: "Shin Chan con su padre, madre, hermana y perro",
    text: "Mira que trompa, que cacho trooompa",
    likes: ["campa@nilla.com"]
}
