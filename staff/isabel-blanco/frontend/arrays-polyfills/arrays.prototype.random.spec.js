TEST('Array prototype none')

CASE('Check no words have length greater than 8 chars in names')

var names = ['jonatan', 'isabel', 'david', 'eileen', 'elena', 'katherine']

var result = names.none(function (name) {
    return name.length > 8
})