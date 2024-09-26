// path/to/your/file.js
// 创建按钮并添加到页面
const button = document.createElement('button');
button.innerText = 'Chat';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '1000'; // 确保按钮在最上层
button.style.width = '60px'; // 设置宽度
button.style.height = '60px'; // 设置高度
button.style.borderRadius = '50%'; // 圆形按钮
button.style.backgroundColor = '#8DEEEE'; // 蓝色背景
button.style.color = 'white'; // 白色文字
button.style.border = 'none'; // 无边框
button.style.fontSize = '16px'; // 字体大小
button.style.cursor = 'pointer'; // 鼠标指针样式
document.body.appendChild(button);

let iframe; // 声明 iframe 变量

// 点击按钮后显示或隐藏 iframe
button.addEventListener('click', () => {
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.src = 'http://10.239.89.37:8501/?kb=066a1cf4'; // 替换为你想嵌入的网页
        iframe.style.position = 'fixed';
        iframe.style.bottom = '60px'; // 调整位置以避免覆盖按钮
        iframe.style.right = '20px';
        iframe.style.width = '350px'; // 设置宽度
        iframe.style.height = '600px'; // 设置高度
        iframe.style.border = '1px'; // 设置高度
        iframe.style.zIndex = '1000'; // 确保在最上层
        document.body.appendChild(iframe);
    } else {
        document.body.removeChild(iframe); // 移除 iframe
        iframe = null; // 重置 iframe 变量
    }
});
