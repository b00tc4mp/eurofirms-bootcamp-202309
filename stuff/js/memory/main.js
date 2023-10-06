var a = 1
a.name = 'Pepito'

var b = {}
b.name = 'Pepito'

var c
c = a

a = 2

var d = b
d.name = 'Wendy'

b.surname = 'Darling'

var e = []
e[0] = 10
e[1] = 20
e[2] = 30
e.name = 'Peter'
e[3] = b
e[3].surname = 'Pan'

var f = function () { return 'hola mundo' }

d.fun = f

f.surname = 'Pan'

function add(n1, n2) {
    return n1 + n2
}

function rename(obj, name) {
    obj.name = name
}

rename(b, 'Pitufo')