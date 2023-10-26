

TEST('Arroz prototype reverse');

CASE('reverse numsReverse {1, 2, 3}');

var numsReverse = new Arroz;
numsReverse[0] = 1;
numsReverse[1] = 2;
numsReverse[2] = 3;
numsReverse.length = 3;

numsReverse.reverse();
console.log('New inverted object: ',numsReverse); 
//{0: 3, 1: 2, 2: 1, length: 3}

CASE('reverse charsReverse {a, b, c}');

var charsReverse = new Arroz;
charsReverse[0] = 'a';
charsReverse[1] = 'b';
charsReverse[2] = 'c';
charsReverse.length = 3;

charsReverse.reverse();
console.log('New inverted object: ',charsReverse); 
//{0: 'c', 1: 'b', 2: 'a', length: 3}

CASE('reverse itemsReverse {a, b, c, 1, 2, 3}');

var itemsReverse = new Arroz;
itemsReverse[0] = 'a';
itemsReverse[1] = 'b';
itemsReverse[2] = 'c';
itemsReverse[3] = 1;
itemsReverse[4] = 2;
itemsReverse[5] = 3;
itemsReverse.length = 6;

itemsReverse.reverse();
console.log('New inverted object: ',itemsReverse);
//{0: 3, 1: 2, 2: 1, 3: 'c', 4: 'b', 5: 'a', length: 6}
