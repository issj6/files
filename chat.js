// path/to/your/file.js
// 创建按钮并添加到页面
const button = document.createElement('button');
button.innerText = '点击我';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '1000'; // 确保按钮在最上层
document.body.appendChild(button);

let iframe; // 声明 iframe 变量

// 点击按钮后显示或隐藏 iframe
button.addEventListener('click', () => {
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.src = 'https://example.com'; // 替换为你想嵌入的网页
        iframe.style.position = 'fixed';
        iframe.style.bottom = '60px'; // 调整位置以避免覆盖按钮
        iframe.style.right = '20px';
        iframe.style.width = '300px'; // 设置宽度
        iframe.style.height = '200px'; // 设置高度
        iframe.style.zIndex = '1000'; // 确保在最上层
        document.body.appendChild(iframe);
    } else {
        document.body.removeChild(iframe); // 移除 iframe
        iframe = null; // 重置 iframe 变量
    }
});