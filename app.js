'use strict';
const number = process.argv[2] || 0;
//process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列
console.log(process.argv);
//[ '/home/vagrant/.nvm/versions/node/v10.14.2/bin/node',
//  '/home/vagrant/workspace/300/002/app.js',
//  '100' ]

let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(sum);
