TEST('Arroz prototype includes')

CASE('check arroz nums2 includes 40')

const nums2 = new Arroz;
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;
nums.length = 5;

const exists40 = nums2.includes (40);
console.log(exists40);
//true

CASE('check arroz nums3 includes 60')

const nums3 = new Arroz
nums3[0] = 10;
nums3[1] = 20;
nums3[2] = 30;
nums3[3] = 40;
nums3[4] = 50;
nums3.length = 5;

const exists60 = nums3.includes(60);

console.log(exists60);
// false

CASE('check arroz animals includes tiger')

const animals = new Arroz;
animals[0] = 'cat';
animals[1] = 'dog';
animals[2] = 'lion';
animals[3] = 'tiger';
animals[4] = 'monkey';
animals[5] = 'snake';
animals[6] = 'horse';
animals.length = 7;

const existsTiger = animals.includes('tiger');
console.log(existsTiger);
//true

CASE('check arroz animals2 includes elephant')

const animals2 = new Arroz;
animals2[0] = 'cat';
animals2[1] = 'dog';
animals2[2] = 'lion';
animals2[3] = 'tiger';
animals2[4] = 'monkey';
animals2[5] = 'snake';
animals2[6] = 'horse';
animals2.length = 7;

const existsElephant = animals2.includes('elephant');
console.log(existsElephant);
// false
