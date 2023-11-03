const path = require('path');
const fs = require('fs');

// 组件路径
const componentExistPath = path.join(__dirname, '../src/components');

// 生成打包时的入口文件
const componentAllEntryPath = path.join(__dirname, '../src/index.ts');

try {
    const files = fs.readdirSync(componentExistPath);
    let fileString = '';
    files.forEach(item => {
        fileString += `export { default as ${item} } from './components/${item}/index'\n`;
    });
    fs.writeFileSync(componentAllEntryPath, fileString);
    console.log('生成文件成功!!!');
} catch (error) {
    console.log('生成文件报错:', error);
};